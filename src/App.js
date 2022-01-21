import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import HomePage from './pages'
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
