import React from 'react'
import styled from 'styled-components'

export default function HomePage() {
    return (
        <HomeWrapper>
            <p>Hola</p>
            <p>Aun no tenemos datos aqui, pero puedes ver algo haciendo tap en el medio del menú de abajo</p>
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
width: 100%;
height: 100vh;
align-content: center;
margin: auto;
justify-content: center;
text-align: center;

    p{
        text-align: center;
        justify-content: center;
    }
`