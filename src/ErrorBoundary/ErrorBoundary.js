import React, { useState } from 'react';

const ErrorBoundary = props => {
    const [ hasErrorState, setHasErrorState ] = useState({
        hasError: false,
        errorMessage: ''
    });

    componentDidCatch = (error, info) => {
        setHasErrorState({
            hasError: true,
            errorMessage: error
        });
    }

    errorContent = null;
    if (hasErrorState.hasError){
        // this is displayed instead of the wrapped element if there is an error
        errorContent = <h1>{hasErrorState.errorMessage}</h1>;
    } else {
        // the wrapped element is displayed if there aren't any errors
        props.children;
    }

    return (errorContent);
}

export default ErrorBoundary;
