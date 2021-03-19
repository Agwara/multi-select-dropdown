import React from "react";

import "./DropDownList.css"
import ListItem from "../ListItem/ListItem";


/* 
    THIS COMPONENT RENDERS THE LIST OF FILTERED ITEMS
*/

const DropDownList = (props) => {

    const onClickListener = (name) => {
        props.onClickListener(name)
    }

    return (
        <div className="drop-down-list">
            <ul>
                {
                    props.filteredItems.map((name, key) => {
                        return <ListItem name={name} key={key} onClickListener={onClickListener} />
                    })
                }
            </ul>

        </div>

    )
}

export default DropDownList;