import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import './header.scss'
import Avatar from './components/Avatar'
import pathsNames from 'router/pathNames'
import SearchBar from './components/SearchBar'

const Header = ({ location, userName, userImage }) => {
  const shouldDisplaySearchBar = location.pathname === pathsNames.patientsTests
      || pathsNames.patients
      || pathsNames.defaultPlans
      || pathsNames.videos
  const displayRouteName = () => {
    let normalizedTitle
    switch (location.pathname) {
      case pathsNames.patientsTests:
        normalizedTitle = 'Patient\'s Tests'
        break
      case pathsNames.patients:
        normalizedTitle = 'All Patients'
        break
      case pathsNames.defaultPlans:
        normalizedTitle = 'Default Plans'
        break
      case pathsNames.videos:
        normalizedTitle = 'Exercise Videos'
        break
      default:
        normalizedTitle = 'Safe Walk'
    }
    return normalizedTitle
  }

  return (
    <div className="header-container">
      <h1 className="header-container__route-title">{displayRouteName()}</h1>
      {shouldDisplaySearchBar && <SearchBar /> }
      <Avatar userName={userName} userImage={userImage} />
    </div>
  )
}

export default withRouter(Header)

Header.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
}
