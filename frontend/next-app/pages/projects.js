import MyHead from "./../components/MyHead";
import Layout from "./../components/Layout";

function Projects() {
  return (
    <div>
      <MyHead
        description={"favourite own or collaborative projects"}
        title={"projects"}
      />
      <Layout>
        <>
          <span className="title">
            <h1>projects</h1>
            <p>favourite own or collaborative work</p>
          </span>
          <section>
            <p className="project-info">
              <b>The Lord of the Rings API</b> is the biggest JSON based data
              source providing information about the trilogy.{" "}
              <em>
                <a href="https://the-one-api.dev">Link</a>
              </em>
            </p>

            <p className="project-info">
              <b>minako</b> is a super lightweight headless, API-first,
              flat-file cms written in Node.js/Next.js made for blogs and other
              small content-driven frontends.{" "}
              <em>
                <a href="https://github.com/gitfrosh/minako">Link</a>
              </em>
            </p>

            <p className="project-info">
              <b>The friendly @femtech_ bot</b> retweets and supports female
              developers, scientists and engineers on Twitter.{" "}
              <em>
                <a href="https://twitter.com/femtech_">Link</a>
              </em>
            </p>

            <p className="project-info">
              <b>queersplitter.de</b> is a German collaborative blog on LGBTIQ
              history.{" "}
              <em>
                <a href="https://queersplitter.de">Link</a>
              </em>
            </p>

            <p className="project-info">
              <b>the false quote generator</b> is a fun project doing exactly
              what its name suggests.{" "}
              <em>
                <a href="https://false-quotes-generator.herokuapp.com/">Link</a>
              </em>
            </p>
          </section>
        </>
      </Layout>
      <style jsx>{`
        .project-info {
          max-width: 700px;
        }
      `}</style>
    </div>
  );
}

export default Projects;
