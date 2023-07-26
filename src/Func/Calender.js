import moment from "moment";
import { v4 as uuidv4 } from "uuid";

export const handleSelect = (days, Subject, setDays, events, setEvents) => ({ start, end }) => {
    createSelectDialog("Select a subject:", Subject, (selectedSubject) => {
        if (selectedSubject) {
            const startTime = moment(start).format("hh:mm");
            const endTime = moment(end).format("hh:mm");
            const dayOfWeek = moment(start).format("dddd");
            const eventId = uuidv4();

            const event = {
                id: eventId,
                start,
                end,
                subject: selectedSubject,
            };
            const updatedDays = days.map((day) => {
                if (day.day === dayOfWeek) {
                    day.periods.push({
                        subject: selectedSubject,
                        start_time: startTime,
                        end_time: endTime,
                    });
                }
                return day;
            });

            setEvents([ ...events, event ]);
            setDays(updatedDays);
        }
    });
};

const createSelectDialog = (message, options, callback) => {
    const selectElement = document.createElement("select");
    options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.text = option;
        selectElement.add(optionElement);
    });

    const buttonElement = document.createElement("button");
    buttonElement.textContent = "OK";
    Object.assign(buttonElement.style, {
        padding: '5px',
        border: "none",
        borderRadius: "10px",
    })
    const containerElement = document.createElement("div");
    Object.assign(containerElement.style, {
        margin: "10px auto",
        padding: "10px",
    });

    const dialog = document.createElement("dialog");
    Object.assign(dialog.style, {
        width: "max-content",
        margin: "10px auto",
        padding: "10px",
        border: "none",
        borderRadius: "10px",
    });

    buttonElement.addEventListener("click", () => {
        dialog.close();
        callback(selectElement.value);
    });

    containerElement.appendChild(document.createTextNode(message));
    containerElement.appendChild(selectElement);
    containerElement.appendChild(buttonElement);

    dialog.appendChild(containerElement);

    document.body.appendChild(dialog);
    dialog.showModal();
};



export const handleKeyPress = (days, setDays, events, setEvents) => (event) => {
    if (event.key === "Delete") {
        const eventId = event.currentTarget.dataset.id;
        const removedEvent = events.find((event) => event.id === eventId);

        // Remove the event from the days array
        const updatedDays = days.map((day) => ({
            ...day,
            periods: day.periods.filter((period) => period.subject !== removedEvent.subject),
        }));

        setEvents(events.filter((event) => event.id !== eventId));
        setDays(updatedDays);
    }
};
