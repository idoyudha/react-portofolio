import styled from 'styled-components'

export const Footer = styled.footer`
    background: #000;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;

    @media screen and (max-width: 720px) {
        height: 160px;
    }
`;

export const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: 30% auto 30%;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1300px;

    @media screen and (max-width: 720px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, auto);
        align-items: center;
        height: 160px;
    }
`;


export const Logo = styled.div`
    color: #6C63FF;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 720px) {
        margin-left: 0;
        justify-self: center;
    }
`;

export const FooterMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    justify-content: center;
`;

export const MediaItem = styled.li`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid rgb(108,99,255, 0.5);
    height: 40px;
    padding: 5px 10px;
    margin: 0 10px;
    transition: 0.3s;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

    &:hover {
        background-color: rgb(108,99,255, 0.9);
        transform: matrix(1.04,0,0,1.04,0,1.04);
        transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    }
`;

export const MediaButton = styled.a`
    display: flex;
    align-items: center;
    color: #fff;
`

export const Copyright = styled.p`
    text-align: right;
    color: #fff;

    @media screen and (max-width: 720px) {
        text-align: center;
    }
`
