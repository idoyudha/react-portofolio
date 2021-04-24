import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi';
import { NavContainer, NavWrapper } from './ReturnElements';


const NavReturn = () => {
    const Arrow = {
        color: 'white'
    }
    return (
        <>
            <NavContainer>
                <NavWrapper>
                    <Link to="/" style={Arrow}><BiArrowBack /></Link>
                </NavWrapper>
            </NavContainer>  
        </>
    )
}

export default NavReturn
