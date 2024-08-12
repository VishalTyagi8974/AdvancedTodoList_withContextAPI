import { useState } from "react"
import useList from "../Contexts/ListContext";

export default function AddListForm() {
    const [todoList, setTodoList] = useState("");
    const { addList } = useList();

    function handleSubmit(e) {
        e.preventDefault();

        if (todoList) {
            addList(todoList);
            setTodoList("");
        }

    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            < div className="modal-dialog modal-dialog-centered" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Create TodoList</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setTodoList("")} aria-label="Close"></button>
                    </div>
                    <form action="#" onSubmit={(e) => handleSubmit(e)}>
                        <div className="modal-body">
                            <input className="form-control" type="text" value={todoList} onChange={(e) => setTodoList(e.target.value)} name="" placeholder="Name the TodoList" id="" />

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setTodoList("")}>Close</button>
                            <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Create</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}