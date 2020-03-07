import React from 'react'
import './sideBar.scss'
import { Link, NavLink } from "react-router-dom";
import Logo from "./files/logo.svg";
import pathNames from '../../router/pathNames'


const SideBar = () => {

    return (
        <div className={'sidebar-container'}>
            <img className={'sidebar--logo'} src={Logo}/>
            <ul className={'sidebar--ul'}>
                <li>
                    <NavLink
                        to={pathNames.patientsTests}
                        className={'sidebar--nav-link'}
                        activeClassName={'selected'}
                    >
                        Patient’s tests
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={pathNames.patients}
                        className={'sidebar--nav-link'}
                        activeClassName={'selected'}
                    >
                        Patients
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={pathNames.rehabPlans}
                        className={'sidebar--nav-link'}
                        activeClassName={'selected'}
                    >
                        Rehabilitation plans
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={pathNames.videos}
                        className={'sidebar--nav-link'}
                        activeClassName={'selected'}
                    >
                        Exercise videos
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideBar
