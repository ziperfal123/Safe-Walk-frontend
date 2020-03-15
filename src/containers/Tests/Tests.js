import React, {useEffect} from 'react'
import './tests.scss'
import pathsNames from "../../router/pathNames";
import TestsTable from './components/TestsTable/TestsTable'


const Tests = props => {

    useEffect(() => {
        if (props.location.pathname !== pathsNames.patientsTests) {
            props.history.push(pathsNames.patientsTests)
        }
        props.getAllPatients()
        props.getAllTests()
    }, []);

    return (
        <div className={'switch-wrapper patient-tests-container'}>
                <TestsTable
                    allPatients={props.allPatients}
                    allTests={props.allTests}
                />
        </div>
    )
}

export default Tests
