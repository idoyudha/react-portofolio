import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { GoRepoForked } from 'react-icons/go';
import { AiOutlineStar } from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll'
import { Nav, NavLogo, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavButton  } from './NavbarElements'


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome} >ido</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                to="about"
                                activeClass="active"
                                spy="true"
                                smooth={true} 
                                duration={500} 
                                offset={-80}>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="projects"
                                activeClass="active"
                                spy="true"
                                smooth={true} 
                                duration={500} 
                                offset={-80}>
                                Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to="contact"
                                activeClass="active"
                                spy="true"
                                smooth={true} 
                                duration={500} 
                                offset={-80}>
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavButton href="https://github.com/idoyudha/react-portofolio">
                        <GoRepoForked />
                        <AiOutlineStar />
                    </NavButton>
                    {/* <NavBtn>
                        <NavBtnLink><FaGithubSquare /></NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
