import React from 'react';

function useGetData() {
    const [characters, setCharacters] = React.useState([]);

    React.useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacters(data.results));
    },[]);
    return characters
}
export {useGetData}