import React, {useEffect} from 'react'
import './cardsContainer.scss'

import DetailsCard from "../DetailsCard";
const CardsContainer = props => {
    console.log('props: ', props)
    function createCard(elementToRender) {
    }

    return (
        <div className={'cards-container'}>
            {props.children}
        </div>
    )
}

export default CardsContainer