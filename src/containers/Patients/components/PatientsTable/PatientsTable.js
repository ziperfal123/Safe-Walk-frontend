import React, {useState} from 'react'
import {Table} from "antd";
import { Route, Switch } from 'react-router-dom'
import PatientPage from '../PatientPage'
import columns from "./tableColumns"
import pathsNames from "../../../../router/pathNames";

const PatientsTable = props => {
    const [selectedPatient , setSelectedPatient] = useState('')
    function handleRowClick(record , index) {
        return {
            onClick: () => {
                console.log('record: ', record)
                setSelectedPatient(record)
                props.history.push(`${pathsNames.patients}${record.id}`)
            }
        }
    }

    return (
        <Switch>
            <Route path={pathsNames.patients} exact={true} render={() => {
                return (
                    <div className={'table-wrapper'}>
                        <Table
                            className={'table'}
                            columns={columns}
                            dataSource={ props.allPatients}
                            pagination={false}
                            onRow={ handleRowClick }
                        />
                    </div>
                )
            }}
            />
            <Route
                path={`${pathsNames.patients}:${selectedPatient.id}`}
                component={() => <PatientPage patient={selectedPatient} history={props.history}/>}
            />
        </Switch>
    )
}

export default PatientsTable