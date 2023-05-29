import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "./Admin.module.css";
import { handleSelect, handleKeyPress } from "src/Func/Calender";
import { useState } from 'react'
import { Calender } from "src/components/Table/Calendar";
import { useDaysState } from "src/Func/Data";
import ApiRequest from "src/API/apirequest";
const Create = () => {
    const [ events, setEvents ] = useState([]);
    const [ input1, setInput1 ] = useState("");
    const [ days, setDays ] = useDaysState()
    const Start = moment().startOf("day").set({ hour: 17, minute: 30 });
    const end = moment().startOf("day").set({ hour: 8, minute: 30 });
    const data = { start_time: `${end.hour()}:${end.minute()}`, end_time: `${Start.hour()}:${Start.minute()}`, class: input1, days }
    const localizer = momentLocalizer(moment);
    const onSelect = handleSelect(days, setDays, events, setEvents);
    const onKeyPress = handleKeyPress(days, setDays, events, setEvents);

    const handleInput1Change = (event) => {
        setInput1(event.target.value);
    };
    const handleSubmit = (event) => {
        ApiRequest('create', 'POST', data, { authorization: false })
    };
    return (
        <div style={{ width: "90%", margin: "auto" }}>
            <div className={styles.inputcontainer}>
                <label htmlFor="classname" className={styles.Adminlabel}>Class Name</label>
                <input className={styles.Admininput}
                    type="text"
                    id="className"
                    value={input1}
                    placeholder="Enter className"
                    onChange={handleInput1Change}
                />
            </div>
            <div className={styles.rbcbtngroup}>
                <button className={styles.calendarbutton} onClick={handleSubmit}>Create</button>
            </div>
            <Calender
                localizer={localizer}
                events={events}
                handleSelect={onSelect}
                handleKeyPress={onKeyPress}
            />
        </div>
    );
};

export default Create