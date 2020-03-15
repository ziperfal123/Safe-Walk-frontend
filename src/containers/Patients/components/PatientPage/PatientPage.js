import React from "react";

const PatientPage = props => {
    console.log('PatientPage')
    console.log('props: ', props)
    
    return (
        <h1>{props.patient.name}</h1>
    )
}

export default PatientPage