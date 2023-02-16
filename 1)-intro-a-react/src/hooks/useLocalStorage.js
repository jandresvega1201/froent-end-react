import React from "react";

export function useLocalStorage(itemName, initialValue) {

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue)

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem;

                if (!localStorageItem){
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = []
                }else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem)
                setLoading(false)
            }catch (e) {
                setError(e);
            }
        },2000)
    }, [])

    const saveItem = (newTodos) => {
        try {
            const stringifyTodos = JSON.stringify(newTodos);
            localStorage.setItem(itemName, stringifyTodos);
            setItem(newTodos)
        }catch (e) {
            setError(e)
        }
    }

    return {
        item,
        saveItem,
        loading,
        error
    }
}