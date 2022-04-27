import {Server} from "@helpers/server";

export const getUsers = () => {
    return Server('get', 'users/all')
        .then((resp: {users: Array<object>, status: number}) => {
            return {rows: resp.users, count: resp.users.length};
        });
}