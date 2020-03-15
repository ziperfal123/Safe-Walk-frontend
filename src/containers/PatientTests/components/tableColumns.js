import React from "react";
import { normalizeDate } from '../../../utils/date'

const MARKED_ROW_BACKGROUND_COLOR = 'hsl(0, 98%, 84%)';

const columns = [
    {
        title: 'Patient name',
        dataIndex: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        render( _ , normalizedPatientObj) {
            const rowColor = normalizedPatientObj.waitForPlan === 'yes' ? `${MARKED_ROW_BACKGROUND_COLOR}` : ''
            return {
                props: {
                    style: {background: `${rowColor}`},
                },
                children:(
                    <div>
                        {normalizedPatientObj.patientImage &&
                        <img
                            className={'patient-image'}
                            src= {normalizedPatientObj.patientImage}
                            alt='patient image'
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
        sorter: (a,b) => a.results.localeCompare(b.results),
        render: (results, normalizedPatientObj) => {
            const backgroundColorClass = results === 'abnormality' ? 'red' : 'green'
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
        title: 'Waiting for plan',
        dataIndex: 'waitingStatus',
        sorter: (a,b) => a.waitingStatus.localeCompare(b.waitingStatus),
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