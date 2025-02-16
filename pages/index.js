import React from "react";
import Layout from "../components/layout";
import PageTitleHome from "../blocks/page-title/PageTitleHome";
import Blog from "../components/blog/blog";
import Projects from "../components/projects/Projects";
import Contacts from "../blocks/contacts/Contacts";
import { fetchEntries } from "../util/cms";
import Head from "next/head";

const RootIndex = ({ posts }) => {
  return (
    <>
      <Head>
        <title>rike.dev | Ulrike Exner</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="canonical" href={"https://rike.dev"} />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="I'm Ulrike Exner, cloud consultant & engineer from Berlin"
        />
      </Head>
      <Layout>
        <PageTitleHome />
        <Contacts />
        {/* <Projects /> */}
        <br />
        {/* <Blog posts={posts} /> */}
      </Layout>
    </>
  );
};

export default RootIndex;

export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });
  return {
    props: {
      posts,
    },
  };
}
