import React from "react";
import { useState } from 'react';

import "./App.css"

const App = () => {
    const [apple, setApple] = useState("")
    const [orange, setOrange] = useState("")
    const [grape, setGrape] = useState("")
    const [banana, setBanana] = useState("")
    const [mango, setMango] = useState("")

    const [showDropDown, setShowDropDown] = useState(false)

    const [selectNum, setSelectNum] = useState(0)


    const onShowDropDown = () => {
        if (showDropDown) {
            setShowDropDown(false)
        } else {
            setShowDropDown(true)
        }
    }

    const onSetApple = () => {
        if (!apple) {
            setApple("apple")
            setSelectNum(selectNum + 1)
        } else {
            setApple("")
            setSelectNum(selectNum - 1)
        }
        
    }

    const onSetOrange = () => {
        if (!orange) {
            setOrange("orange")
            setSelectNum(selectNum + 1)
        } else {
            setOrange("")
            setSelectNum(selectNum - 1)
        }  
    }

    const onSetGrape = () => {
        if (!grape) {
            setGrape("grape")
            setSelectNum(selectNum + 1)
        } else {
            setGrape("")
            setSelectNum(selectNum - 1)
        }
        
    }

    const onSetBanana = () => {
        if (!banana) {
            setBanana("banana")
            setSelectNum(selectNum + 1)
        } else {
            setBanana("")
            setSelectNum(selectNum - 1)
        }
    }

    const onSetMango = () => {
        if (!mango) {
            setMango("mango")
            setSelectNum(selectNum + 1)
        } else {
            setMango("")
            setSelectNum(selectNum - 1)
        }
    }

    // Clear all fields and close the dropdown
    const onCancel = () => {
        setApple("");
        setOrange("")
        setGrape("")
        setBanana("")
        setMango("")

        setSelectNum(0)
        setShowDropDown(false)
    }

    const onSelectAll = () => {
        setApple("apple");
        setOrange("orange")
        setGrape("grape")
        setBanana("banana")
        setMango("mango")

        setSelectNum(5)
    }

    // Clear all fields and leave the dropdown open
    const onClearAll = () => {
        setApple("");
        setOrange("")
        setGrape("")
        setBanana("")
        setMango("")

        setSelectNum(0)
    }

    const onDone = () => {
        setShowDropDown(false)
        console.log("Here are the chosen values: ", apple, orange, mango, banana, grape)
    
    }

    return (
        <section className="drop-down">
            <p onClick={onShowDropDown} className="drop-down__header">Choose Fruits</p>

            <div className={showDropDown ? "drop-down--show" : "drop-down--hide"}>

                <div className="drop-down__all-clear">
                    <p onClick={onSelectAll} className="drop-down__select">Select All</p>
                    <p onClick={onClearAll} className="drop-down__clear">Clear All</p>
                </div>

                <ul className="drop-down__list">
                    <li className="drop-down__items" onClick={onSetApple}>
                        <span className={apple ? "show-color": "hide-color"}></span><p className="drop-down__text">Apple</p>
                    </li>

                    <li className="drop-down__items" onClick={onSetOrange}>
                        <span className={orange ? "show-color": "hide-color"}></span><p className="drop-down__text">Orange</p>
                    </li>

                    <li className="drop-down__items" onClick={onSetGrape}>
                        <span className={grape ? "show-color": "hide-color"}></span><p className="drop-down__text">Grape</p>
                    </li>

                    <li className="drop-down__items" onClick={onSetBanana}>
                        <span className={banana ? "show-color": "hide-color"}></span><p className="drop-down__text">Banana</p>
                    </li>

                    <li className="drop-down__items" onClick={onSetMango}>
                        <span className={mango ? "show-color": "hide-color"}></span><p className="drop-down__text">Mango</p>
                    </li>
                </ul>

                <div className="drop-down__control">
                    <p className="drop-down__counter">{selectNum} of 5</p>

                    <div className="drop-down__cancel-submit">
                        <p className="drop-down__cancel-btn" onClick={onCancel}>Cancel</p>

                        <p className="drop-down__done-btn" onClick={onDone}>Done</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default App;