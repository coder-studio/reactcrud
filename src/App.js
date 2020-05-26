// Libraries
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Components
import Create from "./components/create.component";
import Edit from "./components/edit.component";
import Index from "./components/index.component";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bglight">
            <Link to={"/"} className="navbar-brand">
              React Crud Example
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportContent">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/create"} className="nav-link">
                    Create
                  </Link>
                </li>
                <li>
                  <Link to={"/index"} className="nav-link">
                    Index
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <h2>React Crud</h2>
          <Switch>
            <Route exact path="/create" component={Create} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/index" component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
