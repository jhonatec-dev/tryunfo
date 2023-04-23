import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../Button';
import Input from '../Inputs/Input';
import Select from '../Inputs/Select';
import './style.css';

export default class Filter extends Component {
  render() {
    const { filterOnChange, superTrunfo, onAddCardClick } = this.props;
    return (
      <section className="Filter">
        <Input
          type="text"
          placeholder="Nome"
          data-testid="name-filter"
          id="name-filter"
          onChange={ filterOnChange }
          disabled={ superTrunfo }
        />
        <Select
          data-testid="rare-filter"
          placeholder="Raridade"
          onChange={ filterOnChange }
          id="rare-filter"
          options={ ['todas', 'normal', 'raro', 'muito raro'] }
          disabled={ superTrunfo }
        />
        <Input
          id="trunfo-filter"
          type="checkbox"
          placeholder="Super Trunfo"
          data-testid="trunfo-filter"
          onChange={ filterOnChange }
        />
        <Button text="+" onClick={ onAddCardClick } />
      </section>
    );
  }
}

Filter.propTypes = {
  filterOnChange: PropTypes.func.isRequired,
  superTrunfo: PropTypes.bool.isRequired,
  onAddCardClick: PropTypes.func.isRequired,
};
// teste
