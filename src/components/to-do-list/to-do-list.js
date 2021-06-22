import React from "react";
import {TodoListInput} from "./to-do-list-input";
import {ToDoUpcoming} from "./to-do-upcoming";
import "./to-do-list.css";
import add from "../../icons/addTodo.png";
import upcomingtodo from "../../icons/upcomingtodo.png";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";
import startOfDay from "date-fns/startOfDay";
import endOfDay from "date-fns/endOfDay";
import startOfHour from "date-fns/startOfHour";
import endOfHour from "date-fns/endOfHour";
import addHour from "date-fns/addHours";
import prevWeek from "../../icons/prevmonth.png"
import nextWeek from "../../icons/nextmonth.png"

export class TodoList extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            childrenToday: [],
            childrenTomorrow: [],
            childrenUpcoming: [],
            // calendarType: "Week",
            currentDay: new Date(),
            selectedDate: new Date()
        };
    }

    // render week calendar header
    renderHeader() {
        const dateFormat ='EEEE do';
        return (
            // create div to store prev/next week buttons and the current date
            <div className="row todo-calendar-header" style={{width:"525px"}}>
                <div className="col col-start">
                    <div onClick={this.prevDay}>
                        <img src={prevWeek}/>
                    </div>
                </div>
                <div className="col col-center">
                    <span>
                        {format(this.state.currentDay, dateFormat)}
                    </span>
                </div>
                <div className="col col-end">
                    <div onClick={this.nextDay}>
                        <img src={nextWeek}/>
                    </div>
                </div>
            </div>
        );
    }

    //render cells
    renderCells() {

        //get current date
        const { currentDay, selectedDate } = this.state;

        //get start/end of every week/day
        const dayStart =startOfDay(currentDay);
        const dayEnd = endOfDay(dayStart);
        const startHour = startOfHour(dayStart);
        const endHour = endOfHour(dayEnd);

        const hourFormat = "hh a";
        const rows = [];
        let hours = [];
        let hour = startHour;
        let formattedHour = "";

        // parse every hour of current day
        while (hour <= endHour) {
            for (let i = 0; i < 24; i++) {
                formattedHour=format(hour, hourFormat);
                const cloneHour = hour;
                //add hour div
                hours.push(
                    <div className={"row todo-cell"} style={{height:"50px"}}>
                        <span className="number">{formattedHour}</span>
                    </div>
                );
                hour = addHour(hour, 1);
            }
            // add all hours
            rows.push(
                <div className="todo-calendar-row" style={{width:"500px"}} key={hour}>
                    {hours}
                </div>
            );
            hours = [];
        }
        //return all rows
        return <div className="col-md-auto todo-calendar">{rows}</div>;
    }

    //goes to next day
    nextDay = () => {
        this.setState({
            currentDay:addDays(this.state.currentDay, 1)
        });
    }

    //goes to prev day
    prevDay = () => {
        this.setState({
            currentDay:subDays(this.state.currentDay, 1)
        });
    }

    //appends toDoItem to today section
    appendChildToday(){
        this.setState({
            childrenToday: [...this.state.childrenToday,
                <TodoListInput/>]});
    }
    //appends toDoItem to tomorrow section
    appendChildTomorrow(){
        this.setState({
            childrenTomorrow: [...this.state.childrenTomorrow,
                <TodoListInput/>]});
    }
    //appends toDoItem to upcoming section
    appendChildUpcoming(){
        this.setState({
            childrenUpcoming: [...this.state.childrenUpcoming,
                <ToDoUpcoming/>]});
    }

    render(){
        return(
            <div className={"container"}>
                <div className={"py-5 row justify-content-center todo-background"}>
                    {/*TODO_LIST*/}
                    <div className={"col-md-auto shadow-lg todo-main-cols"} style={{backgroundColor:"powderblue"}}>
                        {/*TODAY*/}
                        <div className={"py-2 row"}>
                            <div className={"col"}>
                                <strong>TODAY</strong>
                            </div>
                            <div className={"col"}>
                                <input type={"image"} src={add} className={"todo-main-addbtn"} onClick={() => this.appendChildToday()}/>
                            </div>
                        </div>
                        {this.state.childrenToday.map(child => child)}
                        {/*TOMORROW*/}
                        <div className={"py-2 row"}>
                            <div className={"col"}>
                                <strong>TOMORROW</strong>
                            </div>
                            <div className={"col"}>
                                <input type={"image"} src={add} className={"todo-main-addbtn"} onClick={() => this.appendChildTomorrow()}/>
                            </div>
                        </div>
                        {this.state.childrenTomorrow.map(child => child)}
                        {/*UPCOMING*/}
                        <div className={"py-2 row "}>
                            <div className={"col"}>
                                <strong>UPCOMING</strong>
                            </div>
                            <div className={"col"}>
                                <input type={"image"} src={upcomingtodo} className={"todo-main-addbtn"} onClick={() => this.appendChildUpcoming()}/>
                            </div>
                        </div>
                        {this.state.childrenUpcoming.map(child => child)}
                    </div>
                    {/*MINI_CALENDAR*/}
                    <div className={"col-md-auto shadow-lg todo-main-cols"} style={{backgroundColor:"white"}}>
                        {this.renderHeader()}
                        {this.renderCells()}
                    </div>
                </div>
            </div>

        );
    }
}
