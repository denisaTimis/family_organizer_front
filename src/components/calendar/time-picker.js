import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

const TimePick = () => {

    //start from 00:00
    const [value, onChange] = useState('00:00');
    return (
        <TimePicker onChange={onChange} value={value}/>
    );
};
export default TimePick  ;