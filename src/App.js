import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import ProjectPage from './ProjectPage';
import HomePage from './HomePage';
import ProjectEdit from "./ProjectEdit";
import ProjectCreate from "./ProjectCreate";

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
          <Route path="/projects/:id/edit" element={<ProjectEdit />} />
          <Route path="/projects/create" element={<ProjectCreate />} />
        </Routes>
    </div>
  </Router>
  );
}

export default App;
