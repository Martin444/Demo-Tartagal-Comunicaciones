import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <LoginWrapper>
                <div className="container animated bounceInUp delay-o.5s">
                    <h3>Comencemos</h3>
                    <input className="input-items" placeholder="Nombre"/>
                    <input className="input-items" placeholder="Apellido"/>
                    <input className="input-items" placeholder="Email"/>
                    <input className="input-items" placeholder="DNI"/>
                <Link to="/home" >
                    <button className="btn-primary" >Iniciar</button>
                </Link>
                    
                </div>

            </LoginWrapper>
        )
    }


}
const LoginWrapper = styled.div`
text-align: center;
display: block;
align-items: center;
display: flex;
justify-content: center;
min-height: 100vh;
background:  linear-gradient(135deg, rgba(6,58,189,1) 0%, rgba(6,67,189,1) 30%, rgba(33,122,255,1) 100%)  center/cover no-repeat;

.container{
    height: 300px;
    width: 300px;
    margin: auto;

    border-radius: 33px 33px 33px 33px;
        -moz-border-radius: 33px 33px 33px 33px;
        -webkit-border-radius: 33px 33px 33px 33px;
        border: 0px solid #000000;
    text-align: center;
    float:center;
    background: #f0edf0;
    box-shadow: -1px -1px 22px 5px rgba(0,0,0,0.47);
}

.input-items{
    width: 80%;
    height: 30px;
    margin-bottom:10px;
    border: none;
    border-radius: 20px 20px 20px 20px;
}

.btn-primary{
    background:  linear-gradient(135deg, rgba(6,58,189,1) 0%, rgba(6,67,189,1) 30%, rgba(33,122,255,1) 100%)  center/cover no-repeat;
    display:block;
    margin: auto;
    width: 80%;
    color: #fff;
    text-transform: uppercase;
    height: 30px;
    border: none;
    border-radius: 20px 20px 20px 20px;
}

.btn-primary:hover{
    box-shadow: -1px -1px 12px 5px rgba(0,0,0,0.27);
    cursor: pointer;
}
`

