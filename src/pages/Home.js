import React from 'react';
import '../css/Home.css';
import ProjectCard from '../components/ProjectCard';

function Home() {
    return (
        <>
            <div className="home">
                <div className="filter-bar">
                    {/* Добавьте элементы фильтра */}
                </div>
                <div className="project-grid">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    {/* Добавьте столько ProjectCard, сколько нужно */}
                </div>
            </div>
        </>

    );
}

export default Home;
