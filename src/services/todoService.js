import axios from "axios";

const BASEURL = 'http://localhost:4000/todos';

const wait = (time) => new Promise(res => {
    setTimeout(res, time);
});


export async function GetTodos() {
    await wait(3000);
    const res = await axios.get(BASEURL);
    return res.data;
}

export async function GetTodoById(id) {
    const res = await axios.get(BASEURL + '/' + id);
    return res.data;
}

export async function AddTodo(todo) {
    const res = await axios.post(BASEURL, todo);
    return res.data;
}

export async function EditTodo(todo) {
    const res = await axios.put(BASEURL + '/' + todo.id, todo);
    return res.data;
}

export async function DeleteTodo(id) {
    await axios.delete(BASEURL + '/' + todo.id, todo);
}
