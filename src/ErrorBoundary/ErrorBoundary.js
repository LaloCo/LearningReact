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
        errorContent = <h1>{hasErrorState.errorMessage}</h1>;
    } else {
        props.children;
    }

    return (errorContent);
}

export default ErrorBoundary;
