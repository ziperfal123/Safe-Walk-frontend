import React, {useState} from 'react'

import DetailsCard from "../../../../components/DetailsCard/";
import UpArrowIcon from './files/upArrowIcon.svg'
import DownArrowIcon from './files/downArrowIcon.svg'

const RightSection = props => {
    console.log('RightSection')

    const [shouldDisplayTests , setShouldDisplayTests] = useState(true)

    function handleArrowClick(arrowDirection) {
        arrowDirection === 'up' ?
            setShouldDisplayTests(true) :
            setShouldDisplayTests(false)
    }

    function renderCardsList() {
        const content = (
            <div>
                <h1>hello</h1>
                <h4>hey hey </h4>
            </div>
        )
        return (
            <>
                <DetailsCard content={content}/>
            </>
        )
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
                        {renderCardsList()}
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