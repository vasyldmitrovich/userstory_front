import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

  const handleEdit = (id) => {
    // Logic for editing a project with id
    console.log(`Editing project with id ${id}`);
  };

  const handleDelete = (id) => {
    // Logic for deleting a project with id
    console.log(`Deleting project with id ${id}`);
  };

    return (
      <div>
      <h1>List of Projects</h1>
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
                <button onClick={() => handleEdit(project.id)}>Edit(in progress...)</button>
              </td>
              <td>
                <button onClick={() => handleDelete(project.id)}>Del(in progress...)</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default ProjectPage;
