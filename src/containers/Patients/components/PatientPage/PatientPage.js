import React, {useState} from "react";
import './patientPage.scss'
import pathsNames from "../../../../router/pathNames";
import RightSection from '../RightSection'
import UpArrowIcon from "../RightSection/files/upArrowIcon.svg";
import DownArrowIcon from "../RightSection/files/downArrowIcon.svg";

const PatientPage = ({ patient, history }) => {
    console.log('PatientPage')


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
            <RightSection/>

        </div>
    )
}

export default PatientPage