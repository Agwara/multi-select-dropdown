import React from "react"

import "./SelectedItem.css"

const SelectedItem = (props) => {
    const removeSelectedItem = () => {
        props.removeSelectedItem(props.name)
    }

    return (
        <div className="selected-item" onClick={removeSelectedItem}>
            {props.name}
        </div>
    )

}

export default SelectedItem;