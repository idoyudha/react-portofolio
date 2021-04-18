import styled from 'styled-components'
import komodo from '../../images/komodo.jpg'

export const ProjectsContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    
    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ProjectsWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 25px;
    padding: 0 50px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ProjectsCard = styled.div`
    /* background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3) ), url(${komodo}); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    display: flex;
    height: 420px;
    width: 270px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

    &:hover {
        transform: matrix(1.07,0,0,1.07,0,1.07);
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
        cursor: pointer;
    }
`;

export const ProjectsIcon = styled.img`
    width: 100%;
`;

export const ProjectsH1 = styled.h1`
    font-size: 3.5rem;
    color: #fff;
    margin-bottom: 64px;
`;

export const ProjectsH2 = styled.h2`
    font-size: 1.3rem;
    color: #fff;
    margin-bottom: 10px;
`;

export const ProjectButton = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-size: 0.8rem;
    border-radius: 5px;
    color: #fff;
    padding: 5px 25px;
    border: 1px solid #fff;
    transition: 0.3s;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

    &:hover {
        transform: matrix(1.04,0,0,1.04,0,1.04);
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
        background-color: ${({logo}) => (   logo === 'github' ? '#161B22' : 
                                            logo === 'heroku' ? '#9E7CC1' : 
                                            logo === 'youtube' ? '#FF0000' : 'black')};
        border: ${({logo}) => ( logo === 'github' ? '#161B22' : 
                                logo === 'heroku' ? '#9E7CC1' : 
                                logo === 'youtube' ? '#FF0000' : 'black')};
    }
`
export const ProjectsP = styled.p`
    margin-left: 5px;
    font-size: 0.8rem;
    color: #fff;
`;
