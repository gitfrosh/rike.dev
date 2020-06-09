import fetch from "node-fetch";
let minako_host = "localhost";
if (process.env.NODE_ENV === "production") {
  minako_host = "minako";
}
const minako_port = process.env.process || "1340";

export default async function fetchPosts() {
  const res = await fetch(
    `http://${minako_host}:${minako_port}/api/published_posts`,
    {
      method: "GET",
    }
  );
  let posts = await res.json();
  //   console.log(posts);
  posts.forEach((post) => {
    post.date = post.date.replace(/-/g, "/");
    post.year = post.date.substring(0, 4);
    post.month = post.date.substring(5, 7);
    post.day = post.date.substring(8, 10);
  });
  //   console.log(posts);
  return posts;
}
