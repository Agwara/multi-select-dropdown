import React from "react";

import "./InputSearchBox.css"
import SelectedItem from "../SelectedItem/SelectedItem"

const InputSearchBox = (props) => {
    
    const onSearchChange = (event) => {
        props.onSearchChange(event.target.value)
        props.showDropDownInput()
    }

    const showDropDownInput = () => {
        props.showDropDownInput()
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            props.onDone()
        }
    }

    const removeSelectedItem = (name) => {
        props.removeSelectedItem(name)
    }
 
    return (
        <div className="search-box-container">
            {/* <div className={props.selectedItems.length > 0 ? "selected-item-list" : "display-none"}>  
                {
                    props.selectedItems.map((name, key) => {
                        return <SelectedItem name={name} key={key} removeSelectedItem={removeSelectedItem} />
                    })
                }
            </div> */}

            {
                props.selectedItems.map((name, key) => {
                    return <SelectedItem name={name} key={key} removeSelectedItem={removeSelectedItem} />
                })
            }

            <input
                type="search"
                placeholder="Items"
                className="items__search"
                onChange={onSearchChange}
                onClick={showDropDownInput}
                onKeyPress={handleKeyPress}
                autoFocus={true}
            />
        </div>

    )
}

export default InputSearchBox;