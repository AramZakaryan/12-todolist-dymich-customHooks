import {useDispatch, useSelector} from "react-redux";
import {roofReducerType} from "../../state/store";
import {useCallback} from "react";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "../../state/tasksReduser";
import {addTodolistAC, changeFilterCondAC, changeTodolistTitleAC, remTodolistAC} from "../../state/todolistsReduser";
import {v1} from "uuid";
import {allTasksType, CondType, todolistType} from "../AppWithRedux";

export function useAppWithRedux () {

    const dispatch = useDispatch()

    const todolists = useSelector<roofReducerType, todolistType[]>(state => state.todolists)

    const allTtasks = useSelector<roofReducerType, allTasksType>(state => state.tasks)

    const removeTask = useCallback((removeTaskId: string, todolistId: string) =>
            dispatch(removeTaskAC(todolistId, removeTaskId)),
        [dispatch])


    const addTask = useCallback((newTaskTitle: string, todolistId: string) =>
            dispatch(addTaskAC(todolistId, newTaskTitle))
        , [dispatch])


    const changeTaskStatus = useCallback((changeTaskID: string, changeTaskIsDone: boolean, todolistId: string) =>
            dispatch(changeTaskStatusAC(todolistId, changeTaskID, changeTaskIsDone))
        , [dispatch])


    const changeTaskTitle = useCallback((todolistId: string, taskId: string, changedTaskTitle: string) =>
            dispatch(changeTaskTitleAC(todolistId, taskId, changedTaskTitle))
        , [dispatch])


    const changeFilterCond = useCallback((cond: CondType, todolistId: string) =>
            dispatch(changeFilterCondAC(todolistId, cond))
        , [dispatch])


    const addTodolist = useCallback((title: string) =>
            dispatch(addTodolistAC(title, v1()))
        , [dispatch])

    const removeTodolist = useCallback(function (todolistId: string) {
            dispatch(remTodolistAC(todolistId))
        }
        , [dispatch])


    const changeTodolistTitle = useCallback((todolistId: string, changedTodolistTitle: string) =>
            dispatch(changeTodolistTitleAC(todolistId, changedTodolistTitle))
        , [dispatch])


    return {
        todolists,
        allTtasks,
        removeTask,
        addTask,
        changeTaskStatus,
        changeTaskTitle,
        changeFilterCond,
        addTodolist,
        removeTodolist,
        changeTodolistTitle
    }
}