import React from 'react';
import { Routes, Route } from "react-router-dom";
import {Users} from "./Users/Users";
import {Login} from "./Login/Login";
import {Layout} from "../layout/Layout";

import './App.scss';

export const App = () => {

    return <div className="app">
        <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<Users/>}/>
            </Route>
            <Route path="login" element={<Login/>} />
        </Routes>
    </div>
}