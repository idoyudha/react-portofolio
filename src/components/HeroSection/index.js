import React from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements'
import Video from '../../videos/video.mp4'
import Type from './Type'

const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>
                        Hi, I'm Ido
                    </HeroH1>
                    <HeroP>
                        <Type/>
                    </HeroP>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
