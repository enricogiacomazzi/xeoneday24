import { useQuery } from "@tanstack/react-query";

export default function TodoCount() {
    const {data: todos, isPending} = useQuery({queryKey: ['todos']});


    const count = () => {
        if(isPending) {
            return 0;
        }

        return todos.filter(t => t.done).length;
    }

    return <h1>{count()}</h1>
}