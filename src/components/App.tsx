import React, {useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import * as CookieHelper from '../helpers/cookie';
import Table from 'sbx-react-table';
import {getUsers} from "../../actions/users";
import {Users} from "./Users/Users";
import {Login} from "./Login/Login";

import './App.scss';

export const App = () => {

    return <div className="app">
        <Routes>
            <Route path="/" element={<Users />} />
            <Route path="login" element={<Login />} />
        </Routes>
    </div>
}