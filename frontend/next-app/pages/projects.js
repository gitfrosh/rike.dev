import MyHead from "./../components/MyHead";
import Layout from "./../components/Layout";

function Projects() {
  return (
    <div>
      <MyHead title={"Home"} />
      <Layout>
      <>
      <span className="title">
        <h1>projects</h1>
        <p>favourite own or collaborative work</p>

      </span>
      <section>
        <p className="project-info">
          <b>Bot on Tap</b>. Need help setting up your own Twitter bot? We
          are here to help you setting it up as "bot as a service". <em>coming soon</em>
        </p>

        <p className="project-info">
          <b>The Lord of the Rings API</b> is the biggest JSON based data source providing 
          information about the trilogy. <em><a href="https://the-one-api.dev">Link</a></em>
        </p>

        <p className="project-info">
          <b>The friendly @femtech_ bot</b> retweets and supports female developers, scientists and 
          engineers on Twitter. <em><a href="https://twitter.com/femtech_">Link</a></em>
        </p>

        <p className="project-info">
          <b>queersplitter.de</b> is a German collaborative blog on LGBTIQ history. <em><a href="https://queersplitter.de">Link</a></em>
        </p>

        <p className="project-info">
          <b>the false quote generator</b> is a fun project doing exactly what its name suggests. <em><a href="https://false-quotes-generator.herokuapp.com/">Link</a></em>
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
