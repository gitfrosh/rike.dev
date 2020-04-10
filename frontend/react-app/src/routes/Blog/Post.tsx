import React from "react";
import "./Post.css";
import Markdown from "markdown-to-jsx";
import Breadcrumb from "../../components/Breadcrumb";

function Post(props: any) {
  const { post } = props.location.state;
  console.log(post);
  return (
    <>
    <Breadcrumb />
      <h2>{post.title}</h2>
      <section>
        <Markdown>{post.html}</Markdown>
      </section>
    </>
  );
}

export default Post;
