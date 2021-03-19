import React from "react"; 

import "./ListItem.css";

/*
    THIS COMPOENT RENDERS AN ITEM IN THE DROP DOWN LIST
*/    
const ListItem = (props) => {
    /*
        THIS FUNCTION IS FIRED WHEN THE DROP DOWN IS CLICKED
    */    
    const onClickListener = () => {
        props.onClickListener(props.name)
    }

    return (
        <div onClick={onClickListener} className="list-item__container">
            <p className="list-item__text">{props.name}</p>
        </div>
    )
}

export default ListItem;