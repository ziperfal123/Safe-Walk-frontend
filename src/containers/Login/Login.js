import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import './login.scss'

// import pathsNames from '../../router/pathsNames'
import Form from './components/Form/Form'
import { changeLoggedIn } from '../../redux/actionsCreator';

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

        // <div>
        //     <h1>Login</h1>
        //     <button onClick={() => { props.changeLoggedIn(true) }}>Login</button>
        // </div>
    )
}

// const Login = props => {
//     return props.isUserAuthenticated  ? (
//             <Redirect to={{
//                 pathname: pathsNames.patients,
//                 state: {referrer: 'login'}
//             }} />
//         ) :
//         (
//             <div className={'login-container'}>
//                 <h1>Safe Walk</h1>
//                 <div className={'login-container-wrapper'}>
//                     <Form handleSuccessLogin={props.handleSuccessLogin}/>
//                 </div>
//             </div>
//         )
// }



export default connect(
    state => ({
        loggedIn: state.loggedIn
    }),
    {
        changeLoggedIn,
    }
)(Login);