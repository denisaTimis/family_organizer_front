import React from "react";
import "./calendar.css"
import {CreateEvent} from "./create-event";
import format from "date-fns/format";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";
import addDays from "date-fns/addDays";
import startOfWeek from "date-fns/startOfWeek";
import startOfMonth from "date-fns/startOfMonth";
import endOfWeek from "date-fns/endOfWeek";
import endOfMonth from "date-fns/endOfMonth";
import isSameDay from "date-fns/isSameDay";
import isSameMonth from "date-fns/isSameMonth";
import parse from "date-fns/parse";
import prevMonth from "../../icons/prevmonth.png"
import nextMonth from "../../icons/nextmonth.png"
import event from "../../icons/event.png"
import reminder from "../../icons/reminder.png"

export class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date(),
            hideCreateEvent:true,
        };
        this.onAddEvent=this.onAddEvent.bind(this);
        this.renderCalendarHeader=this.renderCalendarHeader.bind(this);
        this.renderCalendarCells=this.renderCalendarCells.bind(this);
    }

    // render calendar header
    renderCalendarHeader() {
        //pick date format
        const dateFormat = "MMMM yyyy";
        return (
            // create div to store prev/next month buttons and the current month
            <div className="py-2 row calendar-header">
                <div className="col col-start">
                    <div onClick={this.prevMonth}>
                        <img src={prevMonth}/>
                    </div>
                </div>
                <div className="col col-center">
                    <span>
                        {format(this.state.currentMonth, dateFormat)}
                    </span>
                </div>
                <div className="col col-end">
                    <div onClick={this.nextMonth}>
                        <img src={nextMonth}/>
                    </div>
                </div>
            </div>
        );
    }

    //render cells
    renderCalendarCells() {
        //get current month of selected date
        const { currentMonth, selectedDate } = this.state;

        //get start/end of month/day
        const monthStart =startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        //pick date format
        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";

        // parse every day of current month
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate =format(day, dateFormat);
                const cloneDay = day;
                //add to the days array a div containing the date number
                days.push(
                    <div
                        className={`col cell ${!isSameMonth(day, monthStart) ? "disabled" :isSameDay(day, selectedDate) ? "selected" : ""}`}
                        key={day}
                        onClick={() => this.onDateClick(parse(cloneDay))}
                    >
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                    </div>
                );
                day = addDays(day, 1);
            }

            // add every day off week to the row
            rows.push(
                <div className="row calendar-row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        // return all the rows
        return <div className="body">{rows}</div>;
    }
    // when a date is clicked it's state is set to selected
    onDateClick = day => {
        this.setState({
            selectedDate: day
        });
    }

    // goes to next month
    nextMonth = () => {
        this.setState({
            currentMonth:addMonths(this.state.currentMonth, 1)
        });
    }

    // goes to prev month
    prevMonth = () => {
        this.setState({
            currentMonth:subMonths(this.state.currentMonth, 1)
        });
    }

    // when add event button is pushed Create event window is shown/hidden
    onAddEvent()
    {
        if(this.state.hideCreateEvent)
        {
            this.setState({hideCreateEvent: false});
        }
        else
        {
            this.setState({hideCreateEvent:true});
        }
    }

    render() {
        return (
            <div className=" row container justify-content-center">
                <div className={"calendar"}>
                    {this.renderCalendarHeader()}
                    {this.renderCalendarCells()}
                </div>
                <div className={"row justify-content-start calendar-action-div"}>
                    <div className={"col-md-auto"}>
                        <input className={"calendar-event-btn"} type={"image"} src={event} onClick={this.onAddEvent}/>
                    </div>
                    <div className={"col-md-auto"}>
                        <div className={"row"}>
                            <label>Today's events</label>
                        </div>
                        <div className={"row"}>
                            <label>Most important events of today</label>
                        </div>
                    </div>
                </div>
                {!this.state.hideCreateEvent
                    ?
                    <CreateEvent/>
                    :
                    <div></div>
                }
            </div>
        );
    }
}
