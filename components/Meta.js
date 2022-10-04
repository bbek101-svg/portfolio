import Head from "next/head";
import favicon from "../public/favicon.ico";
function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "WebDev News",
  keywords:
    "webdev, web development, web development news, web development articles",
  description:
    "WebDev News is a web development news website. We share web development news and articles.",
};

export default Meta;
