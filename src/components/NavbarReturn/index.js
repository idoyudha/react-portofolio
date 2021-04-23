import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi';
import { NavContainer, NavWrapper } from './ReturnElements';


const NavReturn = () => {
    return (
        <>
            <NavContainer>
                <NavWrapper>
                    <Link to="/" style={{color: 'white'}}><BiArrowBack /></Link>
                </NavWrapper>
            </NavContainer>  
        </>
    )
}

export default NavReturn
