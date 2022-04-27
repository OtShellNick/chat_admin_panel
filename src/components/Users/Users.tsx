import React from 'react';
import Table from "sbx-react-table";
import {getUsers} from "@actions/users";
import {Header} from "@components/Header/Header";

export const Users = () => {

    return <div>
        <Header/>
        <Table
            name="fiatDeposits"
            className="table-striped"
            action={getUsers}
            structure={{
                id: {
                    name: 'ID',
                    filter: {
                        type: 'search'
                    },
                },
                username: {
                    name: 'Username',
                    filter: {
                        type: 'search'
                    },
                },
                email: {
                    name: 'email',
                    filter: {
                        type: 'search'
                    },
                },
                gender: {
                    name: 'Gender',
                    filter: {
                        type: 'search'
                    }
                },
                status: {
                    name: 'Status',
                    filter: {
                        type: 'search'
                    }
                },
                role: {
                    name: 'role',
                    filter: {
                        type: 'search'
                    },
                },
                actions: {
                    name: 'Actions',
                    val: (row: object) => console.log(row)
                }
            }}
        />
    </div>
}