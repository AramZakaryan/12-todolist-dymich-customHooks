import React, {useState} from "react";
import {Button, IconButton, TextField} from "@mui/material";
import {AddCircleOutline, ControlPoint, Delete} from "@mui/icons-material";
import {useAddItemForm} from "./hooks/useAddItemForm";

export type AddItemFormProps = {
    addItem: (newTaskTitle: string) => void
}
export const AddItemForm = React.memo((props: AddItemFormProps) => {

    const {
        inpValue,
        // setInpValue,
        error,
        // setError,
        inpOnChangeHandler,
        enterInpOnKeyDownHandler,
        AddBtnOnClickHandler
    } = useAddItemForm(props.addItem)

    return (<div>
        <TextField variant={"outlined"}
                   label={"Type Value"}
                   value={inpValue}
                   onChange={inpOnChangeHandler}
                   onKeyDown={enterInpOnKeyDownHandler}
                   className={error ? "error" : ""}
                   error={!!error}
                   helperText={error}
        />
        <IconButton
            color={"primary"}
            onClick={() => AddBtnOnClickHandler()}
        >
            <ControlPoint/>
        </IconButton>
    </div>)
})