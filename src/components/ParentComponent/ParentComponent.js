import React, { useState, useEffect, useRef } from "react";

import "./ParentComponent.css"

import InputSearchBox from "../InputSearchBox/InputSearchBox";

import DropDownList from "../DropDownList/DropDownList";

const ParentComponent = (props) => {
    const [showDropDown, setShowDropDown] = useState(false)  // DROP DOWN STATE
    const [filteredItems, setFilteredItems] = useState([])   // FILTERED ITEMS STATE
    const [selectedItems, setSelectedItems] = useState([])   // SELECTED ITEMS STATE
    const [errorMessage, setErrorMessage] = useState([])     // ERROR MESSAGE STATE

    const node = useRef();


    /* 
        SETUP EVENT LISTENERS WHEN THE PARENT COMPONENT MOUNTS
    */    
    useEffect(() => {
        const items = []
        props.data.map((item) => {
            return items.push(item)
        })
        
        setFilteredItems(items)

        // ADD AN EVENT LISTENER WHEN THE COMPONENT FIRST MOUNTS
        if (showDropDown) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    },[props.data, showDropDown])


    /*
        FUNCTION TO CHANGE THE DROP DOWN ITEMS BASED ON USER'S INPUT TEXT
    */    
    const onSearchChange = (value) => {
        const filteredItems = []
        
        // SELECT THE FILTERED ITEMS FROM USER'S TEXT INPUT
        props.data.filter(item => {
            if (item.toLowerCase().includes(value.toLowerCase())) {
                filteredItems.push(item)
            }
            return true;
        })
        setFilteredItems(filteredItems)
    }

    
    /*
        THIS FUNCTIONS FIRES WHEN A USER CLICKS WHEN A USERS CLICKS
        AN ITEMS IN THE DROP DOWN
    */    
    const onClickListener = (name) => {
        if (!selectedItems.includes(name) && ((selectedItems.length + 1) <= props.maxSelectAmount)) {
            setSelectedItems((selectedItems) => ([...selectedItems, name]))
        } else if ((selectedItems.length === props.maxSelectAmount)) {
            setErrorMessage(`Number items selected should not exceed: ${props.maxSelectAmount}`)
        }
    }

    /*
        THIS FUNCTION REMOVES SELECTED ITEMS FROM THE ARRAY OF SELECTED ITEMS
    */    
    const removeSelectedItem = (name) => {
        const items = []

        selectedItems.map((item, key) => {
            if (item !== name) {
                items.push(item)
            }
            return key
        })  
        setSelectedItems(items)
    }

    const showDropDownInput = () => {
        setShowDropDown(true)
    }

    /* 
        THIS FUNCTION IS FIRED WHEN A USER CLICKS THE "ENTER" BUTTON
    */
    const onDone = () => {
        setShowDropDown(false)
        console.log("Here are the chosen values: ", selectedItems)
        setSelectedItems([])
    }

    /*
        THIS FUNCTION IS USED TO CLOSE THE DROP DOWN WHEN A 
        USER CLICKS OUTSIDE THE AREA
    */    
    const handleClickOutside = (e) => {
        if (node.current && node.current.contains(e.target)) {
          return;
        }
        // EMPTY THE SELECTED ITEM ARRAY AND CLOSE THE DROP DOWN
        setShowDropDown(false);
    };

    /*
        THIS FUNCTION SETS THE ERROR MESSAGE
    */
    const onSetErrorMessage = () => {
        setErrorMessage(`Number items selected should not be less than: ${props.maxSelectAmount}`)
    }    

    /* 
        THIS FUNCTION REMOVES THE ERROR MESSAGE
    */
    const onRemoveErrorMessage = () => {
        setErrorMessage("")
    }    

    return (
        <section id="drop-down" className="drop-down" ref={node} onClick={handleClickOutside}>
            <InputSearchBox 
                selectedItems={selectedItems}
                onSearchChange={onSearchChange} 
                showDropDownInput={showDropDownInput} 
                onDone={onDone}
                removeSelectedItem={removeSelectedItem}
                minSelectAmount= {props.minSelectAmount}
                onSetErrorMessage={onSetErrorMessage}
                onRemoveErrorMessage={onRemoveErrorMessage}
            />
        
            <p className={errorMessage ? "show-error-message" : "close-error-message"}>{errorMessage}</p>        
   
            <DropDownList 
                filteredItems={filteredItems}
                onClickListener={onClickListener}
                onDone={onDone}
                showDropDown={showDropDown}
                onRemoveErrorMessage={onRemoveErrorMessage}
            />

        </section>
    )
}

export default ParentComponent;