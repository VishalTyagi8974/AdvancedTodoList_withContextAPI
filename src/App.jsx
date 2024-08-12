import { useState, useEffect } from 'react'
import './App.css';
import { ListProvider } from './Contexts/ListContext';
import { v4 as uuid } from "uuid";
import Navbar from './Components/Navbar';
import ListOffCanvas from './Components/ListOffCanvas';
import AddListForm from './Components/AddListForm';
import Todo from './Components/Todo';



function App() {
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);
  const [selectedListName, setSelectedListName] = useState("");

  useEffect(() => {
    const lists = JSON.parse(localStorage.getItem("lists"));
    if (lists && lists.length) {
      setLists(lists);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));

  }, [lists]);

  function addList(listName) {
    const newId = uuid()
    setLists([...lists, { name: listName, id: newId }])
    setSelectedList(newId)
    setSelectedListName(listName)
  }

  function deleteList(id) {
    setLists(lists.filter((list) => id !== list.id));
  }

  function editList(id, newName) {
    setLists(lists.map((list) => {
      if (id === list.id) {
        return { ...list, name: newName };
      }
      else {
        return list
      }
    }));
  }

  return (
    <>
      <ListProvider value={{ lists, setLists, addList, editList, deleteList, selectedList, setSelectedList, setSelectedListName, selectedListName }}>
        <Navbar />
        <ListOffCanvas />
        <AddListForm />
        {selectedList ? <Todo /> : <h1 className='text-center text-light m-5'>Welcome to Todo List App</h1>}
      </ListProvider>
    </>
  )
}

export default App
