import React from "react";
import { Calendar } from "react-big-calendar";
import moment from "moment";
import styles from 'src/Admin/Admin.module.css'
export function Calender({
  localizer,
  events,
  handleSelect,
  handleKeyPress
}) {
  return <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" selectable onSelectSlot={handleSelect} defaultView="week" min={moment().startOf("day").set("hour", 8).set("minute", 30).toDate()} max={moment().startOf("day").set("hour", 17).set("minute", 30).toDate()} views={[ "week" ]} step={30} timeslots={1} defaultDate={moment().toDate()} toolbar={false} formats={{
    timeGutterFormat: "hh:mm A"
  }} components={{
    event: ({
      event
    }) => <div className={styles.event} style={{
      backgroundColor: "#3174ad",
      color: "white",
      borderRadius: "5px",
      padding: "2px 5px",
      cursor: "pointer"
    }} data-id={event.id} tabIndex={0} onKeyUp={handleKeyPress}>
        {event.subject}
      </div>
  }} />;
}
