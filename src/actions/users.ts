import {Server} from "@helpers/server";
import * as CookieHelper from '@helpers/cookie';

type TLogin = {
    username: string;
    password: string;
}

type TSuccessResponse = {
    status: 200,
    chat_session_id: string;
}

type TResponse = TSuccessResponse;

export const login = (data: TLogin) => {
    Server('post', 'users/login', data)
        .then((resp: TResponse) => {
            if (resp.status === 200) {
                CookieHelper.set('chat_session_id', resp.chat_session_id);
                location.replace('/');
            }
        })
}

export const logout = () => {
    Server('get', 'users/logout')
        .then(() => {
            CookieHelper.del('chat_session_id');
            location.replace('/login');
        })
}

type TUser = {
    id: number;
    username: string;
    email: string;
    gender: string;
    status: string;
    role: string;
    avatar: File | null; //?
}

type TGetUsersSuccess = {
    status: 200,
    users: {
        rows: TUser[];
        count: number;
    }
}

export const getUsers = (query: any) => {
    console.log(query)
    return Server('get', 'users/all/crm', query)
        .then((resp: TGetUsersSuccess) => {
            return resp.users;
        })
}