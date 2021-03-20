import React from "react"

import "./SelectedItem.css"

/*
    THIS COMPONENT RENDERS SELECTED ITEMS 
*/    
const SelectedItem = (props) => {

    const removeSelectedItem = () => {
        props.removeSelectedItem(props.name)
        props.removeErrorMessage()
    }

    return (
        <div className="selected-item" onClick={removeSelectedItem}>
            <p className="item-name">{props.name}</p><p className="remove-sign">&times;</p>
        </div>
    )

}

export default SelectedItem;