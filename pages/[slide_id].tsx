import { GetStaticPaths, GetStaticProps } from "next";
import { Slide, slides } from "../lib/slides";

interface Props {
  slide: Slide;
}

const SlidePermalink = ({ slide }: Props) => {
  return (
    <div>
      <h1>{slide.title}</h1>
      <p>{slide.url}</p>
    </div>
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
