import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './style.css';

export default class TextArea extends Component {
  render() {
    const { id, placeholder } = this.props;
    return (
      <div className="container__input">
        <label htmlFor={ id }>
          {placeholder}

        </label>
        <textarea
          name={ id }
          { ...this.props }
        />
      </div>

    );
  }
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
