import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, NavButton, GitBtn } from './SidebarElements' 
import { GoRepoForked } from 'react-icons/go';
import { AiOutlineStar } from 'react-icons/ai';

const Sidebar = ( {isOpen, toggle} ) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="code" onClick={toggle}>
                        Code
                    </SidebarLink>
                    <NavButton>
                        <GitBtn href="https://github.com/idoyudha/react-portofolio">
                            <GoRepoForked />
                            <AiOutlineStar />
                        </GitBtn>
                    </NavButton>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
