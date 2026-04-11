import TodoList from "../TodoList.tsx";
import todos from "../todos.tsx";

export function Main() {
    return (
        <main>
            <TodoList list={todos}/>

        </main>
    )
}