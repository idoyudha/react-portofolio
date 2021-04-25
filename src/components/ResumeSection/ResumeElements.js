import styled from 'styled-components'

export const ResumeContainer = styled.div`
    color: #fff;
    background: #191919;
    display: flex;
    flex-direction: column;
`
export const CaptionHeading = styled.h1`
    margin: 30px auto 0 auto;
`

export const ResumeWrapper = styled.div`
    max-width: 1300px;
    margin: 40px auto;
    padding: 0 24px;
`

export const Heading = styled.h2`
    color: #6C63FF;
    border-bottom: 1px solid #6C63FF;
    margin-top: 30px;
`

export const Big = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
`

export const Organization = styled.p`
    font-size: 20px;
    margin: 5px 0 10px 0;
`

export const Detail = styled.p`
    font-size: 20px;
`

export const ContentWrapper = styled.div`
    margin-bottom: 20px;
`

export const Content = styled.li`
    font-size: 17px;
    margin: 3px 0;
`

export const Caption = styled.p`
    margin: 10px auto;
    font-size: 20px;
    color: #fff;
    margin-bottom: 50px;

    &:hover {
        text-decoration: underline;
    }
`

export const Button = styled.a`
    text-decoration: none;
    margin: 0 auto;
    cursor: pointer;
    font-size: 30px;
    border-radius: 50%;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Column = styled.div`
    column-count: 2;
    column-gap: 40px;
    column-rule: 1px solid #6C63FF;
    margin-top: 10px;

    @media screen and (max-width: 768px) {
        column-count: 1;
    }
`

export const Credential = styled.a`
    font-size: 17px;
    margin: 3px 0;
    text-decoration: none;
    color: white;

    &:hover {
        text-decoration: underline;
    }
`

export const Univ = styled.span`
    font-style: italic;
`