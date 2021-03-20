import React from "react";

import "./InputSearchBox.css"
import SelectedItem from "../SelectedItem/SelectedItem"


const InputSearchBox = (props) => {
    /*
        THIS FUNCTION IS FIRED WHEN A USERS TYPES IN THE INPUT FIELD
    */    
    const onSearchChange = (event) => {
        props.onSearchChange(event.target.value)   // THIS FUNCTION FIILTERS THE ITEMS 
        props.showDropDownInput()   // SHOWS DROP DOWN WHEN A USER TYPES 
        props.onRemoveErrorMessage()
    }

    /* 
        THIS FUNCTION SHOWS THE DROP DOWN
    */    
    const showDropDownInput = () => {
        props.showDropDownInput()
        props.onRemoveErrorMessage()
    }

    /* 
        THIS FUNCTION IS FIRED WHEN A USER HITS "ENTER" WHEN THE 
        INPUT FIELD IS ON FOCUS.
    */    
    const handleKeyPress = (event) => {
        if ((event.key === "Enter") && (props.minSelectAmount > props.selectedItems.length)) {
            props.onSetErrorMessage()
            
        } else if (event.key === "Enter") {
            props.onDone()
        }
    }

    /*
        THIS FUNCTION REMOVES SELECTED ITEMS 
    */    
    const removeSelectedItem = (name) => {
        props.removeSelectedItem(name)
    }


    /* 
        THIS FUNCTION REMOVES THE ERROR MESSAGE
    */
    const removeErrorMessage = () => {
        props.onRemoveErrorMessage()
    }

    return (
        <div className="search-box-container">
            {
                props.selectedItems.map((name, key) => {
                    return <SelectedItem 
                                name={name} 
                                key={key} 
                                removeSelectedItem={removeSelectedItem} 
                                removeErrorMessage={removeErrorMessage}
                            />
                })
            }

            <input
                type="search"
                placeholder={props.selectedItems.length > 0 ? "" : "Items"}
                className="items__search"
                onChange={onSearchChange}
                onClick={showDropDownInput}
                onKeyPress={handleKeyPress}
                onFocus={removeErrorMessage}
                autoFocus
            />
        </div>

    )
}

export default InputSearchBox;