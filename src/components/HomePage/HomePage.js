import React from "react";
import { useState, useEffect } from 'react';

import "../FruitContainer/FruitContainer";
import FruitContainer from "../FruitContainer/FruitContainer";
import BasketStack from "../BasketStack/BasketStack";

import "./HomePage.css";

const HomePage = (props) => {
    // App State
    const [user, setUser] = useState({}) 
    const [apples, setApples] = useState(10)
    const [oranges, setOranges] = useState(10)
    const [grapes, setGrapes] = useState(10)
    const [basketStack, setBasketStack] = useState([])

    const [errorMessage, setErrorMesasage] = useState("")

    const logoutUser = () => {
        sessionStorage.removeItem('user')

        props.history.push("/login")
    }


    // Refresh Page
    const refreshPage = () => {
        window.location.reload();
    }


    const removeErrorMessage = () => {
        setErrorMesasage("")
    }

    // Add Apple to Basket
    const onAddApple = () => {
        if (user.permission === "all") {
            if (apples > 0) {
                setApples(apples - 1)
                setBasketStack((basketStack) => [...basketStack, "apple"]) 
            }
        } else {
            setErrorMesasage("You are not authorized to make this changes")
        }
 
    }

    // Remove Apple from basket
    const onRemoveApple = () => {
        if (user.permission === "all") {
            if (apples < 10 && (basketStack[basketStack.length - 1] === "apple")) {
                setApples(apples + 1) 
    
                basketStack.pop()
                setBasketStack(basketStack)
            } else {
                setErrorMesasage("Apple is not at the top or in the basket!")
            }
        } else {
            setErrorMesasage("You are not authorized to make this changes")
        }

    }

    // Add orange to basket
    const onAddOrange = () => {
        if (user.permission === "all") {
            if (oranges > 0) {
                setOranges(oranges - 1)
                setBasketStack((basketStack) => [...basketStack, "orange"]) 
            }
        } else {
            setErrorMesasage("You are not authorized to make this changes")
        }

    }

    // Remove orange from basket
    const onRemoveOrange = () => {
        if (user.permission === "all") {
            if (oranges < 10 && (basketStack[basketStack.length - 1] === "orange")) {

                setOranges(oranges + 1) 
    
                basketStack.pop()
                setBasketStack(basketStack)
            } else {
                setErrorMesasage("Apple is not at the top or in the basket!")
            }
        } else {
            setErrorMesasage("You are not authorized to make this changes")
        }

    }

    const onAddGrape = () => {
        if (user.permission === "all") {
            if (grapes > 0) {
                setGrapes(grapes - 1)
                setBasketStack((basketStack) => [...basketStack, "grape"]) 
            } 
        } else {
            setErrorMesasage("You are not authorized to make this changes")
        }
    }

    const onRemoveGrape = () => {
        if (user.permission === "all") {
            if (grapes < 10 && (basketStack[basketStack.length - 1] === "grape")) {
                setGrapes(grapes + 1) 
    
                basketStack.pop()
                setBasketStack(basketStack)
            } else {
                setErrorMesasage("Grape is not at the top or in the basket!")
            }
        } else {
            setErrorMesasage("You are not authorized to make this changes")
        }

    }


    useEffect(() => {
        // Check if user is saved in session storage
        if (sessionStorage.getItem("user")) {  
            setUser(JSON.parse(sessionStorage.getItem("user")))
        }
    }, [])

    return (
        <main className="home-page">
            <header className="header-container">
                <h1 onClick={refreshPage} className="header--text">HomePage</h1>
                <p className="header--logout" onClick={logoutUser}>Logout</p>
            </header>

            <p className="welcome-text">Welcome, {user.name}</p>

            <div className={errorMessage ? "display-error": "close-error"}>
                <p className="error-message">{errorMessage}
                    <span onClick={removeErrorMessage} className="error-star">&#10005;</span>
                </p>
            </div>
            

            <div className="fruit-container">
                <FruitContainer 
                    fruitNumber={apples} 
                    fruitName="apple" 
                    onAddFruit={onAddApple}
                    onRemoveFruit={onRemoveApple} 
                />

                <FruitContainer 
                    fruitNumber={oranges} 
                    fruitName="orange" 
                    onAddFruit={onAddOrange}
                    onRemoveFruit={onRemoveOrange}
                />

                <FruitContainer 
                    fruitNumber={grapes} 
                    fruitName="grape" 
                    onAddFruit={onAddGrape}
                    onRemoveFruit={onRemoveGrape}
                />

            </div>

            <div className="basket-stack-container">
                <BasketStack basketItems={basketStack} />
            </div>
        </main>
    )
}

export default HomePage;
