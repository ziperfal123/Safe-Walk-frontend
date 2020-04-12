import React, { useState } from 'react'
import { Spin, Tabs } from 'antd'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './testsSection.scss'
import AbnormalityChip from 'components/AbnormalityChip'
import DetailsCard from 'components/DetailsCard/'
import { normalizeDate } from 'utils/date'


const TestsSection = (props) => {
  const { allTestsById, loadingAllTestsById, handleTestClick } = props
  console.log('testsSection')

  const [shouldDisplayTests, setShouldDisplayTests] = useState(true)

  let testsCounter = 1

  function handleTabsClick(arrowDirection) {
    // eslint-disable-next-line no-unused-expressions
    arrowDirection === 'up'
      ? setShouldDisplayTests(true)
      : setShouldDisplayTests(false)
  }

  function renderTestsList(test) {
    const normalizedDate = normalizeDate(test.date, false)
    const results = test.abnormality ? 'ABNORMALITY' : 'NORMAL'
    const content = (
      <>
        {/* eslint-disable-next-line no-plusplus */}
        <h1>{`#${testsCounter++}`}</h1>
        <h4>
          Date:
          {normalizedDate}
        </h4>
        <AbnormalityChip results={results} />
      </>
    )
    return (
      <DetailsCard
        key={Math.random()}
        id={test.id}
        handleCardClick={handleTestClick}
      >
        {content}
      </DetailsCard>
    )
  }

  const plansSectionClassName = classNames({
    'plans-section': true,
    'plans-section--hidden': shouldDisplayTests,
  })

  return (
    <>
      <div className="tests-section">
        {loadingAllTestsById ? (
          <div className="loading-container">
            <Spin />
          </div>
        ) : (
          <>
            <h1 className={'tests-title'}>Last Tests</h1>
            <div className="cards-container">
              {allTestsById.length !== 0
                ? allTestsById.map(renderTestsList)
                : <h2>no tests</h2>}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default TestsSection

TestsSection.propTypes = {
  allTestsById: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingAllTestsById: PropTypes.bool.isRequired,
  handleTestClick: PropTypes.func.isRequired,
}
