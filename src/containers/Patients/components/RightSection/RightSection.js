import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import DetailsCard from 'components/DetailsCard/';
import AbnormalityChip from 'components/AbnormalityChip';
import { normalizeDate } from 'utils/date';
import UpArrowIcon from './files/upArrowIcon.svg';
import DownArrowIcon from './files/downArrowIcon.svg';


const RightSection = ({ allTestsById, loadingAllTestsById }) => {
  console.log('RightSection');
  let counter = 1;
  const [shouldDisplayTests, setShouldDisplayTests] = useState(true);

  function handleArrowClick(arrowDirection) {
    // eslint-disable-next-line no-unused-expressions
    arrowDirection === 'up'
      ? setShouldDisplayTests(true)
      : setShouldDisplayTests(false);
  }

  function renderTestsList(test) {
    console.log('test: ', test);
    const normalizedDate = normalizeDate(test.date, false);
    const results = test.abnormality ? 'ABNORMALITY' : 'NORMAL';
    const content = (
      <>
        {/* eslint-disable-next-line no-plusplus */}
        <h1>{`#${counter++}`}</h1>
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
        // alt="up"
      />
      <div className="right-section">
        { shouldDisplayTests ? (
          <div className="tests">
            <h1>Last Tests</h1>
            {loadingAllTestsById ? (
              <div className="right-section--loading-container">
                <ReactLoading type="bars" color="black" height={70} width={70} />
              </div>
            ) : (
              <div className="cards-container">
                {allTestsById.length !== 0
                  ? allTestsById.map(renderTestsList)
                  : <h2>no tests</h2>}
              </div>
            )}
          </div>
        )
          : (
            <div className="plans">
              <h1>Rehabilitation plans</h1>
            </div>
          )}
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
};
