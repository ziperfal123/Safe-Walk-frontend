import React from "react";
import './patientPage.scss'

const PatientPage = props => {
    console.log('PatientPage')
    console.log('props: ', props)

    const { patient } = props
    return (
        <div className={'patient-page-container'}>
            <div className={'left-section'}>
                <img src={patient.picture}/>
                <h2>{patient.mail}</h2>
                <h2>{patient.name}</h2>
                <h2>{patient.age} Years old</h2>
                <button onClick={() => {props.history.push('/patients/')}}>Back</button>
            </div>
            <div className={'right-section'}>
                <h1>Last Tests</h1>
            </div>
            <hr />
        </div>
    )
}

export default PatientPage