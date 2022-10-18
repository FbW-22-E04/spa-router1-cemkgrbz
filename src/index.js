import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Me from './components/Me'
import MainPage from './components/MainPage'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'



// ReactDOM.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header />
        {/* Routes is like a switch statement */}
        <Routes> 
            <Route path='/' element={ <App />}/>
            <Route path='/me' element={ <Me />}/>
            <Route path='/main' element={<MainPage/>} />
            <Route path='/hobbies' element={<Hobbies/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
       
    </BrowserRouter>
);