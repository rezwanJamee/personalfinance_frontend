import React from 'react';
import Dashboard from '../Pages/Dashboard';
import Account from '../Pages/Account';

import Transaction from '../Pages/Transaction';
import Portfolio from '../Pages/Portfolio';
import Report from '../Pages/Report';
import Errorpage from '../Pages/Errorpage';

import {
    Switch,
    Route
  } from "react-router-dom";
import AddTransaction from '../Pages/AddTransaction';
import { AddAccount } from '../Pages/AddAccount';


const PageHolder = () => {
    return (
        <>
            <Switch>
                <Route exact path="/account" render={() => <Account /> } /> 
                <Route exact path="/transaction" render={() => <Transaction /> } /> 
                <Route exact path="/portfolio" render={() => <Portfolio /> } /> 
                <Route exact path="/Report" render={() => <Report /> } /> 

                <Route exact path="/add" render={() => <AddTransaction /> } /> 
                <Route exact path="/addaccount" render={() => <AddAccount /> } />

                <Route exact path="/" render={() => <Dashboard /> } />

                <Route exact path="/*" render={() => <Errorpage /> } /> 
            </Switch>
        </>
    )
}

export default PageHolder
