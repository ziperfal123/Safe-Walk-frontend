import React, { useState } from 'react'
import { Spin, Tabs } from 'antd'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './testsAndPlansSection.scss'
import AbnormalityChip from 'components/AbnormalityChip'
import DetailsCard from 'components/DetailsCard/'
import { normalizeDate } from 'utils/date'
import DownArrowIcon from './files/downArrowIcon.svg'
import UpArrowIcon from './files/upArrowIcon.svg'


const TestsAndPlansSection = (props) => {
  const { allTestsById, loadingAllTestsById, handleTestClick } = props
  console.log('TestsAndPlansSection')

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
      <div className="tests-and-plans-section">
        <Tabs className="tabs-container">
          <Tabs.TabPane tab="Last tests" key={1}>
            <div className="tests-section">
              {loadingAllTestsById ? (
                <div className="loading-container">
                  <Spin />
                </div>
              ) : (
                <div className="cards-container">
                  {allTestsById.length !== 0
                    ? allTestsById.map(renderTestsList)
                    : <h2>no tests</h2>}
                </div>
              )}
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Rehabilitation plan" key={2}>
            <div className={plansSectionClassName}>
              <h1>Rehabilitation plans</h1>
              <div className="cards-container">
                <h2>coming soon.. stay tuned</h2>
              </div>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>

      {/* <div className="tests-and-plans-section"> */}
      {/*  <div className={testsSectionClassName}> */}
      {/*    <h1>Last Tests</h1> */}
      {/*    {loadingAllTestsById ? ( */}
      {/*      <div className="loading-container"> */}
      {/*        <Spin /> */}
      {/*      </div> */}
      {/*    ) : ( */}
      {/*      <div className="cards-container"> */}
      {/*        {allTestsById.length !== 0 */}
      {/*          ? allTestsById.map(renderTestsList) */}
      {/*          : <h2>no tests</h2>} */}
      {/*      </div> */}
      {/*    )} */}
      {/*  </div> */}
      {/*  <div className={plansSectionClassName}> */}
      {/*    <h1>Rehabilitation plans</h1> */}
      {/*    <div className="cards-container"> */}
      {/*      <h2>coming soon.. stay tuned</h2> */}
      {/*    </div> */}
      {/*  </div> */}
      {/* </div> */}
    </>
  )
}

export default TestsAndPlansSection

TestsAndPlansSection.propTypes = {
  allTestsById: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingAllTestsById: PropTypes.bool.isRequired,
  handleTestClick: PropTypes.func.isRequired,
}
