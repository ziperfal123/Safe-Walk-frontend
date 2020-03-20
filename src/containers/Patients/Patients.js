import React, {useEffect, useState} from 'react'
import {Route, Switch} from "react-router-dom";
import './patients.scss'
import PatientsTable from "./components/PatientsTable";
import pathsNames from "router/pathNames";
import PatientPage from "./components/PatientPage";

const Patients = props => {
    console.log('Patients')
    console.log('props: ', props)

    const [selectedPatient , setSelectedPatient] = useState('')

    useEffect(() => {
        props.getAllPatients()
    }, []);

    function handleTableRowClick(patientObj) {
        setSelectedPatient(patientObj)
        props.history.push(`${pathsNames.patients}${patientObj.id}`)
    }
    
    return (
        <div className={'switch-wrapper patients-page-container'}>
            <Switch>
                <Route
                    path={pathsNames.patients}
                    exact={true}
                    render={() => <PatientsTable
                        allPatients={props.allPatients}
                        handleTableRowClick={handleTableRowClick}
                    />}
                />
                <Route
                    path={`${pathsNames.patients}:${selectedPatient.id}`}
                    render={() => <PatientPage
                        patient={selectedPatient}
                        history={props.history}/>}
                        getTestsById={props.getTestsById}
                />
            </Switch>
        </div>
    )
};

export default Patients