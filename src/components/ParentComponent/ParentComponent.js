import React, { useState, useEffect, useRef } from "react";

import "./ParentComponent.css"

import InputSearchBox from "../InputSearchBox/InputSearchBox";

import DropDownList from "../DropDownList/DropDownList";
// import SelectedItem from "../SelectedItem/SelectedItem"


const ParentComponent = (props) => {
    const [showDropDown, setShowDropDown] = useState(false)  
    // const [showSelectedContainer, setShowSelectedContainer] = useState(false)

    const [filteredItems, setFilteredItems] = useState([])

    const [selectedItems, setSelectedItems] = useState([])

    const node = useRef();


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


    // FUNCTION TO SET THE FILTER TEXT
    const onSearchChange = (value) => {
        const filteredItems = []
        
        // SELECT THE FILTERED ITEMS FROM USER'S TEXT INPUT
        props.data.filter(fruit => {
            if (fruit.toLowerCase().includes(value.toLowerCase())) {
                filteredItems.push(fruit)
            }
            return true;
        })
        setFilteredItems(filteredItems)
    }

    const onClickListener = (name) => {
        if (!selectedItems.includes(name)) {
            setSelectedItems((selectedItems) => ([...selectedItems, name]))
        } else {
            return true;
        }      

    }

    // REMOVES SELECTED ITEMS FROM THE ARRAY OF SELECTED ITEMS
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

    // When the user is done with the selection, send the data.
    const onDone = () => {
        setShowDropDown(false)
        console.log("Here are the chosen values: ", selectedItems)
        setSelectedItems([])
    }

    const handleClickOutside = (e) => {
        if (node.current && node.current.contains(e.target)) {
          return;
        }
        // EMPTY THE SELECTED ITEM ARRAY AND CLOSE THE DROP DOWN
        setShowDropDown(false);
      };

    return (
        <section id="drop-down" className="drop-down" ref={node} onClick={handleClickOutside}>
            
            <InputSearchBox 
                selectedItems={selectedItems}
                onSearchChange={onSearchChange} 
                showDropDownInput={showDropDownInput} 
                onDone={onDone}
                removeSelectedItem={removeSelectedItem}
            />
   
            <div className={showDropDown ? "drop-down--show" : "drop-down--hide"}>
                <DropDownList 
                    filteredItems={filteredItems}
                    onClickListener={onClickListener}
                    onDone={onDone}
                />
            </div>

        </section>
    )
}

export default ParentComponent;