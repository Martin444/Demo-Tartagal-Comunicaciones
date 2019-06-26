import React, { Component } from 'react'
import FooterMenu from '../Components/FooterMenu'
import NavBar from '../Components/NavBar'

import {Route, Switch} from 'react-router-dom'

import Payment from '../Components/Payment'
import HomePage from '../Components/HomePage'
import Message from '../Components/Message'


export default class Home extends Component {
    render() {
        return (
            <>
                <NavBar/>
                    <Switch>
                        <Route exact path="/home" component={HomePage}/>
                        <Route exact path="/home/Planes" component={Payment}/>
                        <Route exact path="/home/Mensajes" component={Message}/>
                    </Switch>
                <FooterMenu/>
            </>
        )
    }
}
