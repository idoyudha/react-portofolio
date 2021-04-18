import React from 'react'
import { HeroContainer, HeroWrapper, HeroRow, HeroContent, HeroH1, HeroP, ImgContent, ImgWrap, Img } from './HeroElements'
import Type from './Type'
import img from '../../images/programming.svg'

const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroWrapper>
                    <HeroRow>
                        <HeroContent>
                            <HeroH1>
                                Hi, I'm Ido
                            </HeroH1>
                            <HeroP>
                                <Type/>
                            </HeroP>
                        </HeroContent>
                        <ImgContent>
                            <ImgWrap>
                                <Img src={img} alt='...developer'/>
                            </ImgWrap>
                        </ImgContent>
                    </HeroRow>
                </HeroWrapper>
            </HeroContainer>
        </>
    )
}

export default HeroSection
