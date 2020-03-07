import React from 'react';
import ReactLoading from 'react-loading';
import './loading.scss'

const Loading = () => {
    console.log('Loading')
    return (
        <div className={'loading-container'}>
            <ReactLoading type={'bars'} color={'white'} height={110} width={110} />
        </div>
    )
}


export default Loading
