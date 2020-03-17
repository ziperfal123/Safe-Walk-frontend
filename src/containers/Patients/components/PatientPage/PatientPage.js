import React, {useState} from "react";
import './patientPage.scss'
import UpArrowIcon from './files/upArrowIcon.svg'
import DownArrowIcon from './files/downArrowIcon.svg'


const PatientPage = props => {
    console.log('PatientPage')
    console.log('props: ', props)
    
    const [shouldDisplayTests , setShouldDisplayTests] = useState(true)

    function generateInnerSectionsClasses(arrowDirection) {
        let classesList;
        if(arrowDirection === 'tests') {
            classesList = [
                shouldDisplayTests ? '' : 'hidden',
            ]
        } else {
            classesList=[
                shouldDisplayTests ? 'hidden' : '',
            ]
        }
        return classesList
    }

    function handleArrowClick(arrowDirection){
        arrowDirection === 'up' ?
            setShouldDisplayTests(true) :
            setShouldDisplayTests(false)
    }


    const { patient } = props
    return (
        <div className={'patient-page-container'}>
            <div className={'left-section'}>
                <img src={patient.picture}/>
                <h2>{patient.mail}</h2>
                <h2>{patient.name}</h2>
                <h2>{patient.age} Years old</h2>
                <button onClick={() => {props.history.push('/patients/')}}>Back</button>
            </div>
            <hr />
            <div className={'right-section'}>
                <img
                    className={'up-arrow'}
                    src={UpArrowIcon}
                    onClick={() => handleArrowClick('up')}
                    />
                <div className={`tests ${generateInnerSectionsClasses('tests')}`}>
                    <h1>Last Tests</h1>
                </div>
                <div className={`plans ${generateInnerSectionsClasses('plans')}`}>
                    <h1>Rehabilitation plans</h1>
                </div>
                <img
                    className={`down-arrow`}
                    src={DownArrowIcon}
                    onClick={() => handleArrowClick('down')}
                    />
            </div>
        </div>
    )
}

export default PatientPage