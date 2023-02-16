import React from 'react';
import {WithStorageAlert} from "./WithStorageAlert";

const ChangeAlert = ({show, toggleShow}) => {

    if (show){
        return (
            <div>
                <p>Hubu Cambios</p>
                <button
                    onClick={() => toggleShow(false)}
                >Volver a cargar la informacion</button>
            </div>
        )
    }else {
        return null
    }
};

const changeAlertStorageListener = WithStorageAlert(ChangeAlert)

export {changeAlertStorageListener};