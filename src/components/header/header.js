import React from "react";
import "./header.css"
import Drawer from "react-modern-drawer";
import "../../bootstrap/css/bootstrap.min.css";
import "../../../node_modules/react-modern-drawer/dist/index.css";

//imported images
import signup from "../../icons/signup.png";
import login from "../../icons/login.png";
import logo from "../../icons/logo.png";
import profile from "../../icons/profile.png";
import menu from "../../icons/menu.png";
import M from "../../icons/M.png";
import E from "../../icons/E.png";
import N from "../../icons/N.png";
import U from "../../icons/U.png";
import calendar from "../../icons/calendar.png";
import contacts from "../../icons/contacts.png";
import wishList from "../../icons/wish-list.png";
import TODO from "../../icons/to-do.png";
import docs from "../../icons/document.png";
import gallery from "../../icons/gallery.png";
import finances from "../../icons/finances.png";
import kidsSchedule from "../../icons/kidsScheduel.png";
import shopping from "../../icons/shopping.png";
import chat from "../../icons/chat.png";
import {Link} from "react-router-dom";

export class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            drawerState: false
        };
        this.onHandleDrawerOpen=this.onHandleDrawerOpen.bind(this);
    }
    onHandleDrawerOpen()
    {
        this.setState(
            {drawer: !this.state.drawer}
        )
    }
    render() {
        return (
            <nav className={"navbar navbar-dark shadow-lg"} style={{backgroundColor: "powderblue"}}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-md-auto"}>
                            <Link to={"/home"}>
                                <img src={logo}/>
                            </Link>
                        </div>
                        <div className={"col-md-auto header-text"}>
                            <strong>
                                Family Organizer
                            </strong>
                        </div>
                        <div className={"col-md-auto header-icon-login"}>
                            <Link to={"/login"}>
                                <img src={login}/>
                            </Link>
                            <Link to={"/signup"}>
                                <img src={signup}/>
                            </Link>
                            <Link to={"/profile"}>
                                <img src={profile}/>
                            </Link>
                                <Link onClick={this.onHandleDrawerOpen}>
                                    <img className={"header-menu-img"} src={menu}/>
                                </Link>
                                <Drawer open={this.state.drawer} onClose={this.onHandleDrawerOpen} direction={"right"} size={"300px"}>
                                    <div className={"py-5 row container"}
                                         style={{backgroundColor: "powderblue", marginLeft: "0px", marginTop: "7px"}}>
                                        <div className={"row header-logo justify-content-center"}>
                                            <div className={"col-md-auto"}>
                                                <img src={M}/>
                                                <img src={E}/>
                                                <img src={N}/>
                                                <img src={U}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"py-4 container header-menu-div"}>
                                        <div className={"py-2 row"}>
                                            <div className={"col-md-auto"}>
                                                <img src={calendar} style={{width: "30px", height: "30px"}}/>
                                            </div>
                                            <div className={"col-md-auto header-menu-text"}>
                                                <Link style={{ textDecoration: 'none' }} to={"/calendar"}>
                                                    <strong style={{color: "black"}}>CALENDAR</strong>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={"py-2 row"}>
                                            <div className={"col-md-auto"}>
                                                <img src={TODO} style={{width: "30px", height: "30px"}}/>
                                            </div>
                                            <div className={"col-md-auto header-menu-text"}>
                                                <Link style={{ textDecoration: 'none' }} to={"/todoList"}>
                                                    <strong style={{color: "black"}}>TO-DO LIST</strong>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={"py-2 row"}>
                                            <div className={"col-md-auto"}>
                                                <img src={finances} style={{width: "30px", height: "30px"}}/>
                                            </div>
                                            <div className={"col-md-auto header-menu-text"}>
                                                <Link style={{ textDecoration: 'none' }}  to={"/budget"}>
                                                    <strong style={{color: "black"}}>BUDGET</strong>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={"py-2 row"}>
                                            <div className={"col-md-auto"}>
                                                <img src={shopping} style={{width: "30px", height: "30px"}}/>
                                            </div>
                                            <div className={"col-md-auto header-menu-text"}>
                                                <Link style={{ textDecoration: 'none' }} to={"/shoppingList"}>
                                                    <strong style={{color: "black"}}>SHOPPING LIST</strong>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={"py-2 row"}>
                                            <div className={"col-md-auto"}>
                                                <img src={wishList} style={{width: "30px", height: "30px"}}/>
                                            </div>
                                            <div className={"col-md-auto header-menu-text"}>
                                                <Link style={{ textDecoration: 'none' }}>
                                                    <strong style={{color: "black"}}>WISH-LIST</strong>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={"py-2 row"}>
                                            <div className={"col-md-auto"}>
                                                <img src={docs} style={{width: "30px", height: "30px"}}/>
                                            </div>
                                            <div className={"col-md-auto header-menu-text"}>
                                                <Link style={{ textDecoration: 'none' }}>
                                                    <strong style={{color: "black"}}>DOCUMENTS</strong>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={"py-2 row"}>
                                            <div className={"col-md-auto"}>
                                                <img src={gallery} style={{width: "30px", height: "30px"}}/>
                                            </div>
                                            <div className={"col-md-auto header-menu-text"}>
                                                <Link style={{ textDecoration: 'none' }}>
                                                    <strong style={{color: "black"}}>GALLERY</strong>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={"py-2 row"}>
                                            <div className={"col-md-auto"}>
                                                <img src={contacts} style={{width: "30px", height: "30px"}}/>
                                            </div>
                                            <div className={"col-md-auto header-menu-text"}>
                                                <Link style={{ textDecoration: 'none' }}>
                                                    <strong style={{color: "black"}}>CONTACTS</strong>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={"py-2 row"}>
                                            <div className={"col-md-auto"}>
                                                <img src={kidsSchedule} style={{width: "30px", height: "30px"}}/>
                                            </div>
                                            <div className={"col-md-auto header-menu-text"}>
                                                <Link style={{ textDecoration: 'none' }} to={"/home"}>
                                                    <strong style={{color: "black"}}>KID SCHEDULE</strong>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={"py-2 row justify-content-center"}>
                                            <div className={"col-md-auto"}>
                                                <img src={chat} style={{width: "60px", height: "60px"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </Drawer>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}