import React, { useState, useEffect } from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import './login.scss'

// import pathsNames from '../../router/pathsNames'
import Form from './components/Form/Form'
import { changeLoggedIn } from '../../redux/actions/actionsCreator';

const Login = (props) => {
    console.log('Login')
    if (props.loggedIn) {
        const { from } = props.location.state || { from: { pathname: '/' } }
        return <Redirect to={from} />
    }
    return (
        <div className={'login-container'}>
            <h1>Safe Walk</h1>
            <div className={'login-container-wrapper'}>
                <Form changeLoggedIn={props.changeLoggedIn}/>
            </div>
        </div>
    )
}



const mapStateToProps = state => {
    console.log('state: ', state)
    return {
        loggedIn: state.authReducer.loggedIn,
        loading: state.authReducer.loading
    }
}
const mapDispatchToProps = { changeLoggedIn }

export default connect(mapStateToProps, mapDispatchToProps)(Login)