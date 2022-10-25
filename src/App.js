import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Modal/Register/Dashboard';
import Login from './Modal/Register/Login';
import Register from './Modal/Register/Register'







function App() {
    return ( <
        BrowserRouter >
        <
        >
        <
        Routes >
        <
        Route exact path = { '/' }
        element = { < Dashboard / > } > < /Route>  <
        Route exact path = { '/login' }
        element = { < Login / > } > < /Route>  <
        Route exact path = { '/register' }
        element = { < Register / > } > < /Route>    < /
        Routes > <
        />  < /
        BrowserRouter >
    )
}

export default App;