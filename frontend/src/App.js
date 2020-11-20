import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ExerciseList from "./components/list-exercises";
import ExerciseEdit from "./components/edit-exercises";
import ExerciseCreate from "./components/create-exercises";
import CaloriesPredict from "./components/predict-calories";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            className="navbar-brand"
            href="https://freecodecamp.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={
                "https://crushingwfh.com/static/6c31220f5d7ab59bbfe1bd024e491746/596ed/freecodecamp-logo.png"
              }
              width="30"
              height="30"
              alt="freecodecamp.com"
            />
          </a>
          <Link to="/" className="navbar-brand">
            MERN-Stack Exercise App
          </Link>
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Exercises
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Exercise
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/predict" className="nav-link">
                  Predict Calories
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" exact component={ExerciseEdit} />
        <Route path="/create" exact component={ExerciseCreate} />
        <Route path="/predict" exact component={CaloriesPredict} />
      </div>
    </Router>
  );
}

export default App;
