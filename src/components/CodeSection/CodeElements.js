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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 50px;
    padding: 0 50px;

    @media screen and (max-width: 1080px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 720px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 640px) {
        grid-template-columns: 1fr 1fr 1fr;
        padding: 0 20px;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr 1fr ;
    }
`

export const Logo = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 50px;
    padding: 30px;
    border: 2px solid #6C63FF;
    border-radius: 10px;
    transition: 0.5s;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

    &:hover {
        transform: matrix(1.04,0,0,1.04,0,1.04);
        transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    }
`

export const Heading = styled.h1`
    color: #fff;
    font-size: 40px;
    margin-bottom: 10px;
`