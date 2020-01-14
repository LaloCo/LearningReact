import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    };

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        });
    }
    
    render () {
        if (this.state.hasError){
            // this is displayed instead of the wrapped element if there is an error
            return (<h1>{this.state.errorMessage}</h1>);
        } else {
            // the wrapped element is displayed if there aren't any errors
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
