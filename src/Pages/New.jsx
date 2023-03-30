import React, { useState } from 'react';
import Style from './css/Create.module.css'
function TimeTable() {
    // Define the days for the timetable
    const days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    const Class = 'BBA'
    // Define the initial state for the timetable data
    const [ periodsCount, setPeriodsCount ] = useState(5);
    const [ timetableData, setTimetableData ] = useState(
        days.map(() => Array.from({ length: periodsCount }, () => ({ subject: "", start: "", end: "" })))
    );
    const data = {
        email: `Email`,
        class: Class,
        days: [
            { day: days[ 0 ], periods: timetableData[ 0 ] },
            { day: days[ 1 ], periods: timetableData[ 1 ] },
            { day: days[ 2 ], periods: timetableData[ 2 ] },
            { day: days[ 3 ], periods: timetableData[ 3 ] },
            { day: days[ 4 ], periods: timetableData[ 4 ] },
            { day: days[ 5 ], periods: timetableData[ 5 ] },
        ]
    }
    console.log()
    // Handle changes to the periods count
    const handlePeriodsCountChange = (event) => {
        const newCount = parseInt(event.target.value, 10) || 0;
        setPeriodsCount(newCount);
        setTimetableData(
            days.map(() => Array.from({ length: newCount }, () => ({ subject: "", start: "", end: "" })))
        );
    };

    // Handle changes to the timetable data
    const handleTimetableChange = (row, col, field, value) => {
        setTimetableData((prevData) => {
            const newData = [ ...prevData ];
            newData[ row ][ col ][ field ] = value;
            console.log(data)
            console.log(data)
            return newData;
        });
    };
    return (
        <>
            <div className={Style.container}>
                <div className={Style.inputcontainer}>
                    <div className={Style.inputwrapper}>
                        <label htmlFor="leftInput" className={Style.inputlabel}>No. of periods:</label>
                        <input
                            type="text"
                            id="leftInput"
                            className={Style.inputfield}
                            onChange={handlePeriodsCountChange}
                            value={periodsCount}
                        />
                    </div>
                    <div className={Style.inputwrapper}>
                        <label htmlFor="rightInput" className={Style.inputlabel}>Class Room:</label>
                        <input
                            type="text"
                            id="rightInput"
                            className={Style.inputfield}
                            value={Class}
                            disabled
                        />
                    </div>
                </div>
            </div>

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
                    <tbody>
                        {days.map((day, rowIndex) => (
                            <tr key={rowIndex}>
                                <td>{day}</td>
                                {Array.from({ length: periodsCount }, (_, i) => i).map((colIndex) => (
                                    <td key={colIndex}>
                                        <div className={Style.cell}>
                                        <input
                                            type="text"
                                            value={timetableData[ rowIndex ][ colIndex ].subject}
                                            onChange={(event) => handleTimetableChange(rowIndex, colIndex, "subject", event.target.value)}
                                        />
                                        <input
                                            type="time"
                                            value={timetableData[ rowIndex ][ colIndex ].start}
                                            onChange={(event) => handleTimetableChange(rowIndex, colIndex, "start", event.target.value)}
                                        />
                                        <input
                                            type="time"
                                            value={timetableData[ rowIndex ][ colIndex ].end}
                                            onChange={(event) => handleTimetableChange(rowIndex, colIndex, "end", event.target.value)}
                                            />
                                            </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}


export default TimeTable;
