import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import Chatbot from './components/Chatbot/Chatbot.jsx'


function App() {
  
  return (
    <>
     <Home/>
     <Chatbot/>
    </>
  )
}

export default App
