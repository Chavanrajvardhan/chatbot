import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,Navigate } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Chatbot from './components/Chatbot/Chatbot.jsx'
import Signup from './components/Signup/Signup.jsx'



const user = localStorage.getItem("accessToken");

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route>
     <Route path='/' element = {<Login/>} >
     
      </Route>
     <Route path='/signup' element = {<Signup/>} />
       <Route path='/home' element = {<Home/>} />
      <Route path='/chatbot' element = {<Chatbot/>} />
     
    </Route>
  )
)






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)

