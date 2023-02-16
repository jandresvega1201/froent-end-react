import React from 'react';
import './styles/App.css';
import Search from "./components/Search";
import {Col, Spin} from 'antd'
import PokemonList from "./components/PokemonList";
import logo from './statics/logo.svg';
import {getPokemons} from "./api";
// import {setPokemons as setPokemonsActions} from './redux/actions/actions';
import {getPokemonsWithDetails, setLoading} from './redux/actions/actions';
// import {connect, useDispatch, useSelector} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';
            //{pokemons, setPokemons}
function App() {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.get('pokemons')).toJS()
    const loading = useSelector(state => state.get('loading'))
    React.useEffect(() => {
        dispatch(setLoading(true))
        const fetchPokemons = async () => {
            const pokemones = await getPokemons()
            dispatch(getPokemonsWithDetails(pokemones));
            dispatch(setLoading(false))
        }

        fetchPokemons()
    },[])
  return (
    <div className="App">
        <Col span={4} offset={10}>
            <img src={logo} alt="Pokedux"/>
        </Col>
        <Col span={8} offset={8}>
            <Search />
        </Col>
        {
            loading ? <Col offset={12} >
                <Spin spinning size="large" />
            </Col>:<PokemonList pokemons={pokemons}/>
        }

    </div>
  );
}

// const mapStateToProps = (state => ({
//     pokemons: state.pokemons
// }))
// const mapDispatchToProps = (dispatch => ({
//     setPokemons:(value) => dispatch(setPokemonsActions(value))
// }))
// export default connect(mapStateToProps, mapDispatchToProps) (App);
export default App
