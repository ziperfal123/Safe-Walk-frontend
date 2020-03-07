import React from 'react'
import {withRouter} from 'react-router-dom'
import './header.scss'

import pathsNames from "../../router/pathNames";
import SearchBar from './components/SearchBar/SearchBar'


const Header = props => {

    const displayRouteName = () => {
        let normalizedTitle;
        switch (props.location.pathname) {
            case pathsNames.patientsTests:
                normalizedTitle = `Patient's Tests`;
                break;
            case pathsNames.patients:
                normalizedTitle = `All Patients`;
                break;
            case pathsNames.rehabPlans:
                normalizedTitle = `Rehabilitation Plans`;
                break;
            case pathsNames.videos:
                normalizedTitle = `Exercise Videos`;
                break
            default:
                normalizedTitle = 'Safe Walk'
        }
        return normalizedTitle
    }


    return (
        <div className={'header-container'}>
            <h1 className={'header-container__route-name'}>{displayRouteName()}</h1>
            <SearchBar />
            <h1 className={'header-container__avatar'}>Avatar</h1>
        </div>
    )
}

export default withRouter(Header)
