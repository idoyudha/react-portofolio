import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiSqllite } from 'react-icons/di';
import { SiJavascript, SiDjango, SiHeroku, SiGithub, SiGooglecloud, SiDocker, SiMysql } from 'react-icons/si';
import { FaReact, FaCss3Alt, FaBootstrap, FaPython, FaNodeJs } from 'react-icons/fa';
import { Caption, CodeContainer, CodeWrapper, Heading, Logo } from './CodeElements';
import GitHubCalendar from 'react-github-calendar';


const CodeSection = () => {
    const colourTheme = {
        background: "transparent",
        text: "#ffffff",
        grade0: "hsla(243, 100%, 95%, 1)",
        grade1: "hsla(243, 100%, 80%, 1)",
        grade2: "hsla(243, 100%, 65%, 1)",
        grade3: "hsla(243, 100%, 50%, 1)",
        grade4: "hsla(243, 100%, 35%, 1)",
    };

    return (
        <>
            <CodeContainer id="code">
                <Heading>Skillset</Heading>
                <CodeWrapper>
                    <Logo color={'#f06529'}>
                        <AiFillHtml5 />
                        <Caption>HTLM 5</Caption>
                    </Logo>
                    <Logo color={'#2965f1'}>
                        <FaCss3Alt />
                        <Caption>CSS3</Caption>
                    </Logo>
                    <Logo color={'#563d7c'}>
                        <FaBootstrap />
                        <Caption>Bootstrap</Caption>
                    </Logo>
                    <Logo color={'#f0db4f'}>
                        <SiJavascript />
                        <Caption>JavaScript</Caption>
                    </Logo>
                    <Logo color={'#61DBFB'}>
                        <FaReact />
                        <Caption>React</Caption>
                    </Logo>
                    <Logo color={'#4B8BBE'}>
                        <FaPython />
                        <Caption>Python</Caption>
                    </Logo>
                    <Logo color={'#092E20 '}>
                        <SiDjango />
                        <Caption>Django</Caption>
                    </Logo>
                    <Logo color={'#9E7CC1'}>
                        <SiHeroku />
                        <Caption>Heroku</Caption>
                    </Logo>
                    <Logo color={'#161B22'}>
                        <SiGithub />
                        <Caption>Github</Caption>
                    </Logo>
                    <Logo color={'#4285F4'}>
                        <SiGooglecloud />
                        <Caption>Google Cloud</Caption>
                    </Logo>
                    <Logo color={'#00758F'}>
                        <DiSqllite />
                        <Caption>SQL</Caption>
                    </Logo>
                </CodeWrapper>
                <Heading>Days I Code</Heading>
                <GitHubCalendar 
                    username="idoyudha" 
                    blockSize={14} 
                    blockMargin={5} 
                    fontSize={16} 
                    theme={colourTheme}
                />
            </CodeContainer>
        </>
    )
}

export default CodeSection