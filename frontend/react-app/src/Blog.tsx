import React, { useState, useEffect } from "react";
import "./Blog.css";

function Blog() {
  const [posts, setPosts] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:1337/posts", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOGNlMTNlMjQwNmMzMDA4NTRiMTQzMSIsImlhdCI6MTU4NjI5MjAxMSwiZXhwIjoxNTg4ODg0MDExfQ.Wicl1PfLf1tWG6Dq8c6SjjtKoj78yX0qOM76HyGryWA",
          "Content-Type": "application/json"
        }
      }).then(res =>
        res.json().then(res => {
          setPosts(res);
          setLoading(false);
        })
      );
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <span className="title">
        <h2>blog</h2>
      </span>
      <section>
        <ul>
          {posts.map((post: any) => (
            <li key={post._id}>
              <a href={`${post.slug}`}>
                {post.date}: {post.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Blog;
