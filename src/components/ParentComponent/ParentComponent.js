import React, { useState, useEffect } from "react";

import "./ParentComponent.css"

import InputSearchBox from "../InputSearchBox/InputSearchBox";

import DropDownList from "../DropDownList/DropDownList";
import SelectedItem from "../SelectedItem/SelectedItem"


const ParentComponent = (props) => {
    const [showDropDown, setShowDropDown] = useState(false)  
    const [showSelectedContainer, setShowSelectedContainer] = useState(false)

    const [filteredItems, setFilteredItems] = useState([])

    const [selectedItems, setSelectedItems] = useState([])


    useEffect(() => {
        const items = []
        props.data.map((item) => {
            return items.push(item)
        })
        
        setFilteredItems(items)

    },[props.data])


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

        setShowSelectedContainer(true)
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

    // FUNCTION TO CLEAR ALL ITEMS
    const onClearAll = () => {
        setSelectedItems([])

        setShowSelectedContainer(false)  // Close the selected items container
    }

    const showDropDownInput = () => {
        setShowDropDown(true)
    }

    // Clear all fields and close the dropdown
    const onCancel =  () => {
        setSelectedItems([])

        setShowDropDown(false)
        setShowSelectedContainer(false)
    }

    // Submit the selected items.
    const onDone = () => {
        setShowDropDown(false)
        console.log("Here are the chosen values: ", selectedItems)
        setShowSelectedContainer(false)
    }

    return (
        <section className="drop-down">
            <div className={showSelectedContainer ? "selected-item-container" : "display-none"}>
                <p onClick={onClearAll} className="clear-all">Clear All</p>
                
                <div className="selected-item-list">
                    {
                        selectedItems.map((name, key) => {
                            return <SelectedItem name={name} key={key} removeSelectedItem={removeSelectedItem} />
                        })
                    }
                </div>
            </div>

            <InputSearchBox onSearchChange={onSearchChange} showDropDownInput={showDropDownInput} />

            <div className={showDropDown ? "drop-down--show" : "drop-down--hide"}>
                <DropDownList 
                    filteredItems={filteredItems}
                    onDone={onDone} 
                    onCancel={onCancel} 
                    onClickListener={onClickListener}
                />

                <div className="drop-down__cancel-submit">
                    <p className="drop-down__cancel-btn" onClick={onCancel}>Cancel</p>

                    <p className="drop-down__done-btn" onClick={onDone}>Done</p>
                </div>
            </div>
        </section>
    )
}

export default ParentComponent;