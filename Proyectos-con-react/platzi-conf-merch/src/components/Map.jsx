import React from 'react';
import {GoogleMap, LoadScript, MarkerF} from "@react-google-maps/api";

const API_KEY = 'AIzaSyCubAk_lsfZcEjWDF5qsWIdTESNHJeu4EQ'
function Map ({address}) {

    const mapStyles = {
        height: '58vh',
        width: '100%'
    }

    const center = {
        lat: address.lat,
        lng: address.lng
    }

    return (
        <LoadScript googleMapsApiKey={API_KEY}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={9}
                center={center}
            >
                <MarkerF position={center}/>
            </GoogleMap>
        </LoadScript>
    );
};

export {Map};