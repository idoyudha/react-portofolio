import styled from 'styled-components'

export const AboutContainer = styled.div`
    background: #191919;
    color: #fff;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2';
    }
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const ImgWrap = styled.div`
    max-width: 600px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`
export const TextWrapper = styled.div`
    max-width: 600px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const Heading = styled.h1`
    color: #6C63FF;
    font-size: 36px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`

export const Description = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
`

export const Navigation = styled.ul`
    display: flex;
    list-style: none;
    margin-bottom: 15px;
`

export const Navitem = styled.li`
    color: #fff;
    display: flex;
    text-align: left;
    text-decoration: none;
    padding: 0 3rem 0 0;
    height: 100%;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    margin-right: 30px;
    padding-bottom: 5px;
    position: relative;

    &::after {
        content: '';
        width: 20%;
        height: 3px;
        background-color: #6C63FF;
        position: absolute;
        bottom: 0%;
        transition: 0.2s ease-in-out;
    }

    &:hover::after {
        left: 0%;
        width: 70%;
    }

    &.active {
        color: #6C63FF;
    }

    &.active::after {
        left: 0%;
        width: 70%;
    }
`;


export const List = styled.div`
    padding: 10px 0;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
`

export const MeHead = styled.p`
    font-weight: 600;
`

export const MeOrg = styled.p`
    font-weight: 300;
    margin-top: 3px;
    font-style: italic;
`

export const Me = styled.p`
    font-weight: 300;
    margin-top: 3px;
`