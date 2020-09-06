import Head from "next/head";

const MyHead = ({ title, description }) => (
  <Head>
    <title>{`rike.dev - ${title}`}</title>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <meta http-equiv="content-Type" content="text/html; utf-8" />
    <meta http-equiv="Pragma" content="cache" />
    <meta name="robots" content="INDEX,FOLLOW" />
    <meta http-equiv="content-Language" content="en" />
    <meta name="description" content={description} />
    <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono&display=swap" rel="stylesheet" />
    <meta name="keywords" content="web development react nodejs python javascript frontend backend" />
    <meta name="author" content="Ulrike Exner" />
    <meta name="revisit-after" content="2 days" />
    <title>rike.dev - Web development & beyond</title>
    <link rel="stylesheet" href="/css/bootstrap.min.css" />
    {/* <link rel="stylesheet" href="/css/font.css" /> */}
  </Head>
);

export default MyHead;
