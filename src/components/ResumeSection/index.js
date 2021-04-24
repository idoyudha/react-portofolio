import React from 'react'
import { 
    ResumeContainer, 
    CaptionHeading,
    ResumeWrapper,
    Heading,
    Big,
    Content,
    Detail
} from './ResumeElements'
import {data} from './Data'

const ResumeSection = () => {

    const printData = () => {
        console.log(data)
    }
    return (
        <>
            <ResumeContainer>
                <CaptionHeading>Resume</CaptionHeading>
                <ResumeWrapper>
                    <Heading>Education</Heading>
                    <Big>
                        <Detail>Institut Teknologi Sepuluh Nopember</Detail>
                        <Detail>2014-2018</Detail>
                    </Big>
                    <Content>Chairman</Content>
                    <Content>2nd Winner</Content>
                </ResumeWrapper>
                <ResumeWrapper>
                    <Heading>Education</Heading>
                    <Big>
                        <Detail>Institut Teknologi Sepuluh Nopember</Detail>
                        <Detail>2014-2018</Detail>
                    </Big>
                    <Content>Chairman</Content>
                    <Content>2nd Winner</Content>
                </ResumeWrapper>
                <ResumeWrapper></ResumeWrapper>
                {printData()}
            </ResumeContainer>
        </>
    )
}

export default ResumeSection
