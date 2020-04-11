import React, { lazy, Suspense } from "react";
import "./App.css";
import Home from "./routes/Home/Home";
import Post from "./routes/Blog/Post";
import Projects from "./routes/Projects/Projects";
import Not_Found_404 from "./Not_Found_404";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Blog = lazy(() => import("./routes/Blog/Blog"));

function App() {
  return (
    <Router>
      <main>
        <div className="wrapper-io">
          <Nav />
          {/* <div className="content"> */}
          <div className="outline">
            <div className="box">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/blog" exact component={WaitingComponent(Blog)} />
                <Route path="/blog/:date/:slug" component={Post} />
                <Route path="/projects" exact component={Projects} />
                <Route path="*" component={Not_Found_404}>
          </Route>
              </Switch>
            </div>
          </div>
          {/* </div> */}
        </div>
      </main>
    </Router>
  );
}

function WaitingComponent(Component) {
  return props => (
    <Suspense
      fallback={
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );
}

export default App;
