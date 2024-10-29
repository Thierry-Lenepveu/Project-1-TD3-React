import { ToDoList, ToDoListProp } from './ToDoList';
import { AddIds, AddIdToTask, InitialList } from './InitialList';


function AddIdsToTaskInList(list: ToDoListProp[]) {
    for (const item of list) {
        for (const task of item.elements) {
            AddIdToTask(task);
        }
    }
}
 
function Main() {
    AddIds(InitialList)
    AddIdsToTaskInList(InitialList)

    return (
        <>
            <main>
                <h2>Notes</h2>
                <section className="notes">
                {
                    InitialList.map(
                        (item: ToDoListProp) => {
                            return (
                            <ToDoList
                                key={item.idList}
                                idList={item.idList}
                                title={item.title}
                                category={item.category}
                                elements={item.elements} />
                            )
                        }
                    )
                }
                </section>
            </main>
            <main>
                <h2>Favorites</h2>
                <section className="notes">
                </section>
            </main>
        </>
    );
}

export default Main;