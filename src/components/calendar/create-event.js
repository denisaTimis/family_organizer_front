import React, {useState} from "react";
import DatePick from "./date-picker";
import TimePick from "./time-picker";
import "./create-event.css";
import repeatEvent from "../../icons/repetEvent.png";
import reminder from "../../icons/reminderTime.png";
import event from "../../icons/eventOptions.png";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

//array to store event customization options
const repeatEventOptions = [
    'daily', 'weekly', 'monthly'
];
//array to store events
const eventOptions = [
    'event1', 'event2', 'event3'
];
//array to store reminder options
const reminderTime = [
    '15 minutes before', '10 minutes before', '5 minutes before'
];

//first option of every defined array
const def_repeatEventOptions = repeatEventOptions[0];
const def_eventOptions = eventOptions[0];
const def_reminderTime = reminderTime[0];

export class CreateEvent extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            startTime: new Date()
        };
    }

    render(){
        return(
            <div className={"row"} style={{marginRight:"300px"}}>
                <div className={"py-3 col"} style={{ width:"500px", backgroundColor:"powderblue", marginTop:"20px",marginLeft:"300px"}}>
                    {/*EVENT NAME*/}
                    <div className={"py-3 row"} style={{backgroundColor:"white"}}>
                        <div className={" col-md-auto"} style={{width:"150px"}}>
                            <label>Event name:</label>
                        </div>
                        <div className={"col-md-auto"}>
                            <input type={"text"} className={"form-control create-event-input"} placeholder={"Event name"} />
                        </div>
                    </div>
                    {/*EVENT DATE*/}
                    <div className={"py-3 row"} style={{backgroundColor:"white"}}>
                        <div className={"col-md-auto"} style={{width:"150px"}}>
                            <label>Event date:</label>
                        </div>
                        <div className={"col-md-auto"} style={{marginLeft:"25px"}}>
                            <DatePick />
                        </div>
                    </div>
                    {/*EVENT TIME*/}
                    <div className={"py-3 row"} style={{backgroundColor:"white"}}>
                        <div className={"col-md-auto"} style={{width:"150px"}}>
                            <label>Event time:</label>
                        </div>
                        <div className={"col-md-auto"} style={{marginLeft:"25px"}}>
                            <TimePick/>
                        </div>
                    </div>
                    {/*EVENT LABEL*/}
                    <div className={"py-3 row"} style={{backgroundColor:"white"}}>
                        <div className={"col-md-auto"} style={{width:"150px"}}>
                            <label>Event label:</label>
                        </div>
                        <div className={"col-md-auto"}>
                            <input type={"text"} className={"form-control create-event-input"} placeholder={"Event label"}/>
                        </div>
                    </div>
                    {/*EVENT CUSTOMIZATION*/}
                    <div className={"py-3 row"} style={{backgroundColor:"white"}}>
                        <div className={"col-md-auto"} style={{width:"150px"}}>
                            <label>Repeat:</label>
                        </div>
                        <div className={"col-md-auto"}>
                            <div className={"input-group"} style={{marginLeft:"23px"}}>
                                <div className={"input-group-prepend"}>
                                <span className={"input-group-text create-event-span"} >
                                    <img src={repeatEvent} className={"create-event-icons"}/>
                                </span>
                                </div>
                                <Dropdown options={repeatEventOptions} value={def_repeatEventOptions}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*EVENT REMINDER*/}
                <div className={"py-3 col"} style={{ width:"400px", backgroundColor:"powderblue", marginTop:"20px"}}>
                    {/*EVENT OF REMINDER*/}
                    <div className={"py-3 row"} style={{backgroundColor:"white"}}>
                        <div className={"col-md-auto"} style={{width:"150px"}}>
                            <label>Reminder event:</label>
                        </div>
                        <div className={"col-md-auto"} style={{marginLeft:"25px"}}>
                            <div className={"input-group"} style={{marginLeft:"30px"}}>
                                <div className={"input-group-prepend"}>
                                <span className={"input-group-text create-event-span"} >
                                    <img src={event} className={"create-event-icons"}/>
                                </span>
                                </div>
                                <Dropdown options={eventOptions} value={def_eventOptions}/>
                            </div>
                        </div>
                    </div>
                    {/*TIME OF REMINDER*/}
                    <div className={"py-3 row"} style={{backgroundColor:"white"}}>
                        <div className={"col-md-auto"} style={{width:"150px"}}>
                            <label>Reminder time:</label>
                        </div>
                        <div className={"col-md-auto"} style={{marginLeft:"25px"}}>
                            <div className={"input-group"} style={{marginLeft:"30px"}}>
                                <div className={"input-group-prepend"}>
                                <span className={"input-group-text create-event-span"} >
                                    <img src={reminder} className={"create-event-icons"}/>
                                </span>
                                </div>
                                <Dropdown options={reminderTime} value={def_reminderTime}/>
                            </div>
                        </div>
                    </div>
                    {/*LABEL OF REMINDER*/}
                    <div className={"py-3 row"} style={{backgroundColor:"white"}}>
                        <div className={"col-md-auto"} style={{width:"150px"}}>
                            <label>Reminder label:</label>
                        </div>
                        <div className={"col-md-auto"} style={{marginLeft:"34px"}}>
                            <input type={"text"} className={"form-control create-event-input"} placeholder={"Event label"}/>
                        </div>
                    </div>
                    <div className={"py-4 row justify-content-center"} style={{backgroundColor:"white", height:"121px"}}>
                        <div className={"col-md-auto"}>
                            <input className={"btn btn-light"} type={"submit"} value={"Create"}/>
                        </div>
                        <div className={"col-md-auto"} >
                            <input className={"btn btn-light"} type={"submit"} value={"Cancel"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}