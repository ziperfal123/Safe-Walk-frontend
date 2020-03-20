import React, {useEffect, useState} from "react";
import './patientPage.scss'
import pathsNames from "router/pathNames";
import RightSection from '../RightSection'

const PatientPage = props => {
    const { patient, getTestsById, history , allTestsById, cleanTestsById} = props
    console.log('PatientPage')

    useEffect(() => {
        getTestsById(patient.id)
        return cleanTestsById
    }, [])

    return (
        <div className={'patient-page-container'}>
            <div className={'left-section'}>
                <img src={patient.picture}/>
                <h2>{patient.mail}</h2>
                <h2>{patient.name}</h2>
                <h2>{patient.age} Years old</h2>
                <button onClick={() => {history.push(pathsNames.patients)}}>Back</button>
            </div>
            <hr />
            <RightSection allTestsById={allTestsById}/>
        </div>
    )
}

export default PatientPage