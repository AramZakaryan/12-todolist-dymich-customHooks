import React, {useState} from "react";


export function useAddItemForm(addItem:(newTaskTitle: string) => void) {

    const [inpValue,
        setInpValue]
        = useState("")

    const [error,
        setError]
        = useState<string | null>(null)

    const inpOnChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setInpValue(ev.currentTarget.value)
        if (error) {
            setError(null)
        }
    }

    const enterInpOnKeyDownHandler = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.code === "Enter") {
            AddBtnOnClickHandler()
        }
    }

    const AddBtnOnClickHandler = () => {
        if (inpValue.trim()) {
            addItem(inpValue)
            setInpValue("")
        } else if (!error) {
            setError("Title is required!!!")
        }
    }

    return {
        inpValue,
        // setInpValue,
        error,
        // setError,
        inpOnChangeHandler,
        enterInpOnKeyDownHandler,
        AddBtnOnClickHandler
    }
}