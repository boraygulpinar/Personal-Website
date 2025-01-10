import React from 'react'
import '../assets/css/projects.css'

function Projects() {
    return (
        <div className='project-container'>
            <div className='center-div'>
                <h2 className='title'>Projects</h2>
                <a href="https://github.com/boraygulpinar?tab=repositories" target='_blank' className='view-all'>View all projects</a>
            </div>
            <div className='projects-list'>
                <div className='project-card'>
                    <h3>Valorant Wikipedia </h3>
                    <p>Valorant information content with React and API</p>
                </div>
                <div className='project-card'>
                    <h3>Burger Design</h3>
                    <p>Burger concept design with React</p>
                </div>
                <div className='project-card'>
                    <h3>Currency Exchange</h3>
                    <p>Currency exchange rate application with React</p>
                </div>
            </div>
            <div className='projects-list'>
                <div className='project-card'>
                    <h3>BlogApp</h3>
                    <p>Blog Project developed using .Net Core</p>
                </div>
                <div className='project-card'>
                    <h3>Dynamic CV Site</h3>
                    <p>CV site with admin panel developed with .Net Core</p>
                </div>
                <div className='project-card'>
                    <h3>MyPortfolio</h3>
                    <p>Portfolio project developed with .Net Core</p>
                </div>
            </div>
        </div>
    )
}

export default Projects