import {useState} from "react";
import {CondType, todolistType} from "../App";
import {todolistId1, todolistId2} from "../id-utils";
import {v1} from "uuid";

export function useTodolists(
    onAddTodolist: (newTodolistId: string) => void,
    onRemoveTodolist: (newTodolistId: string) => void
) {

    // const {
    //     allTtasks,
    //     setAllTasks,
    //     removeTask,
    //     addTask,
    //     changeTaskStatus,
    //     changeTaskTitle
    // }  = useTasks()

    const [todolists, setTodolists] =
        useState<Array<todolistType>>(
            [
                {id: todolistId1, todolistTitle: "What to learn?", filterCond: "All"},
                {id: todolistId2, todolistTitle: "What to buy?", filterCond: "All"}
            ]
        )

    const addTodolist = (title: string) => {
        let newTodolistId = v1()
        let newTodolist: todolistType = {id: newTodolistId, todolistTitle: title, filterCond: "All"}
        setTodolists([...todolists, newTodolist])

        // setAllTasks({...allTtasks, [newTodolistId]: []})
        onAddTodolist(newTodolistId)
    }
    const removeTodolist = (todolistId: string) => {

        let todolistsUpdated = todolists.filter(el => el.id !== todolistId)

        setTodolists(todolistsUpdated)

        // delete allTtasks[todolistId]
        // setAllTasks({...allTtasks})
        onRemoveTodolist(todolistId)

    }
    const changeTodolistTitle = (todolistId: string, changedTodolistTitle: string) => {
        let todlolistUpdated = todolists.find(el => el.id === todolistId)

        if (todlolistUpdated) {
            todlolistUpdated.todolistTitle = changedTodolistTitle
            setTodolists([...todolists])
        }
    }
    const changeFilterCond = (cond: CondType, todolistId: string) => {
        let todolist =
            todolists.find(el => el.id === todolistId)
        if (todolist) {
            todolist.filterCond = cond
            setTodolists([...todolists])
        }
    }

    return {
        todolists,
        addTodolist,
        removeTodolist,
        changeTodolistTitle,
        changeFilterCond
    }
}