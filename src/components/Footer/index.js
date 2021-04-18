import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { AiFillMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Footer, FooterContainer, Logo, FooterMenu, Copyright, MediaItem  } from './FooterElements';


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
                            <AiFillMail/>
                        </MediaItem>
                        <MediaItem>
                            <AiFillGithub/>
                        </MediaItem>
                        <MediaItem>
                            <AiFillLinkedin/>
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
