import React from 'react';
import { BrowserRouter as Route, Switch } from "react-router-dom";
// Add Components
import Home from "./pages/home.js"
import Account from './pages/account.js'
import Transaction from './pages/transaction.js'
import Card from './pages/card.js'
import Dashboard from './pages/dashboard.js'
import Login from './pages/login.js'

function App() {
  return (
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/account"  component={Account} />
    <Route path="/card"  component={Card} />
    <Route path="/transaction"  component={Transaction} />
    <Route path="/dashboard"  component={Dashboard} />
    <Route path="/login"  component={Login} />
  </Switch>
  )
}

export default App;
