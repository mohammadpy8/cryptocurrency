import axios from "axios";

const app = axios.create({
    baseURL: "http://127.0.0.1:8000",
    withCredentials:true,
})

const http = {
    get: app.get,
    post : app.post,
    delete : app.delete,
    put: app.put,
    patch: app.patch,
};

export default http;