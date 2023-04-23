import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './style.css';

export default class Button extends Component {
  render() {
    const { text, extraclass } = this.props;
    return (
      <button className={ `Button ${extraclass}` } { ...this.props }>{text}</button>
    );
  }
}

Button.defaultProps = {
  extraclass: '',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  extraclass: PropTypes.string,
};
