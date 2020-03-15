import React, {useEffect} from 'react'
import './patients.scss'
import CardsContainer from "../../components/CardsContainer";
import DetailsCard from "../../components/DetailsCard";

const Patients = props => {

    useEffect(() => {
        props.getAllPatients()
    }, [])

    function createPatientCard(patientObj) {
        console.log('patientObj: ', patientObj)
        const elem = (
            <DetailsCard>
                <img className={'patient-image'} src={patientObj.picture} />
                <h1>{patientObj.name}</h1>
                <h2>{patientObj.age} years old</h2>
            </DetailsCard>
        );
        return elem
    }


    return (
            <div className={'switch-wrapper patients-page-container'}>
                <CardsContainer>
                    {props.allPatients.map(createPatientCard)}
                </CardsContainer>
            </div>
    )
};

export default Patients