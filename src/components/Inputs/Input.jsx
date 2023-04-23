import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './style.css';

export default class Input extends Component {
  render() {
    const { id, placeholder, type } = this.props;
    return (
      <div className="container__input">
        <label htmlFor={ id }>{placeholder}</label>
        <input
          className={ type }
          { ...this.props }
        />
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
