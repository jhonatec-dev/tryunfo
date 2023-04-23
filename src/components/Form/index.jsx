import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../Button';
import Input from '../Inputs/Input';
import Select from '../Inputs/Select';
import TextArea from '../Inputs/TextArea';
import './style.css';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="Form">
        <h3 className="form__title">Crie sua carta</h3>
        <Input
          id="cardName"
          type="text"
          placeholder="Nome"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
        <Input
          id="cardImage"
          type="text"
          placeholder="Link da Imagem"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <TextArea
          id="cardDescription"
          type="textarea"
          placeholder="Descrição"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <div className="atributos">
          <Input
            id="cardAttr1"
            type="number"
            placeholder="Alegria"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            max="90"
          />
          <Input
            id="cardAttr2"
            type="number"
            placeholder="Medo"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            max="90"
          />
          <Input
            id="cardAttr3"
            type="number"
            placeholder="Lucidez"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            max="90"
          />
        </div>
        <div className="atributos">
          <Select
            id="cardRare"
            placeholder="Raridade"
            data-testid="rare-input"
            options={ ['normal', 'raro', 'muito raro'] }
            value={ cardRare }
            onChange={ onInputChange }
          />
          {hasTrunfo
            ? <h3 className="hasTrunfo">Você já tem um Super Trunfo em seu baralho</h3>
            : (
              <Input
                id="cardTrunfo"
                type="checkbox"
                placeholder="Super Trunfo"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            )}
        </div>
        <Button
          text="Salvar"
          data-testid="save-button"
          id="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />
      </div>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
