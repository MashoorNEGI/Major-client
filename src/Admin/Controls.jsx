import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { v4 as uuidv4 } from "uuid";
import './Create.css';
import withAuth from "src/Hooks/Auth";

const localizer = momentLocalizer(moment);

const Timetable = () => {
    const [ events, setEvents ] = useState([]);
    const [ days, setDays ] = useState([
        {
            day: "Monday",
            periods: []
        },
        {
            day: "Tuesday",
            periods: []
        },
        {
            day: "Wednesday",
            periods: []
        },
        {
            day: "Thursday",
            periods: []
        },
        {
            day: "Friday",
            periods: []
        },
        {
            day: "Saturday",
            periods: []
        }
    ]);
    const handleSelect = ({ start, end }) => {
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
                subject
            };

            const updatedDays = days.map((day) => {
                if (day.day === dayOfWeek) {
                    day.periods.push({
                        subject,
                        start_time: startTime,
                        end_time: endTime
                    });
                }
                return day;
            });

            setEvents([ ...events, event ]);
            setDays(updatedDays);
        }
    };
    console.log(days)
    const handleKeyPress = (event) => {
        if (event.key === "Delete") {
            const eventId = event.currentTarget.dataset.id;
            const removedEvent = events.find((event) => event.id === eventId);
            const removedDayOfWeek = moment(removedEvent.start).format("dddd");
            const updatedDays = days.map((day) => {
                if (day.day === removedDayOfWeek) {
                    day.periods = day.periods.filter((period) => period.start_time !== moment(removedEvent.start).format("hh:mm A"));
                }
                return day;
            });
            setEvents(events.filter((event) => event.id !== eventId));
            setDays(updatedDays);
        }
    };
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectSlot={handleSelect}
                defaultView="week"
                min={moment().startOf("day").set("hour", 8).set("minute", 30).toDate()}
                max={moment().startOf("day").set("hour", 17).set("minute", 30).toDate()}
                views={[ "week" ]}
                step={30}
                timeslots={1}
                defaultDate={moment().toDate()}
                toolbar={false}
                formats={{
                    timeGutterFormat: "hh:mm A"
                }}
                components={{
                    event: ({ event }) => (
                        <div
                            className="event"
                            style={{ backgroundColor: "#3174ad", color: "white", borderRadius: "5px", padding: "2px 5px", cursor: "pointer" }}
                            data-id={event.id}
                            tabIndex={0}
                            onKeyUp={handleKeyPress}
                        >
                            {event.subject}
                        </div>
                    )
                }}
            />
        </div>
    );
};

export default withAuth(Timetable);
