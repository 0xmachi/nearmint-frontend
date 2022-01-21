import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import HomePage from './pages'
import Farming from './pages/farming';
import DepositTest from './pages/testDeposit'
import { Web3ContextProvider } from "./hooks/web3Context";

const App = () => {
  return (
    <Web3ContextProvider>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/farms">
            <Farming />
          </Route>
          <Route exact path="/test">
            <DepositTest />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </Router>
    </Web3ContextProvider>
  )
}

export default App
