import { useContext, createContext } from "react";

export const ListContext = createContext({
    lists: [
        {
            name: "",
            id: ""
        }
    ],
    addList: (listName) => { },
    deleteList: (id) => { },
    editList: (id, listName) => { }
});

export const ListProvider = ListContext.Provider;

export default function useList() {
    return useContext(ListContext);
}