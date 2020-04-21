import Head from "next/head";

const MyHead = ({title}) => (
  <Head>
    <title>{`rike.dev - ${title}`}</title>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width"
      key="viewport"
    />
    <link rel="stylesheet" href="/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/css/font.css" />
  </Head>
);

export default MyHead;
