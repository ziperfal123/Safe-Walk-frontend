import React from 'react'
import {Table} from "antd";
import columns from "./tableColumns"

const PatientsTable = props => {
    console.log('PatientsTable')

    return (
        <div className={'table-wrapper'}>
            <Table
                className={'table'}
                columns={columns}
                dataSource={ props.allPatients}
                pagination={false}
            />
        </div>
    )
}

export default PatientsTable