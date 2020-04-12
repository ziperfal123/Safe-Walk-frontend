import React from 'react'
import { Spin } from 'antd'
import PropTypes from 'prop-types'
import './testsSection.scss'
import AbnormalityChip from 'components/AbnormalityChip'
import DetailsCard from 'components/DetailsCard/'
import { normalizeDate } from 'utils/date'

const TestsSection = (props) => {
  const { allTestsById, loadingAllTestsById, handleTestClick } = props
  console.log('testsSection')

  let testsCounter = 1

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

  return (
    <>
      <div className="tests-section">
        <h1 className="tests-title">Last Tests</h1>
        <div className="cards-container">
          {allTestsById.length !== 0
            ? allTestsById.map(renderTestsList)
            : <h2>no tests</h2>}
        </div>
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
