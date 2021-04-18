import styled from 'styled-components'
import { Link as LinkS} from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #6C63FF;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        transition: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: --22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 4px solid #6C63FF;
        color: #6C63FF;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const GitLogo = styled.div`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavButton = styled.a`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    border-radius: 5px;
    background-color: rgb(108,99,255, 0.5);
    color: #fff;
    height: 40px;
    padding: 5px;
    transition: 0.3s;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

    &:hover {
        background-color: rgb(108,99,255, 0.9);
        transform: matrix(1.04,0,0,1.04,0,1.04);
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`
