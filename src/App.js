import "./App.css";
import React from "react";
import { Login } from "./components/register/login";
import { Root } from "./components/root";
import { Home } from "./components/home/home";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {SignUp} from "./components/register/sign-up";
import {Profile} from "./components/profile/profile";
import {TodoList} from "./components/to-do-list/to-do-list";
import {Calendar} from "./components/calendar/calendar";
import {ShoppingList} from "./components/shop/shopping-list";
import {Budget} from "./components/budget/budget";
import {FamilyIncome} from "./components/budget/family-income";
import {MemberIncome} from "./components/budget/member-income";
import {ReactSession} from "react-client-session";

function App() {
  const user = {
    username:"",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    phoneNumber: "",
    budget: ""
  };

  ReactSession.setStoreType("localStorage");
  ReactSession.set("user", user);
  return (
      <Route path={"/"}>
        <Root>
          <Switch>
            <Route path={"/home"}>
              <Home/>
            </Route>
            <Route path={"/login"}>
              <Login/>
            </Route>
            <Route path={"/signUp"}>
              <SignUp/>
            </Route>
            <Route path={"/profile"}>
              <Profile/>
            </Route>
            <Route path={"/todoList"}>
              <TodoList/>
            </Route>
            <Route path={"/calendar"}>
              <Calendar/>
            </Route>
            <Route path={"/shoppingList"}>
              <ShoppingList/>
            </Route>
            <Route path={"/budget"}>
              <Budget/>
            </Route>
            <Route path={"/familyIncome"}>
              <FamilyIncome/>
            </Route>
            <Route path={"/memberIncome"}>
              <MemberIncome/>
            </Route>
          </Switch>
        </Root>
      </Route>
  );
}

export default App;