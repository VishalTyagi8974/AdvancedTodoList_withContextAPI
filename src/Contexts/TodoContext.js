import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            todo: "",
            id: "",
            isCompleted: false
        }
    ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    editTodo: (id, todo) => { },
    toggleComplete: (id) => { }
})
export default function useTodo() {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;
