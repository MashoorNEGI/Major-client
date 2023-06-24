import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "./Admin.module.css";
import { handleSelect, handleKeyPress } from "src/Func/Calender";
import { useState } from 'react'
import { Calender } from "src/components/Table/Calendar";
import { useDaysState } from "src/Func/Data";
import ApiRequest from "src/API/apirequest";
import { Semester, courses, subject } from "src/utils/subject";
const Create = () => {
    const [ events, setEvents ] = useState([]);
    const [ courseName, setCourseName ] = useState("BCA");
    const [ semester, setSemester ] = useState("semester 1");
    const [ Subject, setSubjects ] = useState(subject[ courseName ]?.[ semester ].map((subject) => subject.subjectName));
    const [ days, setDays ] = useDaysState()
    const Start = moment().startOf("day").set({ hour: 8, minute: 30 });
    const end = moment().startOf("day").set({ hour: 17, minute: 30 });
    const data = { start_time: `0${Start.hour()}:${Start.minute()}`, end_time: `${end.hour()}:${end.minute()}`, className: courseName + " - " + semester.split(" ")[ 1 ], days }
    const localizer = momentLocalizer(moment);
    const onSelect = handleSelect(days, Subject, setDays, events, setEvents);
    const onKeyPress = handleKeyPress(days, setDays, events, setEvents);

    const handleInput1Change = (event) => {
        setCourseName(event.target.value);
    };
    const handleSemesterChange = (event) => {
        const inputSemester = event.target.value.toLowerCase(); // Convert the input semester to lowercase
        setSemester(event.target.value);
        const selectedSubjects = subject[ courseName ]?.[ inputSemester ].map((subject) => subject.subjectName) || [];
        console.log("🚀 ~ file: Create.jsx:30 ~ handleSemesterChange ~ selectedSubjects:", selectedSubjects)
        setSubjects(selectedSubjects);
    };
    const handleSubmit = (event) => {
        ApiRequest('create', 'POST', data, { authorization: false })
        console.log("🚀 ~ file: Create.jsx:26 ~ handleSubmit ~ data:", data)
    };
    return (
        <div style={{ width: "90%", margin: "auto" }}>
            <div className={styles.container}>
                <div className={styles.inputcontainer}>
                    <label htmlFor="input1" className={styles.label}>CourseName</label>
                    <select
                        className={styles.input}
                        type="text"
                        id="input1"
                        value={courseName}
                        onChange={handleInput1Change}
                        placeholder="Enter Input 1"
                    >
                        {
                            courses.map((data, i) => <option key={i}>{data}</option>)
                        }
                    </select>
                </div>
                <div className={styles.inputcontainer}>
                    <label htmlFor="input2" className={styles.label}>Semester</label>
                    <select
                        className={styles.input}
                        type="text"
                        id="input2"
                        value={semester}
                        onChange={handleSemesterChange}
                        placeholder="Enter Input 2"
                    >
                        {
                            Semester.map((data, i) => <option key={i}>{data}</option>)
                        }
                    </select>
                </div>
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