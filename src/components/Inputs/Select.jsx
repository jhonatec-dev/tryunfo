import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './style.css';

export default class Select extends Component {
  render() {
    const { id, placeholder, options } = this.props;
    return (
      <div className="container__input">
        <label htmlFor={ id }>
          {placeholder}
        </label>
        <select { ...this.props }>
          {options.map((opt) => (<option value={ opt } key={ opt }>{opt}</option>))}
        </select>

      </div>
    );
  }
}

// Select.defaultProps = {
//   options: [],
// };

Select.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
