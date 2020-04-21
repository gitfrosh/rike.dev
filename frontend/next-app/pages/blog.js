// You can use any data fetching library
import fetch from "node-fetch";
import Link from "next/link";
import MyHead from "./../components/MyHead";
import Layout from "./../components/Layout";

// posts will be populated at build time by getStaticProps()

function Blog({ posts, years }) {
  return (
    <>
      <MyHead title={"Blog"} />
      <Layout>
        <span className="title">
          <h2>blog</h2>
        </span>
        <section>
          {years.map(year => (
            <div key={year}>
              <h3>{year}</h3>
              <ul>
                {posts
                  .filter(post => post.date.substring(0, 4) === year)
                  .sort((a, b) => {
                    if (a.date > b.date) {
                      return -1;
                    }
                    if (b.date > a.date) {
                      return 1;
                    }
                    return 0;
                  })
                  .map(post => (
                    <li key={post._id}>
                      <Link prefetch={false}
                        href={`/[date]/[post]`}
                        as={`/${post.date}/${post.slug}`}
                        passHref
                      >
                        <a {...post}>{post.title}</a>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </section>
      </Layout>
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch("http://strapi:1337/posts", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOGNlMTNlMjQwNmMzMDA4NTRiMTQzMSIsImlhdCI6MTU4NjI5MjAxMSwiZXhwIjoxNTg4ODg0MDExfQ.Wicl1PfLf1tWG6Dq8c6SjjtKoj78yX0qOM76HyGryWA",
      "Content-Type": "application/json"
    }
  });
  const posts = await res.json();
  const years = Array.from(
    new Set(posts.map(post => post.date.substring(0, 4)))
  ).reverse();
  return {
    props: {
      posts: posts,
      years: years
    }
  };
}

export default Blog;
