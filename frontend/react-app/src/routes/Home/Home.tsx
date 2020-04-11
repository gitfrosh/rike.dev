import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <span className="title">
        <h2>rike.dev</h2>
        <p>web development & beyond</p>
      </span>
      <section className="text">
        <p>
          Hi, I'm ulrike (or just rike) and I am a software developer from
          Berlin with a focus on web technologies including · JavaScript ·
          Node.js · HTML5 · CSS3 · React.js · Vue.js · Redux . GraphQL · Django
          · Flask · PostgreSQL · MongoDB and others. I hold a Master's degree in
          computer science from
          <a
            target="_blank"
            href="http://osmi.th-brandenburg.de/"
            rel="noopener noreferrer"
          >
            Brandenburg University of Applied Sciences
          </a>{" "}
          and I have worked as online content manager, librarian and freelance
          web developer. Annually, I give talks for beginners in web development
          at{" "}
          <a
            target="_blank"
            className="fancy-link"
            href="https://www.informatica-feminale.de/"
            rel="noopener noreferrer"
          >
            Informatica Feminale
          </a>{" "}
          in Bremen to inspire more women to get into web development. Sometimes
          I produce audio podcasts for scientific purposes and I like
          <a
            className="fancy-link"
            target="_blank"
            href="https://rike.dev"
            rel="noopener noreferrer"
          >
            writing
          </a>
          . If you'd like to connect, do not hesitate to drop a line! <br />
        </p>
      </section>
      <section className="icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:hello@ueberdiespree.de"
        >
          <img
            className="icon"
            src="img/icons/001-at-symbol-inside-a-circle.svg"
            alt="E-Mail me"
          />
        </a>

        <a
          target="_blank"
          href="https://github.com/gitfrosh/"
          rel="noopener noreferrer"
        >
          <img className="icon" src="img/icons/004-circle.svg" alt="Github" />
        </a>

        <a rel="noopener noreferrer" target="_blank" href="https://rike.dev/">
          <img
            className="icon"
            src="img/icons/003-wordpress-logo.svg"
            alt="Wordpress"
          />
        </a>

        <a
          target="_blank"
          href="https://www.instagram.com/ueberdiespree/"
          rel="noopener noreferrer"
        >
          <img
            className="icon"
            src="img/icons/002-instagram-logo.svg"
            alt="Instagram"
          />
        </a>
        <a
          target="_blank"
          href="https://www.xing.com/profile/Ulrike_Exner4"
          rel="noopener noreferrer"
        >
          <img
            className="icon"
            src="img/icons/005-xing-icomoon.svg"
            alt="Xing"
          />
        </a>
      </section>
    </>
  );
}

export default Home;
