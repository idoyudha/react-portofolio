import React from 'react'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP } from './ProjectElements'
import Icon1 from '../../images/project.svg'
import Icon2 from '../../images/social.svg'
import Icon3 from '../../images/resume.svg'

const Projects = () => {
    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsH1>List of Project</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectsCard>
                        <ProjectsIcon src={Icon1} />
                        <ProjectsH2>Lorem</ProjectsH2>
                        <ProjectsP>impsum</ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsIcon src={Icon2} />
                        <ProjectsH2>Lorem</ProjectsH2>
                        <ProjectsP>impsum</ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsIcon src={Icon3} />
                        <ProjectsH2>Lorem</ProjectsH2>
                        <ProjectsP>impsum</ProjectsP>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer> 
        </>
    )
}

export default Projects
