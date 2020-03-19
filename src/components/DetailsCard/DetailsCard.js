import React from 'react'
import './detailsCard.scss'

const DetailsCard = props => {
    console.log('DetailsCard')
    console.log('props: ', props)
    return (
        <div className={'card-container'}>
            {props.content}
        </div>
    )
}

export default DetailsCard