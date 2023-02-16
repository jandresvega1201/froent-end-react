import React from 'react';

const WithStorageAlert = (WrappedComponent) => {
    return function WrappedComponentStorageListener(props) {

        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1'){
                console.log("hubo cambios")
                setStorageChange(true);
            }
        })

        const toogleShow = () => {
            props.sincronized()
            setStorageChange(false)
        }

        return <WrappedComponent
            show={storageChange}
            toggleShow={toogleShow}
        />
    }
};

export {WithStorageAlert};