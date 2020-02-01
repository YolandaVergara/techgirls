import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as typeformEmbed from '@typeform/embed';
import Widget from '../components/Widget';

const styleDefault = {
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: '500px',
    overflow: 'hidden'
};

class ReactTypeFormEmbed extends Component {
    componentDidMount() {
        const {
            url,
            hideHeaders,
            hideFooter,
            opacity,
            buttonText,
            mode,
            autoOpen,
            autoClose,
            onSubmit
        } = this.props;

        const options = {
            hideHeaders,
            hideFooter,
            opacity,
            buttonText,
            mode,
            autoOpen,
            autoClose,
            onSubmit
        };

        // Popup Mode
        if (Widget) {

            const elm = this.typeformElm;
            // Load Typeform embed widget
            typeformEmbed.makeWidget(elm, url, options);
        }
    }

    render() {
        const style = Object.assign({}, styleDefault, this.props.style);

        return (
            <div
                className="ReactTypeformEmbed"
                ref={tf => {
                    this.typeformElm = tf;
                }}
                style={style}
            />
        );
    }
}

ReactTypeFormEmbed.propTypes = {
    style: PropTypes.object,
    url: PropTypes.string.isRequired,
    popup: PropTypes.bool,
    hideHeaders: PropTypes.bool,
    hideFooter: PropTypes.bool,

    // Widget options
    opacity: PropTypes.number,
    buttonText: PropTypes.string,
};

// Default values taken from official Typeform docs
// https://developer.typeform.com/embed/modes/
ReactTypeFormEmbed.defaultProps = {
    style: {},
    popup: false,
    hideHeaders: false,
    hideFooter: false,
    onSubmit: () => { },

    // Widget options
    opacity: 100,
    buttonText: 'Start'
};

export default ReactTypeFormEmbed;