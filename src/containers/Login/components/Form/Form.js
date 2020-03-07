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

    return (
        <form className={'form-container'}>
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
                onClick={() => { props.changeLoggedIn(true) }}>
                {'Login'}
            </button>

        </form>
    )
}

export default Form


//     <button onClick={() => { props.changeLoggedIn(true) }}>Login</button>