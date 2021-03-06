import React from 'react'
import AbnormalityChip from 'components/AbnormalityChip'
import { normalizeDate } from 'utils/date'
import AvatarImage from 'components/AvatarImage'

const MARKED_ROW_BACKGROUND_COLOR = 'hsl(0, 98%, 84%)'

const columns = [
  {
    title: 'Patient name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    render(_, normalizedPatientObj) {
      const rowColor = normalizedPatientObj.results && normalizedPatientObj.results.toLowerCase() === 'abnormality' ? `${MARKED_ROW_BACKGROUND_COLOR}` : ''
      return {
        props: {
          style: { background: `${rowColor}` },
        },
        children: (
          <div key={normalizedPatientObj.key}>
            <AvatarImage url={`${normalizedPatientObj.patientImage}`} className="patient-image" />
              &nbsp; &nbsp;
            {` ${normalizedPatientObj.name}`}
          </div>
        ),
      }
    },
  },
  {
    title: 'Test date',
    dataIndex: 'testDate',
    // sorter: (a, b) => a.getTime() > b.getTime(),
    render: (testDate, normalizedPatientObj) => {
      const normalizedDate = normalizeDate(testDate)
      const rowColor = normalizedPatientObj.results && normalizedPatientObj.results.toLowerCase() === 'abnormality' ? `${MARKED_ROW_BACKGROUND_COLOR}` : ''
      return {
        props: {
          style: { background: `${rowColor}` },
        },
        children: (<span>{normalizedDate}</span>),
      }
    },
  },
  {
    title: 'Results',
    dataIndex: 'results',
    sorter: (a, b) => a.results.localeCompare(b.results),
    render: (results) => {
      const rowColor = results && results.toLowerCase() === 'abnormality' ? `${MARKED_ROW_BACKGROUND_COLOR}` : ''
      return {
        props: {
          style: { background: `${rowColor}` },
        },
        children: (
          <AbnormalityChip results={results} />
        ),
      }
    },
  },
  {
    title: 'Waiting for plan',
    dataIndex: 'waitingStatus',
    sorter: (a, b) => a.waitingStatus.localeCompare(b.waitingStatus),
    render: (waitingStatus, normalizedPatientObj) => {
      const rowColor = normalizedPatientObj.results && normalizedPatientObj.results.toLowerCase() === 'abnormality' ? `${MARKED_ROW_BACKGROUND_COLOR}` : ''
      return {
        props: {
          style: { background: `${rowColor}` },
        },
        children: (<span className="waiting-status">{waitingStatus}</span>),
      }
    },
  },
]

export default columns
