import { useEffect, useState } from "react";
import { GetTodos } from "../services/todoService";

export default function TodoCount() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        GetTodos().then(todos => {
            setCount(todos.filter(t => t.done).length);
        });
    }, []);

    return <h1>{count}</h1>
}