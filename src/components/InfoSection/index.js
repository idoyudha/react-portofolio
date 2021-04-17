import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, Img  } from './InfoElements'

const InfoSection = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                        <TextWrapper>
                            <TopLine>TopLine</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Heading</Subtitle>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>  
        </>
    )
}

export default InfoSection
