import useList from "../Contexts/ListContext"
import ListItem from "./ListItem";

export default function ListOffCanvas() {
    const { lists } = useList();

    return (
        <>

            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Lists</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>

                        {lists.map((list) => {
                            return <ListItem key={list.id} todos={list} />
                        })}

                    </div>

                </div>
            </div>



        </>
    )
}