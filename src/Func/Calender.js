import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { removeEventFromDays } from "src/utils/Event";

export const handleSelect = (days, setDays, events, setEvents) => ({ start, end }) => {
    const subject = window.prompt("Enter a subject name:");
    if (subject) {
        const startTime = moment(start).format("hh:mm A");
        const endTime = moment(end).format("hh:mm A");
        const dayOfWeek = moment(start).format("dddd");
        const eventId = uuidv4();

        const event = {
            id: eventId,
            start,
            end,
            subject,
        };

        const updatedDays = days.map((day) => {
            if (day.day === dayOfWeek) {
                day.periods.push({
                    subject,
                    start_time: startTime,
                    end_time: endTime,
                });
            }
            return day;
        });

        setEvents([ ...events, event ]);
        setDays(updatedDays);
    }
};

export const handleKeyPress = (days, setDays, events, setEvents) => (event) => {
    if (event.key === "Delete") {
        const eventId = event.currentTarget.dataset.id;
        const removedEvent = events.find((event) => event.id === eventId);
        const updatedDays = removeEventFromDays(days, removedEvent);
        setEvents(events.filter((event) => event.id !== eventId));
        setDays(updatedDays);
    }
};
