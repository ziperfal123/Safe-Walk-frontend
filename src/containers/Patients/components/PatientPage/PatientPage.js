import React from "react";

const PatientPage = props => {
    console.log('PatientPage')
    console.log('props: ', props)
    
    return (
        <div>
            <h1>{props.patient.name}</h1>
            <button onClick={() => {props.history.push('/patients/')}}>Back</button>
        </div>
    )
}

export default PatientPage