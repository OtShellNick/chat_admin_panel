import axios from "axios";
import * as CookieHelper from "./cookie";

const server: string = 'http://localhost:5402/api/';
const Authorization: string = CookieHelper.get('chat_session_id') || '';
axios.defaults.headers.common['Authorization'] = Authorization

export const Server: (method: 'get'|'post'|'put'|'delete', url: string, data?: any) => Promise<any> = (method, url, data) => {
    data = method === 'get' ? {params: new URLSearchParams(data)} : data
    return axios[method](`${server}${url}`, data)
        .then(resp => {
            const {data} = resp;

            if(data.status === 401) {
                CookieHelper.del('chat_session_id');
                return location.replace('/login');
            }

            if(resp.data.status) return {...resp.data};

            return resp.data;
        });
}