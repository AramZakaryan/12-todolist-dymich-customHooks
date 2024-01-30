import {useState} from "react";
import {v1} from "uuid";
import {allTasksType} from "../App";
import {todolistId1, todolistId2} from "../id-utils";

export function useTasks() {

    const [allTtasks, setAllTasks] =
        useState<allTasksType>({
            [todolistId1]: [
                {id: v1(), title: "CSS & HTML", isDone: false},
                {id: v1(), title: "JS", isDone: false},
                {id: v1(), title: "React", isDone: false},
                {id: v1(), title: "Redux", isDone: false}
            ],
            [todolistId2]: [
                {id: v1(), title: "Book", isDone: false},
                {id: v1(), title: "Milk", isDone: true},
            ],
        })

    const removeTask = (removeTaskId: string, todolistId: string) => {

        let tasksFiltered =
            allTtasks[todolistId].filter(el =>
                el.id !== removeTaskId
            )

        setAllTasks({...allTtasks, [todolistId]: tasksFiltered})

    }

    const addTask = (newTaskTitle: string, todolistId: string) => {

        let newTask = {id: v1(), title: newTaskTitle, isDone: false}

        let TasksUpdated = [newTask, ...allTtasks[todolistId]]

        setAllTasks({...allTtasks, [todolistId]: TasksUpdated})
    }


    const changeTaskStatus = (changeTaskID: string, changeTaskIsDone: boolean, todolistId: string) => {

        let taskTobeChanged = allTtasks[todolistId].find(el => el.id === changeTaskID)

        if (taskTobeChanged) {
            taskTobeChanged.isDone = changeTaskIsDone
            setAllTasks({...allTtasks})
        }
    }


    const changeTaskTitle = (todolistId: string, taskId: string, changedTaskTitle: string) => {
        let taskToBeUptaded = allTtasks[todolistId].find(el => el.id === taskId)

        if (taskToBeUptaded) {
            taskToBeUptaded.title = changedTaskTitle
            setAllTasks({...allTtasks})
        }

    }


    return {
        allTtasks,
        setAllTasks,
        removeTask,
        addTask,
        changeTaskStatus,
        changeTaskTitle
    }
}