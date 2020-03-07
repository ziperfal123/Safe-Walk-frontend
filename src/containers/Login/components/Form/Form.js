import React, {useEffect, useState, useRef} from 'react'
import './form.scss'
// import {handleSuccessLogin} from "../../../../redux/actions/authActions";

const Form = props => {
    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const firstInputRef = useRef()

    useEffect(() => {
        firstInputRef.current.focus()
    }, [])

    function handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        name === 'userName' ? setUserName(value) : setPassword(value)
    }

    function handleSubmit(e) {
        const isUserAuth = true     // TODO:: dynamically check infront of BE
        if(isUserAuth) {
            // TODO:: add method for saving user auth status in local storage
            props.handleSuccessLogin()

        }
        e.preventDefault();
    }

    return (
        <form className={'form-container'} onSubmit={handleSubmit}>
            {/*<i className="fas fa-user"></i>*/}
            <input
                type={'text'}
                placeholder={'user name'}
                onChange={handleInputChange}
                name={'userName'}
                ref={firstInputRef}
            />
            <input
                type={'password'}
                placeholder={'password'}
                onChange={handleInputChange}
                name={'password'}
                autoComplete="off"
            />
            <button
                className={'form-container__inputs-container--submit'}
                type={'submit'}
            >
                Log In
            </button>
        </form>
    )
}

export default Form


//     <button onClick={() => { props.changeLoggedIn(true) }}>Login</button>
