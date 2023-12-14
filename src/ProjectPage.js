import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProjectPage.css';

const ProjectPage = () => {
  const url="http://localhost:8080/projects";
  const [projects, setProjects] = useState([]);

    useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(url);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  // const handleEdit = (id) => {
  //   // Logic for editing a project with id
  //   console.log(`Editing project with id ${id}`);
  // };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
    } catch (error) {
      console.error(`Error deleting project with id ${id}:`, error);
    }
  };

    return (
      <div>
      <h1>List of Projects</h1>
        <Link to="/projects/create">
          <button>Create project</button>
        </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>description</th>
            <th>Editing</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>
                <Link to={`/projects/${project.id}/edit`}>
                  <button>Edit</button>
                </Link>
              </td>
              <td>
                <button onClick={() => handleDelete(project.id)}>Del</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default ProjectPage;
