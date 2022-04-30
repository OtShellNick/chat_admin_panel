import React from 'react';

import './Header.scss';
import {logout} from "@actions/users";

export const Header = () => {

    return <header>
        <button onClick={() => logout()}>Logout</button>
    </header>
}