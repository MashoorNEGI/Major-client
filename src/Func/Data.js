import { useState } from "react";

export const useDaysState = () => {
    const [ days, setDays ] = useState([
        { day: "Monday", periods: [] },
        { day: "Tuesday", periods: [] },
        { day: "Wednesday", periods: [] },
        { day: "Thursday", periods: [] },
        { day: "Friday", periods: [] },
        { day: "Saturday", periods: [] },
    ]);

    return [ days, setDays ];
};

