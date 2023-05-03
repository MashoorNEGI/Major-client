// utils/timetable.js

export const getInitialTimetableData = (days, periodsCount) => {
    return days.map(() => Array.from({ length: periodsCount }, () => ({ subject: "", start_time: "", end_time: "" })));
}

export const updateTimetableData = (prevData, row, col, field, value) => {
    const newData = [ ...prevData ];
    newData[ row ][ col ][ field ] = value;
    return newData;
}
