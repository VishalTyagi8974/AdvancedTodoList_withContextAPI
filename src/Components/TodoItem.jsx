import { useState } from "react";
import useTodo from "../Contexts/TodoContext"

export default function TodoItem({ todo }) {
    const { deleteTodo, editTodo, toggleComplete } = useTodo();
    const [currTodo, setCurrTodo] = useState(todo);
    const [isTodoEditable, setIsTodoEditable] = useState(false);

    const onChangeTodo = (e) => {
        setCurrTodo({ ...todo, todo: e.target.value })
    }
    function checkBoxClick() {
        toggleComplete(todo.id)
        setCurrTodo({ ...currTodo, isCompleted: !currTodo.isCompleted });
    }

    function handleSave() {
        editTodo(currTodo.id, currTodo.todo);
        setIsTodoEditable(false);
    }
    return (
        <div className="d-flex w-100 justify-content-center my-3">
            <div className="d-flex w-md-50 justify-content-center align-items-center rounded-2 p-2"
                style={{ backgroundColor: currTodo.isCompleted ? "#2ec4b6" : "#b5e2fa" }}>
                <input className="form-check-input mx-2"
                    type="checkbox"
                    value={todo.isCompleted}
                    onChange={checkBoxClick} name="" id=""
                    checked={currTodo.isCompleted}
                />

                <input className=" form-control border border-0 rounded todoItemInp" type="text"
                    onChange={(e) => onChangeTodo(e)}
                    value={currTodo.todo}
                    style={{ textDecoration: currTodo.isCompleted ? "1px solid line-through" : "none" }}
                    readOnly={!isTodoEditable}
                />

                <button
                    className="btn btn-info mx-2 rounded"
                    onClick={() => { setIsTodoEditable(!isTodoEditable) }}
                    disabled={currTodo.isCompleted ? true : false}
                    style={{ display: isTodoEditable ? "none" : "inline" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                    </svg>
                </button>

                <button
                    className="btn btn-success mx-2 rounded"
                    onClick={handleSave}
                    style={{ display: isTodoEditable ? "inline" : "none" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                </button>

                <button className="btn btn-danger rounded" onClick={() => deleteTodo(currTodo.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                </button>
            </div>
        </div >
    )
}