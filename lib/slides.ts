export type Slide = {
  title: string;
  url: string;
};

export const slides = new Map<string, Slide>([
  [
    "yapc-japan-online-2022",
    {
      title: "prototypeとjust epic. と私",
      url: "https://sugarheart.utgw.net/static/pdf/20220305-prototype-and-just-epic-and-me.pdf",
    },
  ],
  [
    "hatena-engineer-seminar-number-18",
    {
      title: "GraphQLを使った共同開発の心構え 〜 フロントエンドの視点から",
      url: "https://sugarheart.utgw.net/static/pdf/20220126-hatena-engineer-seminar-18-graphql.pdf",
    },
  ],
  [
    "yapc-nagoya-tiny-2019",
    {
      title: "他言語ユーザから見たPerlのおもしろさ",
      url: "https://sugarheart.utgw.net/static/pdf/20191103-yapc-nagoya-tiny-2019.pdf",
    },
  ],
  [
    "yapc-nagoya-tiny-2019-lt",
    {
      title: "VJに使えそうなコマンドたち、そしてjustifyのご紹介",
      url: "https://sugarheart.utgw.net/static/pdf/20191103-yapc-nagoya-tiny-2019-lt.pdf",
    },
  ],
  [
    "sukui-as-a-service",
    {
      title:
        "画像自動保存・閲覧システム「救い」によってもたらされる効能; 死にゆくTwitter Streaming APIへの別れの言葉を添えて",
      url: "https://sugarheart.utgw.net/static/pdf/20180316-sukui-harugasshuku2018.pdf",
    },
  ],
  [
    "chi-mei-wang-liang-intanetuto",
    {
      title: "魑魅魍魎インターネット",
      url: "https://sugarheart.utgw.net/static/pdf/20170508-evil-internet.pdf",
    },
  ],
  [
    "pythonfalsechu-li-xi-hadofalseyounishi-zhuang-sare-dofalseyounidong-iteirufalseka-wo-hasofalseshi-tai-wodiao-cha-subekuamazonhetofei-nda",
    {
      title:
        "Pythonの処理系はどのように実装され，どのように動いているのか？ 我々はその実態を調査すべくアマゾンへと飛んだ．",
      url: "https://sugarheart.utgw.net/static/pdf/20170308-inside-python-interpreter.pdf",
    },
  ],
  [
    "atarasiisi-kawodong-kasitemitahanasi",
    {
      title: "あたらしい伺かを動かしてみたはなし",
      url: "https://sugarheart.utgw.net/static/pdf/20161201-new-ukagaka.pdf",
    },
  ],
  [
    "jing-de-xing-fu-keyan-yu-python",
    {
      title: "静的型付け言語Python",
      url: "https://sugarheart.utgw.net/static/pdf/20160714-statically-typed-python.pdf",
    },
  ],
]);
