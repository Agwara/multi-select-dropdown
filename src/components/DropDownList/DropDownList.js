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

    // SHOW THE DROP DONW IF "props.showDropDown" IS TRUE
    if (props.showDropDown) {
        return (
            <ul className="drop-down-list">
                {
                    props.filteredItems.map((name, key) => {
                        return <ListItem name={name} key={key} onClickListener={onClickListener} />
                    })
                }
            </ul>
        )
    } else {
        return <div></div>
    }
}

export default DropDownList;