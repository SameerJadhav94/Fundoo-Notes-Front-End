/* eslint-disable no-useless-concat */
import axios from "axios";

const config = {
    headers: {
        authorization: "Bearer" + " " + localStorage.getItem("token"),
    },
};

export async function addNote(obj) {
    let response = await axios.post("http://localhost:3000/note", obj, config);
    return response;
}
export async function getNote() {
    let response = await axios.get("http://localhost:3000/note", config);
    return response;
}
export async function deleteNote(id) {
    let noteId = id;
    let response = await axios.delete(`http://localhost:3000/note/${noteId}`, config);
    return response;
}
export async function updateNote(id) {
    let noteId = id;
    let response = await axios.put(`http://localhost:3000/note/${noteId}`, config);
    return response;
}
