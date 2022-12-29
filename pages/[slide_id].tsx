import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Slide, slides } from "../lib/slides";
import pdfjsWorkerSrc from "../pdf-worker";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorkerSrc;

interface Props {
  slide: Slide;
}

const SlidePermalink = ({ slide }: Props) => {
  const router = useRouter();
  const [numPages, setNumPages] = useState(1);
  const page = useMemo(() => {
    if (!router.isReady) {
      return 1;
    }

    const page = router.query?.slide;
    if (typeof page !== "string") {
      return 1;
    }

    const pageNum = parseInt(page, 10);
    if (Number.isNaN(pageNum)) {
      return 1;
    }

    if (pageNum < 1 || pageNum > numPages) {
      return 1;
    }

    return pageNum;
  }, [numPages, router.isReady, router.query?.slide]);

  const handleLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };
  const paginate = (to: number) => {
    if (to < 1 || to > numPages) {
      return;
    }
    const url = new URL(location.href);
    if (to === 1) {
      url.searchParams.delete("slide");
    } else {
      url.searchParams.set("slide", to.toString());
    }
    router.replace(url, undefined, { shallow: true });
  };

  return (
    <>
      <Head>
        <title>{slide.title}</title>
      </Head>
      <div>
        <h1>{slide.title}</h1>
        <button onClick={() => paginate(page - 1)} disabled={page === 1}>
          prev
        </button>
        <button onClick={() => paginate(page + 1)} disabled={page === numPages}>
          next
        </button>
        <Link href={slide.url}>download</Link>
        <Document file={slide.url} onLoadSuccess={handleLoadSuccess}>
          <Page
            pageNumber={page}
            height={405}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: Array.from(slides.keys()).map((id) => ({
      params: { slide_id: id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = (context) => {
  const id = context.params?.slide_id;
  if (typeof id !== "string") {
    return { notFound: true };
  }

  const slide = slides.get(id);
  if (!slide) {
    return { notFound: true };
  }

  return { props: { slide } };
};

export default SlidePermalink;
