import { ToDoList, ToDoListProp } from './ToDoList';
import { TaskProp } from './Task';
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
                        (item: { id: string, title: string; category: string; elements: TaskProp[]; }) => {
                            return (
                            <ToDoList
                                key={item.id}
                                id={item.id}
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