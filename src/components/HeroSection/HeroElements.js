import styled from 'styled-components'
import sand from '../../images/sand.jpg'

export const HeroContainer = styled.div`
    /* background: #101010; */
    background-image: linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.85) ), url(${sand});
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const HeroWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const HeroRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col2 col1';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2'
    }
`

export const ImgContent = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const HeroContent = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;


export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 60px;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.h6`
    margin-top: 20px;
    color: #6C63FF;
    font-size: 40px;
    text-align: left;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`