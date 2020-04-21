import MyHead from "../../components/MyHead";
import Layout from "../../components/Layout";
import fetch from "node-fetch";
import Markdown from "markdown-to-jsx";

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
      <MyHead title={"Blog"} />
      <Layout>
        <h2>{post.title}</h2>
        <p className="date">{post.date}</p>

        <section>
          <p className="text">
            <Markdown>{post.html}</Markdown>
          </p>
        </section>
        <div className="button">
        <button title="Back to top" className="scroll-up" onClick={handleClick}>
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
            transition: .4s;
          }

          .button button:hover {
            opacity: 0.7;
          }

          .intro {
            color: dimgray;
            font-size: 85%;
            position: relative;
            padding-left: 1em;
            border-left: 0.2em solid #4d91b3;
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
          h5 {
            margin-top: 20px;
            font-size: 14px;
          }
        `}
      </style>
    </>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://strapi:1337/posts", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOGNlMTNlMjQwNmMzMDA4NTRiMTQzMSIsImlhdCI6MTU4NjI5MjAxMSwiZXhwIjoxNTg4ODg0MDExfQ.Wicl1PfLf1tWG6Dq8c6SjjtKoj78yX0qOM76HyGryWA",
      "Content-Type": "application/json"
    }
  });
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map(post => ({
    params: { slug: post.slug, date: post.date }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch("http://strapi:1337/posts", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOGNlMTNlMjQwNmMzMDA4NTRiMTQzMSIsImlhdCI6MTU4NjI5MjAxMSwiZXhwIjoxNTg4ODg0MDExfQ.Wicl1PfLf1tWG6Dq8c6SjjtKoj78yX0qOM76HyGryWA",
      "Content-Type": "application/json"
    }
  });
  const posts = await res.json();

  const post = posts.filter(post => post.slug === params.slug)[0];
  // Pass post data to the page via props
  return { props: { post } };
}

export default Post;
