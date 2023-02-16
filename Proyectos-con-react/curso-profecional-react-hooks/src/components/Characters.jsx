import React from 'react';
import Search from "./Search";
import {useGetData} from "../hooks/useGetData";

const initialState = {
    favorites: []
}


const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state
    }
}
const Characters = () => {

    // const [characters, setCharacters] = React.useState([]);
    const characters = useGetData()
    const [favorite, dispatch] =React.useReducer(favoriteReducer, initialState);

    const [search, setSearch] = React.useState('');

    const searchInput = React.useRef(null);


    const handleClick = favorite => {
        dispatch({type: 'ADD_FAVORITE', payload: favorite})
    }

    // React.useEffect(() => {
    //     fetch('https://rickandmortyapi.com/api/character')
    //         .then(response => response.json())
    //         .then(data => setCharacters(data.results));
    // },[]);

    const filterUser = React.useMemo(() =>
            characters.filter(user => {
                return user.name.toLowerCase().includes(search.toLowerCase())
            }),
        [characters, search]
    )

    // const handleSearch = () => {
    //     setSearch(searchInput.current.value);
    // }
    const handleSearch = React.useCallback(() => {
        setSearch(searchInput.current.value);
    }, [])

    return (
        <div className="Characters">
            {
                favorite.favorites.map(favorite => (
                    <li key={favorite.id}>{favorite.name}</li>
                ))
            }
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
            {filterUser.map(character => (
                <div className="item" key={character.id}>
                    <h1>{character.name}</h1>
                    <button type="button" onClick={() => handleClick(character)}>Agregar a favorito</button>
                </div>
            ))}
        </div>
    );
};

export default Characters;