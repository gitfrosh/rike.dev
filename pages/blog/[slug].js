import * as Scroll from "react-scroll";
import Layout from "../../components/layout";
import PageTitleJournalSingle from "../../blocks/page-title/PageTitleJournalSingle";
import JournalDescription from "../../blocks/journal/JournalDescription";
import JournalTags from "../../blocks/journal/JournalTags";
import BackToHome from "../../components/button/BackToHome";
import { getAllPostSlugs, getPostBySlug } from "../../util/cms";
import Head from "next/head";

let scroll = Scroll.animateScroll;

export default function PostWrapper({ post, location }) {
    const scrollToTop = () => {
        scroll.scrollToTop(100, { smooth: true });
    };
    return (
        <>
            <Head>
                <title>rike.dev - {post.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="canonical" href={`https://rike.dev/blog/${post.slug}/`} />
                <meta name="description" content={post.description} />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Layout>
                <PageTitleJournalSingle text={post.title} />

                <section id="page-content" className="spacer m-top-sm">
                    <div className="wrapper">
                        <div id="single">
                            <div className="row gutter-width-lg">
                                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 position-static single-content">
                                    <JournalTags text={post.category} />

                                    <JournalDescription text={post.text} />

                                    <div className="spacer m-top-xl text-right">
                                        <BackToHome />
                                    </div>
                                </div>
                                <div className="align-self-end p-left-scroll">
                                    <a
                                        className="btn btn-link btn-vertical transform-scale-h border-0 p-0 scroll-to-id d-flex"
                                        onClick={scrollToTop}
                                    >
                                        <span className="vertical-text">
                                            <span>S</span>
                                            <span>c</span>
                                            <span>r</span>
                                            <span>o</span>
                                            <span>l</span>
                                            <span>l</span>
                                        </span>

                                        <span className="align-self-end">
                                            <i className="icon-c icon-arrow-up" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export async function getStaticPaths() {
    const res = await getAllPostSlugs();
    const paths = res.map((post) => ({ params: { slug: post.fields.slug } }));
    // Using fallback: "blocking" here enables preview mode for unpublished blog slugs
    // on production
    return {
        paths: paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({ params, preview = false }) {
    const post = await getPostBySlug(params.slug, {
        preview: preview,
    });

    // Add this with fallback: "blocking"
    // So that if we do not have a post on production,
    // the 404 is served
    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            preview,
            post,
        },
    };
}
