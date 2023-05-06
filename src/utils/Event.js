import moment from "moment";

export function removeEventFromDays(days, event) {
    const dayOfWeek = moment(event.start).format("dddd");
    const updatedDays = days.map((day) => {
        if (day.day === dayOfWeek) {
            day.periods = day.periods.filter((period) => period.start_time !== moment(event.start).format("hh:mm A"));
        }
        return day;
    });
    return updatedDays;
}
