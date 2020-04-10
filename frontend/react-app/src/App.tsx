import React from "react";
import "./App.css";
import Home from "./routes/Home/Home";
import Blog from "./routes/Blog/Blog";
import Post from "./routes/Blog/Post";
import Projects from "./routes/Projects/Projects";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <main>
          <div className="wrapper-io">
            <Nav />
            {/* <div className="content"> */}
              <div className="outline">
                <div className="box">
                  <Route path="/" exact component={Home} />
                  <Route path="/blog" exact component={Blog} />
                  <Route path="/blog/:date/:slug" component={Post} />
                  <Route path="/projects" exact component={Projects} />
                </div>
              </div>
            {/* </div> */}
          </div>
        </main>
    </Router>
  );
}

export default App;
