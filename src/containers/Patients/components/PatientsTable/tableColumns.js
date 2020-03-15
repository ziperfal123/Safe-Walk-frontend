import React from "react";
const MARKED_ROW_BACKGROUND_COLOR = 'hsl(0, 98%, 84%)';

const columns = [
    {
        title: 'Patient name',
        dataIndex: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        render( _ , patientObj) {
            const rowColor = patientObj.waitForPlan ? `${MARKED_ROW_BACKGROUND_COLOR}` : '';
            return {
                props: {
                    style: {background: `${rowColor}`},
                },
                children:(
                    <div>
                        {patientObj.picture &&
                        <img
                            className={'patient-image'}
                            src= {patientObj.picture}
                            alt='patient image'
                        />}
                        &nbsp; &nbsp;
                        {` ${patientObj.name}`}
                    </div>
                ),
            }
        }
    },
    {
        title: 'Patient Age',
        dataIndex: 'age',
        sorter: (a, b) => a.age > b.age,
        render( _ , patientObj) {
            const rowColor = patientObj.waitForPlan ? `${MARKED_ROW_BACKGROUND_COLOR}` : '';
            return {
                props: {
                    style: {background: `${rowColor}`},
                },
                children: (<span className={'age'}>{patientObj.age}</span>)
            }
        }
    },
    {
        title: 'Patient Phone Number',
        dataIndex: 'phoneNumber',
        render( _ , patientObj) {
            const rowColor = patientObj.waitForPlan ? `${MARKED_ROW_BACKGROUND_COLOR}` : '';
            return {
                props: {
                    style: {background: `${rowColor}`},
                },
                children: (<span className={'phone'}>{patientObj.phoneNumber}</span>)
            }
        }
    },
    {
        title: 'Waiting Status',
        dataIndex: 'waitForPlan',
        sorter: (a ,b)  => {
            a = a.waitForPlan ? 'yes' : 'no';
            b = b.waitForPlan ? 'yes' : 'no';
            return a.localeCompare(b)
        },
        render: (_ , patientObj) => {
            const rowColor = patientObj.waitForPlan ? `${MARKED_ROW_BACKGROUND_COLOR}` : '';
            const normalizedWaitingStatus = patientObj.waitForPlan ? 'Yes' : 'No'
            return {
                props: {
                    style: {background: `${rowColor}`},
                },
                children: (<span className={'waiting-status'}>{normalizedWaitingStatus}</span>)
            }
        }
    }
];

export default columns