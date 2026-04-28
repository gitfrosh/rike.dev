import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

const Page404 = () => (
  <>
    <Head>
      <title>rike.dev — 404</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </Head>

    <Layout>
      <section className="page">
        <div className="container">
          <h1 className="title">Not found.</h1>
          <div className="prose">
            <p>The page you were looking for couldn't be found.</p>
            <p>
              <Link href="/">← Back to the homepage</Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  </>
);

export default Page404;
