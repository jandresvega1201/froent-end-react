import React from 'react';
import '../styles/ListItem.css';
import iconDelete from '../img/icon-delete.svg';
const ListItem = ({image, price, emprese}) => {
    return (
        <div className="div-producto">
            <div>
                <img className="img-producto" src={image} alt="img-producto" />
            </div>
            <div className="div-description">
                <p className="description">{emprese}</p>
                <div className="div-price-qt">
                    <p>$<span>{price}</span></p>
                    <p>x <span>1</span></p>
                    <p className="price-total">$<span>375.00</span></p>
                </div>
            </div>
            <div>
                <img className="icon-delete" src={iconDelete} alt="" />
            </div>
        </div>
        // <div className="list-item-cart">
        //     <img src={image} alt="imagen" />
        //     <span>{price}</span>
        //     <p>{emprese}</p>
        // </div>
    );
};

export default ListItem;
