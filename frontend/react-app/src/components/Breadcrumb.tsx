import React from "react";
import "./Breadcrumb.css";

function Breadcrumb(props: any) {
  return (
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="/blog">blog</a>
      </li>
      <li
        className="breadcrumb-item active"
        aria-current={true}
      >
        post
      </li>
    </ol>
  );
}

export default Breadcrumb;
