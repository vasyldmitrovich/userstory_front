import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import ProjectPage from './ProjectPage';
import HomePage from './HomePage';

function App() {
  return (
  <Router>
    <div className="App">
      <header>
      <h1>Frontend on React for project 'UserStory'</h1>
      <Link to="/" className="App-link">
        <button className="Button">Home</button>
      </Link>
      <Link to="/projects" className="App-link">
      <button className="Button">List of Projects</button>
      </Link>
      </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
    </div>
  </Router>
  );
}

export default App;
