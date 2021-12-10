import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function ProtectedRoute ({ component: Component, ...restOfProps }) {
    const isSubmitted = sessionStorage.getItem('Submitted');

    return (
        <Route
            {...restOfProps}
            render={(props) => 
                isSubmitted ? <Component {...props}/> : <Redirect to="/webinar" />
            }
        />
    );
}