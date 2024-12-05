import React from 'react'
import { SiJavascript, SiGithub, SiGooglecloud, SiMysql, SiPostgresql, SiRedis, SiRabbitmq, SiApachekafka } from 'react-icons/si';
import { FaReact, FaPython, FaNodeJs, FaJava, FaAmazon } from 'react-icons/fa';
import { Caption, CodeContainer, CodeWrapper, Heading, Logo } from './CodeElements';
import { FaGolang } from 'react-icons/fa6';
import { RiNextjsFill } from 'react-icons/ri';
// import GitHubCalendar from 'react-github-calendar';


const CodeSection = () => {
    return (
        <>
            <CodeContainer id="code">
                <Heading>Skillset</Heading>
                <CodeWrapper>
                    <Logo color={'#00ADD8'}>
                        <FaGolang />
                        <Caption>Golang</Caption>
                    </Logo>
                    <Logo color={'#4B8BBE'}>
                        <FaPython />
                        <Caption>Python</Caption>
                    </Logo>
                    <Logo color={'#f0db4f'}>
                        <SiJavascript />
                        <Caption>JavaScript</Caption>
                    </Logo>
                    <Logo color={'#5382A1'}>
                        <FaJava />
                        <Caption>Java</Caption>
                    </Logo>
                    <Logo color={'#3c873a'}>
                        <FaNodeJs />
                        <Caption>Node JS</Caption>
                    </Logo>
                    <Logo color={'#61DBFB'}>
                        <FaReact />
                        <Caption>React</Caption>
                    </Logo>
                    <Logo color={'#FFFFFF'}>
                        <RiNextjsFill />
                        <Caption>Next JS</Caption>
                    </Logo>
                    <Logo color={'#161B22'}>
                        <SiGithub />
                        <Caption>Github</Caption>
                    </Logo>
                    <Logo color={'#4285F4'}>
                        <SiGooglecloud />
                        <Caption>Google Cloud</Caption>
                    </Logo>
                    <Logo color={'#FF9900'}>
                        <FaAmazon />
                        <Caption>AWS</Caption>
                    </Logo>
                    <Logo color={'#FF6600'}>
                        <SiRabbitmq />
                        <Caption>RabbitMQ</Caption>
                    </Logo>
                    <Logo color={'#FFFFFF'}>
                        <SiApachekafka />
                        <Caption>Kafka</Caption>
                    </Logo>
                    <Logo color={'#00758F'}>
                        <SiMysql />
                        <Caption>My SQL</Caption>
                    </Logo>
                    <Logo color={'#336791'}>
                        <SiPostgresql />
                        <Caption>PostgreSQL</Caption>
                    </Logo>
                    <Logo color={'#D82C20'}>
                        <SiRedis />
                        <Caption>Redis</Caption>
                    </Logo>
                </CodeWrapper>
                {/* <Heading>Days I Code</Heading> */}
                {/* <GitHubCalendar 
                    username="idoyudha"
                /> */}
            </CodeContainer>
        </>
    )
}

export default CodeSection