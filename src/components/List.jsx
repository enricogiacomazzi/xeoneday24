
import { EditTodo, GetTodos } from "../services/todoService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";



export default function List() {
    const qc = useQueryClient();
    const {data: todos, isPending, isError } = useQuery({queryKey: ['todos'], queryFn: GetTodos});
    const {mutate} = useMutation({
        mutationFn: (t) => EditTodo({...t, done: !t.done}),
        onSuccess: () => {
            qc.invalidateQueries({queryKey: ['todos']});
        }
    });

    if(isPending) {
        return <h3>waiting...</h3>
    }

    return (
        <ul>
            {todos.map(t => <ListItem key={t.id} todo={t} toggle={() => mutate(t)}/>)}
        </ul>
    )
}

function ListItem({todo, toggle}) {
    return (
        <li className={todo.done ? 'done' : ''} onClick={(toggle)}>{todo.text}</li>
    )
}