import React, { useState } from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import DetailsCard from 'components/DetailsCard/';
import AbnormalityChip from 'components/AbnormalityChip';
import { normalizeDate } from 'utils/date';
import UpArrowIcon from './files/upArrowIcon.svg';
import DownArrowIcon from './files/downArrowIcon.svg';


const RightSection = (props) => {
  const {allTestsById, loadingAllTestsById, loadingAllPlansById,} = props
  console.log('RightSection');
  let testsCounter = 1;
  const [shouldDisplayTests, setShouldDisplayTests] = useState(true);


  function handleArrowClick(arrowDirection) {
    // eslint-disable-next-line no-unused-expressions
    arrowDirection === 'up'
      ? setShouldDisplayTests(true)
      : setShouldDisplayTests(false);
  }

  function renderTestsList(test) {
    const normalizedDate = normalizeDate(test.date, false);
    const results = test.abnormality ? 'ABNORMALITY' : 'NORMAL';
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
    );
    return <DetailsCard key={Math.random()}>{content}</DetailsCard>;
  }

  return (
    <>
      <img
        className="up-arrow"
        src={UpArrowIcon}
        onClick={() => handleArrowClick('up')}
        alt="up"
      />
      <div className="right-section">
        <div className={`tests ${shouldDisplayTests ? '' : 'hidden'}`}>
          <h1>Last Tests</h1>
          {loadingAllTestsById ? (
            <div className="right-section--loading-container">
              <Spin size="large" />
            </div>
          ) : (
            <div className="cards-container">
              {allTestsById.length !== 0
                ? allTestsById.map(renderTestsList)
                : <h2>no tests</h2>}
            </div>
          )}
        </div>
        <div className={`plans ${shouldDisplayTests ? 'hidden' : ''}`}>
          <h1>Rehabilitation plans</h1>
          {loadingAllPlansById ? (
            <div className="right-section--loading-container">
              <Spin size="large" />
            </div>
          ) : (
            <div className="cards-container">
              <h2>coming soon.. stay tuned</h2>
            </div>
          )}
        </div>
      </div>
      <img
        className="down-arrow"
        src={DownArrowIcon}
        onClick={() => handleArrowClick('down')}
        alt="down"
      />
    </>
  );
};

export default RightSection;

RightSection.propTypes = {
  allTestsById: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingAllTestsById: PropTypes.bool.isRequired,
  allPlansById: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingAllPlansById: PropTypes.bool.isRequired,
};
