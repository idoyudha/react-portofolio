import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link as LinkS} from 'react-scroll'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 40px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #6C63FF;
        transition: 0.2s ease-in-out;
    }
`

export const NavButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const GitBtn = styled.a`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    border-radius: 5px;
    background-color: rgb(108,99,255, 0.5);
    color: #fff;
    height: 40px;
    padding: 15px;
    transition: 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        background-color: rgb(108,99,255, 0.9);
    }
`