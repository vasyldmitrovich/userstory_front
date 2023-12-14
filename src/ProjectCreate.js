import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProjectCreate = () => {
    const url="http://localhost:8080/projects";
    const [project, setProject] = useState({ name: '', description: '' });
    const navigate = useNavigate();

    const handleCreate = async (e) => {
        e.preventDefault();

        try {
            await axios.post(url, project);
            navigate('/projects');
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };

    return (
        <div>
            <h1>Creating new Project</h1>
            <form onSubmit={handleCreate}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={project.name}
                        onChange={(e) => setProject({ ...project, name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={project.description}
                        onChange={(e) => setProject({ ...project, description: e.target.value })}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default ProjectCreate;