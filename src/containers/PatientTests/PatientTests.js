import React, {useEffect} from 'react'
import './patientTests.scss'
import pathsNames from "../../router/pathNames";
import PatientsTable from './components/PatientsTable'





const PatientTests = props => {

    useEffect(() => {
        props.location.pathname !== pathsNames.patientsTests &&
        props.history.push(pathsNames.patientsTests)
        // props.getAllPatients()
        // props.getAllTests()
    }, []);

    return (
        <div className={'switch-wrapper'}>
            <div className={'patient-tests-container'}>
                <PatientsTable />
            </div>
        </div>
    )
}

export default PatientTests
