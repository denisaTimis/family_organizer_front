import React from "react";
import "./to-do-list.css";
import "./to-do-list";
import edit from "../../icons/editTodo.png";

export class ToDoUpcoming extends React.Component {
    render() {
        return (
            <div className="container">
                <div className={"py-2 row"}>
                    <div className={"input-group"}>
                        <div className={"input-group-prepend upcoming-span-icons"}>
                                <span className={"input-group-text "}>
                                    <input type={"image"} className={"upcoming-icons"} src={edit}/>
                                </span>
                        </div>
                        <label className={"upcoming-events"}>Event</label>
                    </div>
                </div>
            </div>
        );
    }
}