/* eslint-disable no-useless-concat */
import axios from 'axios';

const config = {
    headers: {
        "authorization": "Bearer"+" "+localStorage.getItem("token")
    }
}

export function addNote(obj)
{
    let response=axios.post("http://localhost:3000/note", obj, config);
    return response;
}
export function getNote()
{
    let response=axios.get("http://localhost:3000/note", config);
    return response;
}