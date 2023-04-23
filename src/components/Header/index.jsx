import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {
  render() {
    const { text } = this.props;
    return (
      <header className="Header">
        <h1>{text}</h1>
        <h5>
          By
          {' '}
          <a
            href="https://jhonatec.com"
            target="_blank"
            rel="noreferrer"
          >
            Jhonatec

          </a>
        </h5>
      </header>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};
