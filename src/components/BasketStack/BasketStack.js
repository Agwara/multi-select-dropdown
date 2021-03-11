import React from "react";

import "./BasketStack.css"

const BasketStack = (props) => {

    return (
        <div className="basket-stack">
            <h1>BasketStack</h1>

            <div className="basket-container">
                {
                    props.basketItems.map((item, key) => {
                        return (
                            <div className={`basket-${item}`} key={key}>{item}</div>
                        )
                    }).reverse()
                }
            </div>
        </div>
    )
}

export default BasketStack;
