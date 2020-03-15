import React, {useEffect} from 'react'
import './detailsCard.scss'

const DetailsCard = props => {
    return (
            <div className={'card'}>
                {props.children}
            </div>
    )
}

export default DetailsCard