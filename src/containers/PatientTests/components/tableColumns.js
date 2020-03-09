import React from "react";
import { normalizeDate } from '../../../utils/date'

const MARKED_ROW_BACKGROUND_COLOR = 'hsl(0, 98%, 84%)';
const columns = [
    {
        title: 'Patient name',
        dataIndex: 'name',
        render( _ , normalizedPatientObj) {
            const rowColor = normalizedPatientObj.waitForPlan === 'yes' ? `${MARKED_ROW_BACKGROUND_COLOR}` : ''
            return {
                props: {
                    style: {background: `${rowColor}`},
                },
                children:(
                    <div>
                        {normalizedPatientObj.image &&
                        <img
                            className={'patient-image'}
                            src= {normalizedPatientObj.image}
                            alt='patient image'
                            style={{width: '45px', height:'45px'}}
                        />}
                        {` ${normalizedPatientObj.name}`}
                    </div>
                ),
            }
        }
    },
    {
        title: 'Test date',
        dataIndex: 'testDate',
        render: (testDate, normalizedPatientObj) => {
            const normalizedDate = normalizeDate(testDate)
            const rowColor = normalizedPatientObj.waitForPlan === 'yes' ? `${MARKED_ROW_BACKGROUND_COLOR}` : ''
            return {
                props: {
                    style: {background: `${rowColor}`},
                },
                children: (<span>{normalizedDate}</span>)
            }
        }
    },
    {
        title: 'Results',
        dataIndex: 'results',
        render: (results, normalizedPatientObj) => {
            const backgroundColorClass = results === 'abnormality' ? 'green' : 'red'
            const rowColor = normalizedPatientObj.waitForPlan === 'yes' ? `${MARKED_ROW_BACKGROUND_COLOR}` : ''
            return {
                props: {
                    style: {background: `${rowColor}`},
                },
                children: (<span className={`results ${backgroundColorClass}`}>{results}</span>)
            }
        }
    },
    {
        title: 'wait for plan',
        dataIndex: 'waitForPlan',
        render: (waitingStatus, normalizedPatientObj) => {
            const rowColor = normalizedPatientObj.waitForPlan === 'yes' ? `${MARKED_ROW_BACKGROUND_COLOR}` : ''
            return {
                props: {
                    style: {background: `${rowColor}`},
                },
                children: (<span className={'waiting-status'}>{waitingStatus}</span>)
            }
        }
    }
];

export default columns