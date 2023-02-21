import React from 'react';
import '../styles/DetailProduct.css';
import {StoreContext} from "../TodoContext";

export const DetailProduct = () => {
    const {store, dispatch, conter, setConter} = React.useContext(StoreContext);
    const {detailProduct} = store


    const addCartShopping = () => {
        dispatch({
            type: 'ADD_CART_SHOPPING',
            payload: detailProduct[0]
        })
    }
    // const [conter, setConter] = React.useState(1);

    return (
        <div className="container-detail">
            <div className="imgContainer">
                <img className="imgPrincipal" src={detailProduct[0].img1} alt="img1" />
                <div className="imgMosaico">
                    <img className="img_mini" src={detailProduct[0].img2} alt="" />
                    <img className="img_mini" src={detailProduct[0].img3} alt="" />
                    <img className="img_mini" src={detailProduct[0].img4} alt="" />
                    <img className="img_mini" src={detailProduct[0].img5} alt="" />
                </div>
            </div>
            <div className="contenedor">
                <h3 className="empresa">Empresa de zapatillas</h3>
                <h1 className="modelo">{`${detailProduct[0].empresa} ${detailProduct[0].modelo}`}</h1>
                <p className="descripcion">{detailProduct[0].descripcion}</p>
                <div className="div-moneda">
                    <h2 className="precio">$ <span>{detailProduct[0].precio}</span></h2>
                    <h3 className="descu">{detailProduct[0].decuento}</h3>
                    <p><span className="precioante">{detailProduct[0].precioant}</span></p>
                </div>
                <div className="cantidad">
                    <button onClick={() => (
                        conter > 0 ? setConter(conter - 1) : null
                    )} className="restar">-</button>
                    <span>{conter}</span>
                    <button onClick={() => setConter(conter + 1)} className="sumar">+</button>
                </div>
                <button onClick={addCartShopping} className="agregar">agregar al carrito</button>
            </div>
        </div>
    )
}


