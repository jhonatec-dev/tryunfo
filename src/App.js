import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import EditCards from './components/EditCards';
import Form from './components/Form';
import Game from './components/Game';
import Header from './components/Header';
import Initial from './components/Initial';
import data from './data/cards';
import {
  containsInLowCase, num,
  showMessageTimeout, validateAttr,
} from './helpers/functions';
import { playCardsSound, playClickSound, playStarGameSound } from './helpers/game_sounds';

// Let's rock 🤟🏼
class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: this.cardsHasTrunfo(data),
    isSaveButtonDisabled: true,
    cards: [...data],
    filteredCards: [...data],
    filterFields: {
      superTrunfo: false,
      name: '',
      rare: 'todas',
    },
    route: 'start',
  };

  startGame = () => {
    playStarGameSound();
    this.setState({ route: 'game' });
  };

  showCards = () => {
    playClickSound();
    playCardsSound();
    this.setState({ route: 'cards' });
  };

  createCard = () => {
    playClickSound();
    this.resetFilters();
    this.setState({ route: 'createCard' });
  };
  // ############################################################## Funções das ROTAS FIM ###########################

  validateForm = () => {
    const { cardName, cardDescription, cardImage,
      cardRare, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const valName = cardName.length > 0;
    const valDescription = cardDescription.length > 0;
    const valImagem = cardImage.length > 0;
    const valRaridade = cardRare.length > 0;
    const maxSomaAttr = 210;
    const valAttrSoma = num(cardAttr1) + num(cardAttr2) + num(cardAttr3) <= maxSomaAttr;
    const maxAttr = 90;
    const valAttr1 = validateAttr(cardAttr1, maxAttr);
    const valAttr2 = validateAttr(cardAttr2, maxAttr);
    const valAttr3 = validateAttr(cardAttr3, maxAttr);
    this.setState(() => ({ isSaveButtonDisabled: !(
      valName && valDescription && valImagem && valRaridade
      && valAttrSoma && valAttr1 && valAttr2 && valAttr3) }));
  };

  resetFilters = () => {
    this.setState((prev) => ({
      filterFields: {
        superTrunfo: false,
        name: '',
        rare: 'todas',
      },
      filteredCards: [...prev.cards],
    }));
  };

  handleOnChange = ({ target: { id, type, value, checked } }) => {
    this.setState({ [id]: type === 'checkbox'
      ? checked : value }, this.validateForm);
  };

  handleSaveButton = () => {
    playClickSound();
    showMessageTimeout('Carta salva com sucesso!', 'success');
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cards,
    } = this.state;

    cards.push({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardImage,
      cardAttr3,
      cardRare,
      cardTrunfo,
    });

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: this.cardsHasTrunfo(cards),
      isSaveButtonDisabled: true,
      cards,
    }, this.setFilteredCards);
  };

  removeCard = (cartToRemove) => {
    let { cards } = this.state;
    cards = cards.filter(({ cardName }) => cardName !== cartToRemove);
    this.setState({
      cards,
      hasTrunfo: this.cardsHasTrunfo(cards),
    }, this.setFilteredCards);
    playClickSound();
    showMessageTimeout('Carta Removida!', 'info');
  };

  setFilteredCards = () => {
    const { filterFields: { name, rare, superTrunfo }, cards } = this.state;
    const filteredCards = cards.filter(
      ({ cardRare, cardName, cardTrunfo }) => {
        if (superTrunfo) {
          return cardTrunfo;
        }
        return containsInLowCase(cardName, name)
      && (rare === 'todas' || cardRare === rare);
      },
    );
    this.setState({ filteredCards });
  };

  filterOnChange = ({ target: { value, id, checked } }) => {
    // target.id = name-filter / rare-filter
    const { filterFields } = this.state;
    if (id === 'trunfo-filter') {
      filterFields.superTrunfo = checked;
    } else if (id === 'name-filter') {
      filterFields.name = value;
    } else {
      filterFields.rare = value;
    }

    this.setState({ filterFields }, this.setFilteredCards);
  };

  cardsHasTrunfo(cards) { return cards.some(({ cardTrunfo }) => cardTrunfo); }

  // Método de RENDER ###################################
  render() {
    const { filteredCards, filterFields, route, cards } = this.state;
    return (
      <>
        <Header text="Dream Walker Tryunfo" />
        {
          route === 'start' && (
            <Initial startGame={ this.startGame } />
          )
        }

        {route === 'game' && <Game
          cards={ cards }
          showCardsClick={ this.showCards }
        />}

        {
          route === 'createCard'
      && (
        <section className="section__create-card">
          <Form
            onInputChange={ this.handleOnChange }
            { ...this.state }
            onSaveButtonClick={ this.handleSaveButton }
          />
          <Card { ...this.state } isPreview />
          <Button text="Voltar" extraclass="back__button" onClick={ this.showCards } />
        </section>
      )
        }

        { route === 'cards'
        && (<EditCards
          filterOnChange={ this.filterOnChange }
          filterFields={ filterFields }
          removeCard={ this.removeCard }
          createCard={ this.createCard }
          filteredCards={ filteredCards }
          startGame={ this.startGame }
        />
        )}
      </>
    );
  }
}

export default App;
