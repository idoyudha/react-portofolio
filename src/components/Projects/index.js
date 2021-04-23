import React from 'react'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectButton, ProjectsH2, ProjectsP } from './ProjectElements'
import komodo from '../../images/komodo.jpg'
import twitter from '../../images/twitter.png'
import ebay from '../../images/ebay.jpg'
import { FaGithub,  FaYoutube } from 'react-icons/fa';
import { GrHeroku } from 'react-icons/gr';

const Projects = () => {
    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsH1>Latest Project</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectsCard style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8) ), 
                    url(${komodo})` }}>
                        <ProjectsH2>Visit Komodo</ProjectsH2>
                        <ProjectButton logo={'github'}
                        href="https://github.com/idoyudha/visit_komodo" target="_blank">
                            <FaGithub/>
                            <ProjectsP>Github</ProjectsP>
                        </ProjectButton>
                        <ProjectButton logo={'heroku'}
                        href="https://visit-komodo.herokuapp.com/" target="_blank">
                            <GrHeroku/>
                            <ProjectsP>Heroku</ProjectsP>
                        </ProjectButton>
                    </ProjectsCard>
                    <ProjectsCard style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8) ), 
                    url(${twitter})`}}>
                        <ProjectsH2>Twitter Clone</ProjectsH2>
                        <ProjectButton logo={'github'}
                        href="https://github.com/idoyudha/network" target="_blank">
                            <FaGithub/>
                            <ProjectsP>Github</ProjectsP>
                        </ProjectButton>
                        <ProjectButton logo={'youtube'}
                        href="https://youtu.be/boHoIKwlolQ" target="_blank">
                            <FaYoutube/>
                            <ProjectsP>YouTube</ProjectsP>
                        </ProjectButton>
                    </ProjectsCard>
                    <ProjectsCard style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8) ), 
                    url(${ebay})` }}>
                        <ProjectsH2>Ebay Clone</ProjectsH2>
                        <ProjectButton logo={'github'} 
                        href="https://github.com/idoyudha/commerce" target="_blank">
                            <FaGithub/>
                            <ProjectsP>Github</ProjectsP>
                        </ProjectButton>
                        <ProjectButton logo={'youtube'}
                        href="https://youtu.be/g7FCuTAowHo" target="_blank">
                            <FaYoutube/>
                            <ProjectsP>YouTube</ProjectsP>
                        </ProjectButton>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer> 
        </>
    )
}

export default Projects
