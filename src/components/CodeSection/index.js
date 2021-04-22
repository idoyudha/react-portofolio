import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiSqllite } from 'react-icons/di';
import { SiJavascript, SiDjango, SiHeroku, SiGithub, SiGooglecloud, SiDocker, SiMysql } from 'react-icons/si';
import { FaReact, FaCss3Alt, FaBootstrap, FaPython, FaNodeJs } from 'react-icons/fa';
import { CodeContainer, CodeWrapper, Heading, Logo } from './CodeElements';

const CodeSection = () => {
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
            </CodeContainer>
        </>
    )
}

export default CodeSection