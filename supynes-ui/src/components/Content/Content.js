import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ItemEntryList from "../../pages/ItemEntryList/ItemEntryList";
import ItemEntryForm from "../../pages/ItemEntryForm/ItemEntryForm";
import ItemEntryPage from "../../pages/ItemEntryPage/ItemEntryPage";
import ItemEntriesMap from "../../pages/ItemEntriesMap/ItemEntriesMap";
import Login from "../../pages/Login/Login";


export default () => (
    <Switch>
        <Redirect exact from="/" to="/itemEntries" />

        <Route path="/login">
            <Login/>
        </Route>

        <Route exact path="/itemEntries/itemEntry">
            <ItemEntryForm />
        </Route>

        <Route exact path="/itemEntries/:id">
            <ItemEntryPage/>
        </Route>

        <Route exact path="/itemEntries">
            <ItemEntryList />
        </Route>

        <Route exact path="/itemEntriesMap">
            <ItemEntriesMap/>
        </Route>

        <Route exact path="/itemEntryForm" >
            <ItemEntryForm />
        </Route>

        <Route exact path="/itemEntries/:id/edit">
            <ItemEntryForm />
        </Route>

        <Route>
            <h1>Puslapis nerastas!</h1>
        </Route>
    </Switch>
)
