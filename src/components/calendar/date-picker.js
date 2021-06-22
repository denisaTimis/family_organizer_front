import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePick = () => {
    //get current date
    const [startDate, setStartDate] = useState(new Date());
    //set start date as the selected date
    return (
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    );
};
export default DatePick;