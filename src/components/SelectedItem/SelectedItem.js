import React from "react"

import "./SelectedItem.css"

const SelectedItem = (props) => {
    const removeSelectedItem = () => {
        props.removeSelectedItem(props.name)
    }

    return (
        <div className="selected-item" onClick={removeSelectedItem}>
            <p className="item-name">{props.name}</p><p className="remove-sign">&times;</p>
        </div>
    )

}

export default SelectedItem;