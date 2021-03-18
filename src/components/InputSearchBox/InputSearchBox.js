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

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            props.onDone()
        }
    }
 
    return (
        <div className="search__container">
            <input
                type="search"
                placeholder="I'm looking for..."
                className="items__search"
                onChange={onSearchChange}
                onClick={showDropDownInput}
                onKeyPress={handleKeyPress}
                autoFocus
            />
        </div>

    )
}

export default InputSearchBox;