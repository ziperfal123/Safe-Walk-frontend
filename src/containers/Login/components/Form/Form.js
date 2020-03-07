import React, {useEffect, useState, useRef} from 'react'
import './form.scss'
// import {handleSuccessLogin} from "../../../../redux/actions/authActions";

const Form = props => {
    const [mail , setMail] = useState('');
    const [password , setPassword] = useState('');
    const firstInputRef = useRef()

    useEffect(() => {
        firstInputRef.current.focus()
    }, [])

    function handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        name === 'mail' ? setMail(value) : setPassword(value)
    }

    function handleLoginClick(e) {
        e.preventDefault()
        props.handleLoginFormSubmit()
        // props.changeUserAuthStatus(true)
    }

    return (
        <form className={'form-container'}>
            {/*<i className="fas fa-user"></i>*/}
            <input
                type={'text'}
                placeholder={'user name'}
                onChange={handleInputChange}
                name={'mail'}
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
                onClick={ handleLoginClick }
            >
                {'Login'}
            </button>

        </form>
    )
}

export default Form


//     <button onClick={() => { props.changeUserAuthStatus(true) }}>Login</button>
