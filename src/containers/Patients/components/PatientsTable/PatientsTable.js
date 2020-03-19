import React, {useState} from 'react'
import {Table} from "antd";
import { Route, Switch } from 'react-router-dom'
import PatientPage from '../PatientPage'
import columns from "./tableColumns"
import pathsNames from "../../../../router/pathNames";

const PatientsTable = props => {

    function handleRowClick(patientObj , index) {
        return {
            onClick: () => props.handleTableRowClick(patientObj)
        }
    }

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
}

export default PatientsTable