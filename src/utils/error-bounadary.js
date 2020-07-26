import React, {Component, Fragment} from 'react';
import ErrorIndicator from '../components/error-indicator';

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState( { hasError: true} )
    };


    render() {
        const { hasError } = this.state;
        const { children } = this.props
        if (hasError) {
            return <ErrorIndicator />
        }

        return (
            <Fragment>
                { children }
            </Fragment>
        )
    }
}
