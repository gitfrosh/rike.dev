import React from "react";
import "./App.css";
import Home from "./Home";
import Blog from "./Blog";
import Projects from "./Projects";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <div className="wrapper">
            <Nav />
            <div className="content">
              <div className="outline">
                <div className="box">
                  <Route path="/" exact component={Home} />
                  <Route path="/blog" component={Blog} />
                  <Route path="/projects" component={Projects} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
