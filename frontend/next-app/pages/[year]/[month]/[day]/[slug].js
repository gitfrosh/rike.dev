import MyHead from "../../../../components/MyHead";
import Layout from "../../../../components/Layout";
import Markdown from "markdown-to-jsx";
import fetchPosts from "../../../../helpers/api";

const Post = ({ post }) => {
  const handleClick = e => {
    e.preventDefault();
    console.log("rfs");
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth"
    });
  };
  return (
    <>
      {/* <Breadcrumb /> */}
      <MyHead title={`Blog - ${post.title}`} />
      <Layout>
        <h2>{post.title}</h2>
        <p className="date">{post.date}</p>

        <section>
          <p className="text">
            <Markdown>{post.html}</Markdown>
          </p>
        </section>
        <div className="button">
          <button
            title="Back to top"
            className="scroll-up"
            onClick={handleClick}
          >
            <span>&#9652;</span>
          </button>
        </div>
      </Layout>

      <style jsx>
        {`
          .date {
            text-transform: uppercase;
            letter-spacing: 1px;
            color: lightslategray;
            font-size: 10px;
            font-weight: 100;
          }

          .button {
            text-align: right;
            margin-bottom: -15px;
          }

          .button button {
            display: inline-block;
            text-decoration: none;
            color: darkgrey;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 0px;
            text-align: center;
            vertical-align: middle;
            overflow: hidden;
            transition: 0.4s;
          }

          .button button:hover {
            opacity: 0.7;
          }

          h2 {
            font-size: 16px;
            line-height: 25px;
            letter-spacing: 0.5px;
            margin-bottom: -3px;
          }

          h3 {
            font-weight: 550;
            font-size: 16px;
          }

          h4 {
            font-size: 15px;
          }
        `}
      </style>
    </>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = await fetchPosts();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map(post => ({
    params: {
      slug: post.slug,
      year: post.year,
      month: post.month,
      day: post.day
    }
  }));
  console.log(paths)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const posts = await fetchPosts();

  const post = posts.filter(post => post.slug === params.slug)[0];
  // Pass post data to the page via props
  return { props: { post } };
}

export default Post;
