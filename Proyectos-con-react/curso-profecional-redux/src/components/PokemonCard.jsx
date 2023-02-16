import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import StartButton from "./StartButton";
import {useDispatch} from "react-redux";
import {setFavorites} from "../redux/actions/actions";

const PokemonCard = ({name, image, types, id}) => {

    const dispatch = useDispatch()
    const typeString = types.map(element => element.type.name).join(', ');

    const handleFavorite = () => {
        dispatch(setFavorites({pokemonId: id}))
    }

    return (
        <Card
            title={name}
            cover={<img src={image} alt={name} />}
            extra={<StartButton isFavorited={true} onclick={handleFavorite}/>}
        >
            <Meta description={typeString} />
        </Card>
    );
};

export default PokemonCard;