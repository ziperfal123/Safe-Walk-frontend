import React from 'react'
import {Table} from "antd";
import columns from "./tableColumns"

const PatientsTable = props => {
    console.log('PatientsTable')

    function handleRowClick(record , index) {
        return {
            onClick: () => console.log('rcord: ', record)
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