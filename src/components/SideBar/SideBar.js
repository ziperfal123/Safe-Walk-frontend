import React from 'react'
import PropTypes from 'prop-types'
import './sideBar.scss'
import { NavLink } from 'react-router-dom'
import Logo from './files/logo.svg'
import pathNames from '../../router/pathNames'

const SideBar = ({ handleLogout }) => {
  function handleLogoutClick() {
    handleLogout()
  }

  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={Logo} alt="logo" />
      <ul>
        <li>
          <NavLink
            to={pathNames.patientsTests}
            className="sidebar__nav-link"
            activeClassName="selected"
          >
            Patient’s tests
          </NavLink>
        </li>
        <li>
          <NavLink
            to={pathNames.patients}
            className="sidebar__nav-link"
            activeClassName="selected"
          >
            Patients
          </NavLink>
        </li>
        <li>
          <NavLink
            to={pathNames.rehabPlans}
            className="sidebar__nav-link"
            activeClassName="selected"
          >
            Rehabilitation plans
          </NavLink>
        </li>
        <li>
          <NavLink
            to={pathNames.videos}
            className="sidebar__nav-link"
            activeClassName="selected"
          >
            Exercise videos
          </NavLink>
        </li>
      </ul>
      <button type="button" className="sidebar__logout-btn" onClick={handleLogoutClick}>Log Out</button>
    </div>
  )
}

export default SideBar

SideBar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
}
