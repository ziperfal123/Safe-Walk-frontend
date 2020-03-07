import React, { useState, useEffect } from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import './login.scss'

// import pathsNames from '../../router/pathsNames'
import Form from './components/Form/Form'
import { changeUserAuthStatus } from '../../redux/actions/actionsCreator';

const Login = (props) => {
    console.log('Login')
    if (props.isUserAuthenticated) {
        const { from } = props.location.state || { from: { pathname: '/' } }
        return <Redirect to={from} />
    }
    return (
        <div className={'login-container'}>
            <h1>Safe Walk</h1>
            <div className={'login-container-wrapper'}>
                <Form changeUserAuthStatus={props.changeUserAuthStatus}/>
            </div>
        </div>
    )
}



const mapStateToProps = state => {
    console.log('state: ', state)
    return {
        isUserAuthenticated: state.authReducer.isUserAuthenticated,
        loading: state.authReducer.loading
    }
}
const mapDispatchToProps = { changeUserAuthStatus }

export default connect(mapStateToProps, mapDispatchToProps)(Login)