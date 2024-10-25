import { RandomHashSHA256 } from "./CryptoTools";
import { TaskProp } from "./Task";
import { ToDoListProp } from "./ToDoList"

export const InitialList = [
    {
        id: "",
        title : "Course d'automne", 
        category : "article-color-1", // la catégorie correspond au nom de la class qui défini la couleur de fond de la liste.
        elements : [
            {
                id: "",
                checked : false, 
                name : "navet" 
            },
            {
                id: "",
                checked : false, 
                name : "carotte" 
            },
            {
                id: "",
                checked : false, 
                name : "poireau" 
            },
            {
                id: "",
                checked : false, 
                name : "patate" 
            },
            {
                id: "",
                checked : false, 
                name : "courge" 
            },
            {
                id: "",
                checked : false, 
                name : "potimarron" 
            },
            {
                id: "",
                checked : false, 
                name : "cepes" 
            },
            {
                id: "",
                checked : false, 
                name : "pommes" 
            },
            {
                id: "",
                checked : false, 
                name : "brocolis" 
            }
        ]
    },
    {
        id: "",
        title : "Livres à lire",
        category : "article-color-4",
        elements : [
             {
                id: "",
                checked : false, 
                name : "Autant en emporte le vent" 
            },
            {
                id: "",
                checked : false, 
                name : "Pokemon" 
            }
        ]
    },
    {
        id: "",
        title : "Séries à voir",
        category : "article-color-3",
        elements : [
             {
                id: "",
                checked : false, 
                name : "Les feux de l'amour" 
            },
            {
                id: "",
                checked : false, 
                name : "Plus belle la vie" 
            }
        ]
    },
]

export function AddIds(list: ToDoListProp[]) {
    for (const item of list) {
        AddId(item);
    }
}

export function AddId(item: ToDoListProp) {
    item.id = RandomHashSHA256();
}

export function AddIdsToTasks(tasks: TaskProp[]) {
    for (const item of tasks) {
        AddIdToTask(item);
    }
}

export function AddIdToTask(item: TaskProp) {
    item.id = RandomHashSHA256();
}
