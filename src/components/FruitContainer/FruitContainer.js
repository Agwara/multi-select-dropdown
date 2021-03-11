import React from "react";

import "./FruitContainer.css";

const FruitContainer = (props) => {

    const addFruit = () => {
        props.onAddFruit()
    }

    const removeFruit = () => {
        props.onRemoveFruit()
    }

    return (
        <div className={`fruit-stack ${props.fruitName}`}>
            <p className="fruit-stack--item-name">{props.fruitName}</p>

            <div className="add-fruit" onClick={addFruit}>
                <p>Add {props.fruitName} To Basket</p><span className="action-sign">&#x2B;</span>
            </div>    

            <div className="add-fruit" onClick={removeFruit}>
                <p onClick={removeFruit}>Remove {props.fruitName}  From Basket</p>
                <span className="action-sign--minus">&#x2212;</span>
            </div> 

        
            <p className="fruit-number">{props.fruitNumber}</p>
        </div>
    )
}

export default FruitContainer;