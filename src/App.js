import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import { Router, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages'

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Route path='/' element={<HomePage />} />
      </Router>
    </>
  )
}

export default App
