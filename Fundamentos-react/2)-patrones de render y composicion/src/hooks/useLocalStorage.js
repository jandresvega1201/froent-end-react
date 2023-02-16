import React from "react";

export function useLocalStorage(itemName, initialValue) {

    const [sincronizeItem, setSincronizeItem] = React.useState(true)
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
                setSincronizeItem(true)
            }catch (e) {
                setError(e);
            }
        },2000)
    }, [sincronizeItem])

    const saveItem = (newTodos) => {
        try {
            const stringifyTodos = JSON.stringify(newTodos);
            localStorage.setItem(itemName, stringifyTodos);
            setItem(newTodos)
        }catch (e) {
            setError(e)
        }
    }

    const sincronized = () => {
        setLoading(true)
        setSincronizeItem(false)
    }

    return {
        item,
        saveItem,
        loading,
        error,
        sincronized
    }
}