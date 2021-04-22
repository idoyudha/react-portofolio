import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiSqllite } from 'react-icons/di';
import { SiJavascript, SiDjango, SiHeroku, SiGithub, SiGooglecloud, SiDocker, SiMysql } from 'react-icons/si';
import { FaReact, FaCss3Alt, FaBootstrap, FaPython, FaNodeJs } from 'react-icons/fa';
import { CodeContainer, CodeWrapper, Heading, Logo } from './CodeElements';
import GitHubCalendar from 'react-github-calendar';


const CodeSection = () => {
    const colourTheme = {
        background: "transparent",
        text: "#ffffff",
        grade0: "#cfccff",
        grade1: "#9e99ff",
        grade2: "#6e66ff",
        grade3: "#3d33ff",
        grade4: "#0d00ff",
    };

    return (
        <>
            <CodeContainer id="code">
                <Heading>Skillset</Heading>
                <CodeWrapper>
                    <Logo><AiFillHtml5 /></Logo>
                    <Logo><FaCss3Alt /></Logo>
                    <Logo><FaBootstrap /></Logo>
                    <Logo><SiJavascript /></Logo>
                    <Logo><FaReact /></Logo>
                    <Logo><FaPython /></Logo>
                    <Logo><SiDjango /></Logo>
                    <Logo><SiHeroku /></Logo>
                    <Logo><SiGithub /></Logo>
                    <Logo><SiGooglecloud /></Logo>
                    <Logo><DiSqllite /></Logo>
                </CodeWrapper>
                <Heading>Days I Code</Heading>
                <GitHubCalendar 
                    username="idoyudha" 
                    blockSize={14} 
                    blockMargin={5} 
                    fontSize={16} 
                    theme={colourTheme}
                    color="hsla(243, 100%, 69%, 1)" 
                />
            </CodeContainer>
        </>
    )
}

export default CodeSection