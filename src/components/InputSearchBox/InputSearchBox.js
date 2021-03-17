import React from "react";

import "./InputSearchBox.css"

const InputSearchBox = (props) => {
    
    const onSearchChange = (event) => {
        props.onSearchChange(event.target.value)
        props.showDropDownInput()
    }

    const showDropDownInput = () => {
        props.showDropDownInput()
    }
 
    return (
        <div className="search__container">
            <input
                type="search"
                placeholder="I'm looking for..."
                className="items__search"
                onChange={onSearchChange}
                onClick={showDropDownInput}
            />
        </div>

    )
}

export default InputSearchBox;