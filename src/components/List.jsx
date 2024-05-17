import { useEffect, useState } from "react"
import { EditTodo, GetTodos } from "../services/todoService";



export default function List() {
    const [todos, setTodos] = useState([]);
    const [waiting, setWaiting] = useState(false);

    const fetchData = async () => {
        setWaiting(true);
        const data = await GetTodos();
        setTodos(data);
        setWaiting(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const toggleTodo = async (todo) => {
        await EditTodo({...todo, done: !todo.done});
        await fetchData();
    }

    if(waiting) {
        return <h3>waiting...</h3>
    }

    return (
        <ul>
            {todos.map(t => <ListItem key={t.id} todo={t} toggle={() => toggleTodo(t)}/>)}
        </ul>
    )
}

function ListItem({todo, toggle}) {
    return (
        <li className={todo.done ? 'done' : ''} onClick={(toggle)}>{todo.text}</li>
    )
}