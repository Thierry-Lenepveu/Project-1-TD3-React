import { ToDoList } from './ToDoList';
import { TaskProp } from './Task';
import { InitialList } from './InitialList';
import sha256 from 'crypto-js/sha256';

function hash(number: number) {
    const hash = sha256(number.toString())
    return hash;
}

function Main() {
    return (
        <main>
            <h2></h2>
            <section className="notes">
            {
                InitialList.map(
                    (item: { title: string; category: string; elements: TaskProp[]; }) => {
                        const keyName = hash(Math.floor(Math.random() * 1e9));
                        return (
                        <ToDoList
                            key={keyName}
                            title={item.title}
                            category={item.category}
                            elements={item.elements} />
                        )
                    }
                )
            }
            </section>
        </main>
    );
}

export default Main;