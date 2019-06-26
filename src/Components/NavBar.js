import React from 'react'
import styled from 'styled-components'

export default function NavBar() {
    return (
        <NavWrapper>
            Hola desde El NavBar
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    width: 100%;
    color: #fff;
    padding: 1rem 1rem;
    background: linear-gradient(135deg, rgba(6,58,189,1) 0%, rgba(6,67,189,1) 30%, rgba(33,122,255,1) 100%)  center/cover no-repeat;
    z-index: 1;
`