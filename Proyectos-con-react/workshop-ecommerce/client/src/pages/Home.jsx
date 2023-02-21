import React from 'react';
import '../styles/Home.css';
import {StoreContext} from "../TodoContext";

import Card from "../components/Card";
const Home =  () => {
    const {store} = React.useContext(StoreContext);
    const {products} = store
    return (
        <div className="container-main">
            <div className="container-cards">
                <h1 className="h1-colletion">Collection</h1>
                {
                    products.map(card => (
                        <Card
                            id={card.id}
                            key={card.id}
                            image={card.img1}
                            empresa={card.empresa}
                            modelo={card.modelo}
                            precio={card.precio}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Home;