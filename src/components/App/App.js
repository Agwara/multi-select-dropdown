import React from "react";
import ParentComponent from "../ParentComponent/ParentComponent"

import { items, minSelectAmount, maxSelectAmount  } from "../../data/data";  // DATA SOURCE
import "./App.css";

const App = () => {
    return (
        <ParentComponent 
            data = {items} 
            minSelectAmount = {minSelectAmount}
            maxSelectAmount = {maxSelectAmount}
        />
    )
}

export default App;
