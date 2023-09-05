import axios from 'axios';

function Api(ctx = undefined) {
    const api = axios.create({
        baseURL: "http://localhost:3000"
    });

    return api;
}
export const api = Api();