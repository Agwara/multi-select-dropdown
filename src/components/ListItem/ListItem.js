import React from "react"; 

import "./ListItem.css";

const ListItem = (props) => {

    const onClickListener = () => {
        props.onClickListener(props.name)
    }

    return (
        <div onClick={onClickListener} className="list-item__container">
            <span className="show-color"></span>
            <p className="list-item__text">{props.name}</p>
        </div>
    )
}

export default ListItem;