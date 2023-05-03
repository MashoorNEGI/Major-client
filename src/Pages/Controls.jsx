import { TimetableBody } from 'src/components/TimetableBody';
import React, { useState } from 'react';
import Style from './css/Create.module.css'
import { getInitialTimetableData, updateTimetableData } from 'src/Func/TimeTable'
import ApiRequest from 'src/API/apirequest';
import { TimetableHeader } from 'src/components/TimetableHeader';
function TimeTable() {
    // Define the days for the timetable
    const days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    const [ Classes, setClasses ] = useState('');
    // Define the initial state for the timetable data
    const [ periodsCount, setPeriodsCount ] = useState(5);
    const [ timetableData, setTimetableData ] = useState(getInitialTimetableData(days, periodsCount));
    const data = {
        className: Classes,
        days: [
            { day: days[ 0 ], periods: timetableData[ 0 ] },
            { day: days[ 1 ], periods: timetableData[ 1 ] },
            { day: days[ 2 ], periods: timetableData[ 2 ] },
            { day: days[ 3 ], periods: timetableData[ 3 ] },
            { day: days[ 4 ], periods: timetableData[ 4 ] },
            { day: days[ 5 ], periods: timetableData[ 5 ] },
        ]
    }
    console.log(data)
    // Handle changes to the periods count
    const handlePeriodsCountChange = (event) => {
        const newCount = parseInt(event.target.value, 10) || 0;
        setPeriodsCount(newCount);
        setTimetableData(getInitialTimetableData(days, newCount));
    };

    // Handle changes to the timetable data
    const handleTimetableChange = (row, col, field, value) => {
        setTimetableData(prevData =>
            updateTimetableData(prevData, row, col, field, value)
        );
    };
    const handleSubmit = () => {
        const res = ApiRequest('create', 'POST', data, { authorization: false })
        console.log(res)
    }
    return (
        <>
            <TimetableHeader handlePeriodsCountChange={handlePeriodsCountChange} periodsCount={periodsCount} Classes={Classes} setClasses={setClasses} />

            <div className={Style.timetable}>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            {Array.from({ length: periodsCount }, (_, i) => `${i + 1}`).map((period, index) => (
                                <th key={index}>{period}</th>
                            ))}
                        </tr>
                    </thead>
                    <TimetableBody days={days} periodsCount={periodsCount} timetableData={timetableData} handleTimetableChange={handleTimetableChange} />
                </table>
            </div>
            <button className='btn' onClick={handleSubmit}>submit</button>
        </>
    );
}


export default TimeTable;