import MyHead from "./../components/MyHead";
import Layout from "./../components/Layout";

function Projects() {
  return (
    <div>
      <MyHead title={"Home"} />
      <Layout>
      <>
      <span className="title">
        <h2>projects</h2>
      </span>
      <section>
        <p className="project-info">
          <b>Bot on Tap</b>. You need help setting up your own Twitter bot? We
          are here to help you developing and even running and maintaining it as
          "bot as a service".
        </p>

        <p className="project-info">
          <b>The Lord of the Rings API</b>. lorem ipsum.
        </p>

        <p className="project-info">
          <b>The friendly @femtech_ bot</b>
        </p>

        <p className="project-info">
          <b>queersplitter.de</b>. lorem
        </p>

        <p className="project-info">
          <b>the false quote generator</b>. fun project
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
