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
        <title>rike.dev - Web development and beyond | Ulrike Exner</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="canonical" href={"https://rike.dev"} />
        <meta
          name="description"
          content="I'm Ulrike Exner (or just Rike), frontend developer from Berlin, hosting
       workshops for coding beginners."
        />
      </Head>
      <Layout>
        <PageTitleHome />
        <Contacts />
        <Projects />
        <br />
        <Blog posts={posts} />
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
