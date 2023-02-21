import '../styles/Card.css';
import React from "react";
import {Link} from "react-router-dom";
import {StoreContext} from "../TodoContext";

export default function Card({image, empresa, precio, modelo, id}) {

    const {store, dispatch} = React.useContext(StoreContext);
    const {copyProducts} = store
    const handleDetail = (id) => {
        const detailCard = copyProducts.filter(item => item.id === id);
        dispatch({
            type: 'DETAIL-PRODUCT',
            payload: detailCard
        })
    }

    return (
        <React.Fragment>
            <div className="div-product">
                <div className="div-img">
                    <img className="img-product" src={image} alt="" />
                </div>
                <div className="div-description">
                    <h4>{`${empresa} ${modelo}`}</h4>
                    <p>$ <span>{precio}</span></p>
                    <Link to="/detail">
                        <button onClick={() => handleDetail(id)} className="btn-detail">See Detail</button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}