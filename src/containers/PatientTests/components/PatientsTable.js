import React, { useState } from 'react'
import { Table } from 'antd'
import columns from './tableColumns'
import SortIcon from '../files/sortIcon.svg'
import FilterIcon from '../files/filterIcon.svg'
const mockPatients = [
    {
        testsList: [],
        waitForPlan: false,
        rehabPlanID: "",
        name: "Idan Asulin",
        mail: "djidanasulin@gmail.com",
        password: "VLtqDS6n1JdE6IaqIIWdcLb8TuC58UQ1PstLORlXZ/M=",
        picture: 'https://previews.123rf.com/images/dimarik16/dimarik161803/dimarik16180300164/97377602-passport-portrait-of-young-caucasian-man-isolated-on-white-background.jpg',
        phoneNumber: "0523858877",
        age: 25,
        gender: "male",
        sensorsKitID: "476da3c2-8581-45f5-a54f-e412fb001e6b",
        id: "466ff388-b317-41ae-b92a-a1817be1f33e",
    },
    {
        testsList: [],
        waitForPlan: true,
        rehabPlanID: "",
        name: "Yaniv Ziperfal",
        mail: "ziperfal123@gmail.com",
        password: "VLtqDS6n1Jddkkdljf722222TuC58UQ1PstLORlXZ/M=",
        picture: 'https://previews.123rf.com/images/dimarik16/dimarik161803/dimarik16180300164/97377602-passport-portrait-of-young-caucasian-man-isolated-on-white-background.jpg',
        phoneNumber: "0525377182",
        age: 28,
        gender: "male",
        sensorsKitID: "476da3c2-88271-45f5-a54f-e412fbjshf72",
        id: "jkhs2811-b317-41ae-b92a-a1817be2722hd",
    },
    {
        testsList: [],
        waitForPlan: true,
        rehabPlanID: "",
        name: "Avraham Neeman",
        mail: "neeman@gmail.com",
        password: "VLtqDS6n1Jddkkdlaskljd8221TuC58UQ1PstLORlXZ/M=",
        picture: 'https://previews.123rf.com/images/dimarik16/dimarik161803/dimarik16180300164/97377602-passport-portrait-of-young-caucasian-man-isolated-on-white-background.jpg',
        phoneNumber: "05012345678",
        age: 28,
        gender: "male",
        sensorsKitID: "sj22ddd-88271-45f5-a54f-sklajdkl2222",
        id: "happ123441-b317-41ae-b92a-sad22222",
    },
    {
        testsList: [],
        waitForPlan: false,
        rehabPlanID: "",
        name: "Idan Asulin",
        mail: "djidanasulin@gmail.com",
        password: "VLtqDS6n1JdE6IaqIIWdcLb8TuC58UQ1PstLORlXZ/M=",
        picture: 'https://previews.123rf.com/images/dimarik16/dimarik161803/dimarik16180300164/97377602-passport-portrait-of-young-caucasian-man-isolated-on-white-background.jpg',
        phoneNumber: "0523858877",
        age: 25,
        gender: "male",
        sensorsKitID: "476da3c2-8581-45f5-a54f-e412fb001e6b",
        id: "466ff388-b317-41ae-b92a-a1817be1f33e",
    },
    {
        testsList: [],
        waitForPlan: true,
        rehabPlanID: "",
        name: "Yaniv Ziperfal",
        mail: "ziperfal123@gmail.com",
        password: "VLtqDS6n1Jddkkdljf722222TuC58UQ1PstLORlXZ/M=",
        picture: 'https://previews.123rf.com/images/dimarik16/dimarik161803/dimarik16180300164/97377602-passport-portrait-of-young-caucasian-man-isolated-on-white-background.jpg',
        phoneNumber: "0525377182",
        age: 28,
        gender: "male",
        sensorsKitID: "476da3c2-88271-45f5-a54f-e412fbjshf72",
        id: "jkhs2811-b317-41ae-b92a-a1817be2722hd",
    },
    {
        testsList: [],
        waitForPlan: true,
        rehabPlanID: "",
        name: "Avraham Neeman",
        mail: "neeman@gmail.com",
        password: "VLtqDS6n1Jddkkdlaskljd8221TuC58UQ1PstLORlXZ/M=",
        picture: 'https://previews.123rf.com/images/dimarik16/dimarik161803/dimarik16180300164/97377602-passport-portrait-of-young-caucasian-man-isolated-on-white-background.jpg',
        phoneNumber: "05012345678",
        age: 28,
        gender: "male",
        sensorsKitID: "sj22ddd-88271-45f5-a54f-sklajdkl2222",
        id: "happ123441-b317-41ae-b92a-sad22222",
    },
    {
        testsList: [],
        waitForPlan: false,
        rehabPlanID: "",
        name: "Idan Asulin",
        mail: "djidanasulin@gmail.com",
        password: "VLtqDS6n1JdE6IaqIIWdcLb8TuC58UQ1PstLORlXZ/M=",
        picture: 'https://previews.123rf.com/images/dimarik16/dimarik161803/dimarik16180300164/97377602-passport-portrait-of-young-caucasian-man-isolated-on-white-background.jpg',
        phoneNumber: "0523858877",
        age: 25,
        gender: "male",
        sensorsKitID: "476da3c2-8581-45f5-a54f-e412fb001e6b",
        id: "466ff388-b317-41ae-b92a-a1817be1f33e",
    },
    {
        testsList: [],
        waitForPlan: true,
        rehabPlanID: "",
        name: "Yaniv Ziperfal",
        mail: "ziperfal123@gmail.com",
        password: "VLtqDS6n1Jddkkdljf722222TuC58UQ1PstLORlXZ/M=",
        picture: 'https://previews.123rf.com/images/dimarik16/dimarik161803/dimarik16180300164/97377602-passport-portrait-of-young-caucasian-man-isolated-on-white-background.jpg',
        phoneNumber: "0525377182",
        age: 28,
        gender: "male",
        sensorsKitID: "476da3c2-88271-45f5-a54f-e412fbjshf72",
        id: "jkhs2811-b317-41ae-b92a-a1817be2722hd",
    },
    {
        testsList: [],
        waitForPlan: true,
        rehabPlanID: "",
        name: "Avraham Neeman",
        mail: "neeman@gmail.com",
        password: "VLtqDS6n1Jddkkdlaskljd8221TuC58UQ1PstLORlXZ/M=",
        picture: 'https://previews.123rf.com/images/dimarik16/dimarik161803/dimarik16180300164/97377602-passport-portrait-of-young-caucasian-man-isolated-on-white-background.jpg',
        phoneNumber: "05012345678",
        age: 28,
        gender: "male",
        sensorsKitID: "sj22ddd-88271-45f5-a54f-sklajdkl2222",
        id: "happ123441-b317-41ae-b92a-sad22222",
    },
];

const mockTests = [
    {
        date: "2020-02-19T18:00:49.110Z",
        abnormality: false,
        detailedDiagnostic: "Waiting for the therapist's update",
        patientID: "466ff388-b317-41ae-b92a-a1817be1f33e",
        id: "a1a8ba45-2f05-4d6f-a024-3b367b2edfc8",
    },
    {
        date: "2020-04-19T18:10:49.110Z",
        abnormality: true,
        detailedDiagnostic: "Waiting for the therapist's update",
        patientID: "jkhs2811-b317-41ae-b92a-a1817be2722hd",
        id: "jkhs28sds11-b317-sdsdsd41ae-bsdsd92a-sadsde2722hd",
    },
    {
        date: "2020-02-19T18:00:49.110Z",
        abnormality: true,
        detailedDiagnostic: "Waiting for the therapist's update",
        patientID: "happ123441-b317-41ae-b92a-sad22222",
        id: "happ123441-b317-41ae-b92a-sad22222",
    }
]

const PatientsTable = props => {
    console.log('PatientsTable')

    function renderIcon(icon, label) {
        return (
            <div className={'icon-wrapper'}>
                <img
                    className={'icon'}
                    src={icon}
                    width={15}
                />
                <p>{label}</p>
            </div>
        )
    }

    function getNormalizedData() {
        // const normalizedPatients = props.allPatients.map(patient => {   // TODO:: according to this function- each user have only 1 test
        const normalizedPatients = mockPatients.map(patient => {
            const patientId = patient.id;
            let obj = {};
            // props.allTests.map(test => {
            mockTests.map(test => {
                if(test.patientID === patientId) {
                    obj['results']= test.abnormality ? 'abnormality' : 'normal';
                    obj['testDate']= test.date;
                    obj['key']= patientId
                }
            });
            return {
                name: patient.name,
                waitForPlan: patient.waitForPlan ? 'yes' : 'no',
                image: patient.picture,
                ...obj
            }
        });
        return normalizedPatients
    }

    return (
        <div className={'table-wrapper'}>
            <div className={'icons-section-wrapper'}>
                {renderIcon(SortIcon , 'Sort')}
                {renderIcon(FilterIcon , 'Filter')}
            </div>
            <Table
                className={'table'}
                columns={columns}
                dataSource={ getNormalizedData() }
                pagination={false}
            />
        </div>
    )
}

export default PatientsTable