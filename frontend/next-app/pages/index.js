import MyHead from "./../components/MyHead";
import Layout from "./../components/Layout";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <MyHead title={"Home"} />
      <Layout>
        <>
          <span className="title">
            <h1>rike.dev</h1>
            <p>web development & beyond</p>
          </span>
          <section className="text">
            <p>
              Hi, I'm ulrike (or just rike) and I am a software developer from
              Berlin with a focus on web technologies including · JavaScript ·
              Node.js · HTML5 · CSS3 · React.js · Vue.js · Redux . GraphQL ·
              Django · Flask · PostgreSQL · MongoDB and others. I hold a
              Master's degree in computer science from <a
                target="_blank"
                href="http://osmi.th-brandenburg.de/"
                rel="noopener noreferrer"
              >
                Brandenburg University of Applied Sciences
              </a> and I have worked as online content manager, librarian and
              freelance web developer. Annually, I give talks for beginners in
              web development at <a
                target="_blank"
                className="fancy-link"
                href="https://www.informatica-feminale.de/"
                rel="noopener noreferrer"
              >
                Informatica Feminale
              </a> in Bremen to inspire more women to get into web development.
              Sometimes I produce audio podcasts for scientific purposes and I
              like <Link href="/blog">
                writing
              </Link>
              . If you'd like to connect, do not hesitate to drop a line! <br />
            </p>
          </section>
          <section className="icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:hello@rike.dev"
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
              <img
                className="icon"
                src="img/icons/004-circle.svg"
                alt="Github"
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
      </Layout>
      <style jsx>{`
        .icons {
          position: absolute;
          bottom: 0;
          right: 0;
          padding: 27px 45px;
        }

        .icon {
          width: 1.8em;
          padding: 0.5em 0.5em 0.5em 0.5em;
          box-shadow: unset;
          border: unset;
        }

        @media only screen and (max-width: 767px) {
          .text {
            margin-bottom: 60px;
          }
        }
      `}</style>
    </div>
  );
}

export default HomePage;
