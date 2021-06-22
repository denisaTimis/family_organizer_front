import React from "react";
import "./to-do-list.css";
import "./to-do-list";
import edit from "../../icons/editTodo.png";

export class TodoListInput extends React.Component {
    render() {
        return (
            <div className="container">
                <div className={"row"}>
                    <div className={"col-md-auto input-group"}>
                        <div className={"input-group-prepend"}>
                                <span className={"input-group-text todo-span"}>
                                    <input className={"todo-radio"} type={"radio"}/>
                                </span>
                        </div>
                        <input type={"text"} className={"form-control todo-input"}/>
                        <div className={"input-group-append"}>
                                <span className={"input-group-text todo-span"}>
                                    < input type={"image"} className={"todo-btn"} src={edit}/>
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}