import { useState } from "react";
import useTodo from "../Contexts/TodoContext";

export default function TodoAddForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();
    function handleSubmit(e) {
        e.preventDefault();
        if (todo) {
            addTodo(todo);
            setTodo("");
        }

    }

    return (
        <div className="mx-0 mx-sm-5 m-5 d-flex justify-content-center" >
            <form action="" className="w-75 mx-0 mx-sm-50" onSubmit={(e) => handleSubmit(e)}>
                <div className="input-group">
                    <input className="form-control " type="text" name="" value={todo} onChange={(e) => setTodo(e.target.value)} id="" placeholder="Enter a Todo" />
                    <button className="btn btn-success ">ADD</button>
                </div>
            </form>
        </div>
    )
}