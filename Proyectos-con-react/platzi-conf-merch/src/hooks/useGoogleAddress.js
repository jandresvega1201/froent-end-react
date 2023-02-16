import React from "react";
import Axios from "axios";

const useGoogleAddress = (address) => {
    const [map, setMap] = React.useState({});

    const API = `https://www.mapquestapi.com/geocoding/v1/address?key=FKGCNUmfmh9mdIGQn5xzRGFGc4nLuQAi&location=${address},DC`;

    React.useEffect(() => {
        Axios(API).then((res) => {
            setMap(res.data.results[0].locations[3].latLng)
        })
    },[])

    return map
}

export {useGoogleAddress}