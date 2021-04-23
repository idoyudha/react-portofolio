import styled from 'styled-components'

export const CodeContainer = styled.div`
    height: 800px;
    display: flex;
    color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #191919;
    
    @media screen and (max-width: 1080px) {
        height: 1100px;
    }

    @media screen and (max-width: 540px) {
        height: 1600px;
    }
`

export const CodeWrapper = styled.div`
    max-width: 1200px;
    margin: 40px auto;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(6, auto);
    grid-gap: 50px;
    padding: 0 50px;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1080px) {
        grid-template-columns: repeat(5, auto);
    }

    @media screen and (max-width: 720px) {
        grid-template-columns: repeat(4, auto);
    }

    @media screen and (max-width: 640px) {
        grid-template-columns: repeat(3, auto);
        padding: 0 20px;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(2, auto) ;
    }
`


export const Logo = styled.div`
    color: #fff;
    background: black;
    z-index: 1;
    position: relative;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 50px;
    padding: 30px;
    border: 2px solid #6C63FF;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
        background: ${({color}) => color};
        color : ${({color}) => ( color === '#f0db4f' ? 'black' : 
                                color === '#61DBFB' ? 'black' : '#fff')};
    }

`

export const Caption = styled.div`
    color: #fff;
    font-size: 1rem;
    position: absolute;
    top: -25px;
    opacity: 0;
    transition: opacity 0.3s linear;

    ${Logo}:hover & {
        opacity: 1;
    }
`

export const Heading = styled.h1`
    color: #fff;
    font-size: 40px;
    margin-bottom: 10px;
`