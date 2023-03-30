import React, { useEffect, useState } from 'react';
import Style from './Table.module.css';

const Time = ({ timetable }) => {
    const days = timetable.days;
    const currentTime = '09:00'
    const currentday = 'Monday'
    // const [ currentTime, setCurrentTime ] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    const getSlot = (day, slotIndex) => {
        const slot = day.periods[ slotIndex ];
        if (!slot) {
            return null;
        }
        if (slot) {
        }
        const isActive = currentTime > slot.start_time && currentTime <= slot.end_time && currentday === day.day
        return (
            <div className={`${Style.periodWrapper} ${isActive ? Style.active : ''}`} >
                <div className={Style.class}>{slot.class}</div>
                <div className={Style.subject}>{slot.subject}</div>
            </div>
        );
    };

    const fillInGaps = (day) => {
        const newPeriods = [];
        for (let i = 0; i < day.periods.length; i++) {
            const currentSlot = day.periods[ i ];
            const nextSlot = day.periods[ i + 1 ];
            if (currentSlot) {
                newPeriods.push(currentSlot);
                if (nextSlot && nextSlot.start_time !== currentSlot.end_time) {

                }
            }
        }
        return { ...day, periods: newPeriods };
    };

    const daysWithGaps = days.map(fillInGaps);

    const getPeriodTimes = () => {
        const periodTimes = [];
        days.forEach((day) => {
            day.periods.forEach((period) => {
                const startTime = period.start_time;
                const endTime = period.end_time;
                if (!periodTimes.includes(startTime)) {
                    periodTimes.push(startTime);
                }
                if (!periodTimes.includes(endTime)) {
                    periodTimes.push(endTime);
                }
            });
        });
        return periodTimes.sort();
    };

    const periodTimes = getPeriodTimes();
    useEffect(() => {
        const intervalId = setInterval(() => {
            // setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
        }, 10000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <div className={Style.timetable}>
            <table>
                <thead>
                    <tr>
                        <th className={Style.period}>Time</th>
                        {daysWithGaps.map((day) => (
                            <th key={day.day} className={Style.day}>
                                {day.day}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {periodTimes.map((time, i) => (
                        <tr key={time}>
                            <td className={Style.period}>{time}</td>
                            {daysWithGaps.map((day) => {
                                const periodIndex = day.periods.findIndex(
                                    (period) => period.start_time === time
                                );
                                return (
                                    <td key={day.day} className={Style.day}>
                                        {getSlot(day, periodIndex)
                                            || (<div className={Style.break}>Break</div>)
                                        }
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Time;
