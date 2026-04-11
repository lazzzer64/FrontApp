import TodoList from "../TodoList.tsx";
import todos from "../todos.tsx";
import TextField from "./PastebinApp/TextField.tsx";

export function Main() {
    return (
        <main>
            {/*<TodoList list={todos}/>*/}

            <TextField
                label="Имя"
                // value={name}
                // onChange={setName}
                placeholder="Введите ваше имя"
            />

        </main>
    )
}