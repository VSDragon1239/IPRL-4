import React from 'react';
import '../css/ProjectCard.css';

function ProjectCard() {
    return (
        <div className="project-card">
            <img src="#" alt="Project" />
            <div className="project-info">
                <h3>Название проекта</h3>
                <p>Автор: ...</p>
                <p>Лайки: ...</p>
            </div>
        </div>
    );
}

export default ProjectCard;

