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

type TResponse = TSuccessResponse

export const login = (data: TLogin) => {
    Server('post', 'users/login', data)
        .then((resp: TResponse) => {
            if (resp.status === 200) {
                CookieHelper.set('chat_session_id', resp.chat_session_id);
                location.replace('/');
            }
        })
}