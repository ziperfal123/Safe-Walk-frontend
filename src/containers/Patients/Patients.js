import React, {useEffect} from 'react'
import './patients.scss'
import PatientsTable from "./components/PatientsTable";

const Patients = props => {
    console.log('Patients')
    console.log('props: ', props)
    useEffect(() => {
        props.getAllPatients()
    }, []);

    return (
            <div className={'switch-wrapper patients-page-container'}>
                <PatientsTable
                    allPatients={props.allPatients}
                    history={props.history}
                />
            </div>
    )
};

export default Patients