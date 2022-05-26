import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'


import MemeStartPage from "./screens/MemeStartPage";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import UsersScreen from "./screens/UsersScreen";
import TodoScreen from "./screens/TodoScreen";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MemeStartPage/>}/>
            <Route path="/users" element={<UsersScreen/>}/>
            <Route path="/todos" element={<TodoScreen/>}/>

        </Routes>
    </BrowserRouter>
);

