import React, {useState} from 'react'

import DetailsCard from "../../../../components/DetailsCard/";
import UpArrowIcon from './files/upArrowIcon.svg'
import DownArrowIcon from './files/downArrowIcon.svg'
import {normalizeDate} from '../../../../utils/date'

const RightSection = props => {
    console.log('RightSection')

    const [shouldDisplayTests , setShouldDisplayTests] = useState(true);

    function handleArrowClick(arrowDirection) {
        arrowDirection === 'up' ?
            setShouldDisplayTests(true) :
            setShouldDisplayTests(false)
    }

    function renderTestsList(test) {
        const normalizedDate = normalizeDate(test.date, false);
        const content = (
            <div>
                <h1>#1</h1>
                <h4>Date: {normalizedDate}</h4>
            </div>
        );
        return <DetailsCard key={Math.random()} content={content}/>

    }
    return (
        <>
            <img
                className={'up-arrow'}
                src={UpArrowIcon}
                onClick={() => handleArrowClick('up')}
            />
            <div className={'right-section'}>
               { shouldDisplayTests ? (
                <div className={`tests`}>
                    <h1>Last Tests</h1>
                    <div className={'cards-container'}>
                        {props.allTestsById.map(renderTestsList)}
                    </div>
                </div>
                ) :
                (
                    <div className={`plans`}>
                        <h1>Rehabilitation plans</h1>
                    </div>
                )}
            </div>
            <img
                className={`down-arrow`}
                src={DownArrowIcon}
                onClick={() => handleArrowClick('down')}
            />
        </>
    )
}

export default RightSection