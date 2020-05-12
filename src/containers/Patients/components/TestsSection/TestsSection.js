import React from 'react'
import { Empty } from 'antd'
import PropTypes from 'prop-types'
import './testsSection.scss'
import AbnormalityChip from 'components/AbnormalityChip'
import DetailsCard from 'components/DetailsCard/'
import { normalizeDate } from 'utils/date'

const TestsSection = (props) => {
  const { allTestsById, handleTestClick, patientName } = props
  console.log('testsSection')

  function renderTestsList(test) {
    const normalizedDate = normalizeDate(test.date, false)
    const results = test.abnormality ? 'ABNORMALITY' : 'NORMAL'
    const content = (
      <>
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
        <h1 className="tests-title">
          {patientName}'s Tests:
          {allTestsById.length > 0 && <span>{` (total of ${allTestsById.length})`}</span>}
        </h1>
        { allTestsById.length !== 0 ? (
          <div className="cards-container">
            {allTestsById.map(renderTestsList)}
          </div>
        ) : (
          <div className="empty-container">
            <Empty className="empty-data" description={<h3>No tests at the moment</h3>} />
          </div>
        )}
      </div>
    </>
  )
}

export default TestsSection

TestsSection.propTypes = {
  allTestsById: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleTestClick: PropTypes.func.isRequired,
}
