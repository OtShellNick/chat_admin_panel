import React from 'react';

import './Layout.scss';
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";

export const Layout = () => {

    return <>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </>
}