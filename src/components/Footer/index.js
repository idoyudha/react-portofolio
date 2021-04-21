import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { AiFillMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Footer, FooterContainer, Logo, FooterMenu, Copyright, MediaItem, MediaButton } from './FooterElements';


const FooterSection = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Footer>
                <FooterContainer>
                    <FooterMenu>
                        <Logo to="/" onClick={toggleHome} >ido</Logo>
                        <MediaItem>
                            <MediaButton href="mailto:idowidya.yudhatama@gamil.com" target="_blank">
                                <AiFillMail />
                            </MediaButton>
                        </MediaItem>
                        <MediaItem>
                            <MediaButton href="https://github.com/idoyudha" target="_blank">
                                <AiFillGithub />
                            </MediaButton>
                        </MediaItem>
                        <MediaItem>
                            <MediaButton href="https://www.linkedin.com/in/idoyudha/" target="_blank">
                                <AiFillLinkedin />
                            </MediaButton>
                        </MediaItem>
                    </FooterMenu>
                    <Copyright>
                        Designed and Developed by Ido
                    </Copyright>
                </FooterContainer>
            </Footer>
        </>
    )
}

export default FooterSection
