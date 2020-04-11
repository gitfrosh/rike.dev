import React, { useState, useEffect } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [years, setYears] = useState<[]>([]);

  const findUniqueYears = (posts: any) => {
    const years = posts.map((post: any) => post.date.substring(0, 4));
    const uniqueYears: any = Array.from(new Set(years));
    setYears(uniqueYears.reverse() );
  };

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
          findUniqueYears(res);
          setPosts(res);

          setLoading(false);
        })
      );
    };
    fetchData();
  }, []);


  return (
    <>
      <span className="title">
        <h2>blog</h2>
      </span>
      <section>
        {years.map(year => (
          <div key={year}>
            <h3>{year}</h3>
            <ul>
              {posts
                .filter((post: any) => post.date.substring(0, 4) === year)
                .sort((a: any, b: any) => {
                  if (a.date > b.date) {
                    return -1;
                }
                if (b.date > a.date) {
                    return 1;
                }
                return 0;
                })
                .map((post: any) => (
                  <li key={post._id}>
                    <Link
                      to={{
                        pathname: `/blog/${post.date}/${post.slug}`,
                        state: {
                          post: post
                        }
                      }}
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}

export default Blog;
