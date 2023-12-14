import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const ProjectEdit = ({ match }) => {
    const url="http://localhost:8080/projects";
    const { id: projectId} = useParams();
    const [project, setProject] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`${url}/${projectId}`);
                setProject(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(`Error fetching project with id ${projectId}:`, error);
            }
        };

        fetchProject();
    }, [projectId]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`${url}/${projectId}`, project);
            navigate('/projects');
        } catch (error) {
            console.error(`Error updating project with id ${projectId}:`, error);
        }
    };

    return (
        <div>
            <h1>Update of project</h1>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="id">ID:</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        value={project.id || ''}
                        readOnly
                    />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={project.name || ''}
                        onChange={(e) => setProject({ ...project, name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={project.description || ''}
                        onChange={(e) => setProject({ ...project, description: e.target.value })}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default ProjectEdit;