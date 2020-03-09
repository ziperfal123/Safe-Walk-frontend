import React from "react";
import { normalizeDate } from '../../../utils/date'
const columns = [
    {
        title: 'Patient name',
        dataIndex: 'name',
        render: (_ , normalizedPatientObj) => {
            return (
                <div>
                    {normalizedPatientObj.image &&
                        <img
                            src= {normalizedPatientObj.image}
                            alt='patient image'
                            style={{width: '45px', height:'45px'}}
                        />}
                    {` ${normalizedPatientObj.name}`}
                </div>
            )}
    },
    {
        title: 'Test date',
        dataIndex: 'testDate',
        render: testDate => {
            let normalizedDate = normalizeDate(testDate)
            return <span>{normalizedDate}</span>
        }
    },
    {
        title: 'Results',
        dataIndex: 'results',
        render: results => {
            const backgroundColorClass = results === 'abnormality' ? 'green' : 'red'
                return <span className={`results ${backgroundColorClass}`}>{results}</span>
        },
    },
    {
        title: 'wait for plan',
        dataIndex: 'waitForPlan',
        render: waitingStatus => <span className={'waiting-status'}>{waitingStatus}</span>

    },
];

export default columns