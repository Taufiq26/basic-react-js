import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Profile from "./pages/Profile";

function Home() {
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my site.
        </p>
        <Link className="App-link" to="/profile">
          {"Know me more ;)"}
        </Link>
      </header>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Fragment>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Fragment>
      </Routes>
    </Router>
  );
}

export default App;
