import styled from 'styled-components'

export const NavContainer = styled.div`
    background: black;
    padding: 24px;
    height: 80px;
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
`

export const NavWrapper = styled.div`
    font-size: 40px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1300px;

    &:hover {
        color: black;
    }
`