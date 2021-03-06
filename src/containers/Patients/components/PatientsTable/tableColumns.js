import React from 'react'
import AvatarImage from "components/AvatarImage";

const MARKED_ROW_BACKGROUND_COLOR = 'hsl(0, 98%, 84%)'

const columns = [
  {
    title: 'Patient name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    render(_, patientObj) {
      const rowColor = patientObj.waitForPlan ? `${MARKED_ROW_BACKGROUND_COLOR}` : ''
      return {
        props: {
          style: { background: `${rowColor}` },
        },
        children: (
          <div>
            <AvatarImage url={`${patientObj.picture}`} className="patient-image" />
                        &nbsp; &nbsp;
            {` ${patientObj.name}`}
          </div>
        ),
      }
    },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age > b.age,
    render(_, patientObj) {
      const rowColor = patientObj.waitForPlan ? `${MARKED_ROW_BACKGROUND_COLOR}` : ''
      return {
        props: {
          style: { background: `${rowColor}` },
        },
        children: (<span className="age">{patientObj.age}</span>),
      }
    },
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    render(_, patientObj) {
      const rowColor = patientObj.waitForPlan ? `${MARKED_ROW_BACKGROUND_COLOR}` : ''
      return {
        props: {
          style: { background: `${rowColor}` },
        },
        children: (<span className="phone">{patientObj.phoneNumber}</span>),
      }
    },
  },
  {
    title: 'Waiting Status',
    dataIndex: 'waitForPlan',
    sorter: (a, b) => {
      const aa = a.waitForPlan ? 'yes' : 'no'
      const bb = b.waitForPlan ? 'yes' : 'no'
      return aa.localeCompare(bb)
    },
    render: (_, patientObj) => {
      const rowColor = patientObj.waitForPlan ? `${MARKED_ROW_BACKGROUND_COLOR}` : ''
      const normalizedWaitingStatus = patientObj.waitForPlan ? 'Yes' : 'No'
      return {
        props: {
          style: { background: `${rowColor}` },
        },
        children: (<span className="waiting-status">{normalizedWaitingStatus}</span>),
      }
    },
  },
  {
    title: 'Sensors kit Id',
    dataIndex: 'sensorsKitID',
    render(_, patientObj) {
      const rowColor = patientObj.waitForPlan ? `${MARKED_ROW_BACKGROUND_COLOR}` : ''
      const normalizedWaitingStatus = patientObj.waitForPlan ? 'Yes' : 'No'
      return {
        props: {
          style: { background: `${rowColor}` },
        },
        children: (<span>{patientObj.sensorsKitID}</span>),
      }
    },
  },

]

export default columns
