import React from 'react'
import styled from 'styled-components'
import Home from '../img/Home.png'
import Pay from '../img/Payment.png'
import Message from '../img/Message.png'

import {Link} from 'react-router-dom'

export default function FooterMenu() {
    return (
        <FooterMenuWrapper>
            <div className="img-container">
            <Link to="/home">
                <img className="home" src={Home} alt="Home"/>
            </Link>
            <Link to="/home/Planes">
                <img className="pay" src={Pay} alt="Payment"/>
            </Link>
            <Link to="/home/Mensajes">
                <img className="mss" src={Message} alt="Message"/>
            </Link>
            </div>
        </FooterMenuWrapper>
    )
}

const FooterMenuWrapper = styled.footer`
    position: sticky;
    width:100%;
    display:flex;
    color: #fff;
    bottom: 0;
    z-index: 1;
    padding: 1rem 1rem;
    background: #22476C;

    .img-container{
        width:90%;
        display:block;
    }

    .home{
        height:50px;
        transition: all 0.3s ease-in-out;
        float: left;
    }

    .home:hover{
        height:60px;
        position: absolute;
        left: 5px;
    }

    .pay{
        height: 50px;
        transition: all 0.3s ease-in-out;
        margin: auto;
    }

    .pay:hover{
        height: 70px;
        margin: auto;
        left: 50%;
    }

    .mss{
        height: 50px;
        transition: all 0.3s ease-in-out;
        float: right;
    }

    .mss:hover{
        height: 60px;
        position:absolute;
        right:52px;
    }

`