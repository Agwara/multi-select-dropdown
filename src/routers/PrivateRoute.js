import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({  component: Component, ...rest }) => (
	<Route {...rest} component={(props) => (
        sessionStorage.getItem("user") ? (
            <Component {...props}  />			
			) : (
				<Redirect to="/login" />		
			)
		)}
	/>
);

export default PrivateRoute;