import { useState, useEffect } from 'react';
import { v4 as uuid } from "uuid";
import { TodoProvider } from '../Contexts/TodoContext';
import TodoAddForm from './TodoAddForm';
import TodoItem from './TodoItem';
import useList from '../Contexts/ListContext';

function Todo() {
    const [todos, setTodos] = useState([]);
    const { selectedList, selectedListName } = useList();
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        if (selectedList) {
            const storedTodos = JSON.parse(localStorage.getItem(selectedList));
            console.log(selectedList);
            console.log(storedTodos);
            if (storedTodos && storedTodos.length) {
                setTodos(storedTodos);
            } else {
                setTodos([]);
            }
        }
        setInitialLoad(false);
    }, [selectedList]);

    useEffect(() => {
        if (!initialLoad && selectedList) {
            localStorage.setItem(selectedList, JSON.stringify(todos));
        }
    }, [todos, initialLoad]);

    function addTodo(todo) {
        setTodos([...todos, { id: uuid(), isCompleted: false, todo }]);
    }

    function deleteTodo(id) {
        setTodos(todos.filter((todo) => id !== todo.id));
    }

    function editTodo(id, newTodo) {
        setTodos(todos.map((todo) => {
            if (id === todo.id) {
                return { ...todo, todo: newTodo };
            } else {
                return todo;
            }
        }));
    }

    function toggleComplete(id) {
        setTodos(todos.map((todo) => {
            if (id === todo.id) {
                return { ...todo, isCompleted: !todo.isCompleted };
            } else {
                return todo;
            }
        }));
    }

    return (
        <>
            <h1 className='text-light m-3'>{selectedListName.toUpperCase()} Todo List</h1>
            <TodoProvider value={{ addTodo, deleteTodo, editTodo, toggleComplete }}>
                <TodoAddForm />
                {todos.map(todo => {
                    return <TodoItem key={todo.id} todo={todo} />
                })}
            </TodoProvider>
        </>
    );
}

export default Todo;
