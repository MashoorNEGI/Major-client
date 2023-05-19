// utils/timetable.js
export const getInitialTimetableData = (days, periodsCount) => {
    return days.map(() => Array.from({ length: periodsCount }, () => ({ subject: "", start_time: "", end_time: "" })));
}

export const updateTimetableData = (prevData, row, col, field, value) => {
    const newData = [ ...prevData ];
    newData[ row ][ col ][ field ] = value;
    return newData;
}

export const getSlot = (day, slotIndex, currentTime, currentday, Style) => {
    const slot = day.periods[ slotIndex ];
    if (!slot) {
        return null;
    }
    if (slot) { }
    const isActive =
        currentTime > slot.start_time &&
        currentTime <= slot.end_time &&
        currentday === day.day;
    return <>
        <div className={isActive ? Style.active : ''}>
            <div className="class">{slot.class}</div>
            <div className="subject">{slot.subject}</div>
        </div>
    </>

};

export const fillInGaps = (day) => {
    const newPeriods = [];
    for (let i = 0; i < day.periods.length; i++) {
        const currentSlot = day.periods[ i ];
        const nextSlot = day.periods[ i + 1 ];
        if (currentSlot) {
            newPeriods.push(currentSlot);
            if (nextSlot && nextSlot.start_time !== currentSlot.end_time) { }
        }
    }
    return { ...day, periods: newPeriods };
};

export const getPeriodTimes = (days) => {
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
