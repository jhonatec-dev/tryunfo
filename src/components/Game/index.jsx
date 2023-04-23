import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { pickRandomNumber } from '../../helpers/functions';
import { playAttrSound, playClickSound } from '../../helpers/game_sounds';
import Button from '../Button';
import Card from '../Card';
import './style.css';

const attrNames = {
  cardAttr1: 'Alegria',
  cardAttr2: 'Medo',
  cardAttr3: 'Lucidez',
};

export default class Game extends Component {
  state = {
    player: 0,
    computer: 0,
    winner: '',
    playerCard: this.firstCardPl(),
    computerCard: this.firstCardPC(),
    attr: '',
    playerDeck: [],
    computerDeck: [],
    hideCard: true,
    handleAttrClick: () => {},
  };

  componentDidMount() {
    this.resetGame();
  }

  resetGame = () => {
    const { cards } = this.props;
    const { newDeck: playerDeck, card: playerCard } = this.getNewDeckAndCard(cards);
    const { newDeck: computerDeck, card: computerCard } = this.getNewDeckAndCard(cards);

    this.setState({
      playerCard,
      playerDeck,
      computerCard,
      winner: '',
      computerDeck,
      hideCard: true,
      handleAttrClick: this.onAttrClick,
    });
  };

  onAttrClick = (attr) => {
    playAttrSound();
    // Trabalhar aqui agora
    const { playerCard, computerCard } = this.state;
    let { player, computer, winner } = this.state;

    if (playerCard.cardTrunfo) {
      player += 1;
      winner = 'Você ganhou!\nSuper Trunfo';
    } else if (computerCard.cardTrunfo) {
      computer += 1;
      winner = 'Computador ganhou!\nSuperTrunfo';
    } else if (+playerCard[attr] > +computerCard[attr]) {
      player += 1;
      winner = 'Você ganhou!';
    } else if (+playerCard[attr] < +computerCard[attr]) {
      computer += 1;
      winner = 'Computador ganhou!';
    } else {
      player += 1;
      computer += 1;
      winner = 'Empate!';
    }

    this.setState(() => ({
      hideCard: false,
      player,
      computer,
      winner,
      attr,
      handleAttrClick: () => {},
    }));
  };

  getNewDeckAndCard = (deck) => {
    const minIndex = 0;
    const randomIndex = pickRandomNumber(minIndex, deck.length - 1);
    const card = deck[randomIndex];
    const newDeck = deck.filter((_card, index) => index !== randomIndex);
    return ({
      newDeck,
      card });
  };

  newRound = () => {
    playClickSound();
    const { playerDeck, computerDeck } = this.state;

    if (playerDeck.length === 0) {
      this.resetGame();
      return;
    }

    const {
      newDeck: newPlayerDeck,
      card: playerCard,
    } = this.getNewDeckAndCard(playerDeck);

    const {
      newDeck: newComputerDeck,
      card: computerCard,
    } = this.getNewDeckAndCard(computerDeck);

    this.setState({
      playerDeck: newPlayerDeck,
      playerCard,
      computerDeck: newComputerDeck,
      computerCard,
      hideCard: true,
      winner: '',
      handleAttrClick: this.onAttrClick,
    });
  };

  firstCardPl() {
    const { cards } = this.props;
    return cards[0];
  }

  firstCardPC() {
    const { cards } = this.props;
    return cards[0];
  }

  render() {
    const { showCardsClick } = this.props;
    const { player, computer, playerCard, winner, handleAttrClick,
      computerCard, playerDeck, hideCard, attr } = this.state;
    return (
      <section className="section__game">
        <Button text="Cartas" onClick={ showCardsClick } extraclass="back__button" />
        <div className="regras">
          <h3>Você e o computador recebem uma carta aleatoriamente</h3>
          <h3>Você pode clicar em um dos 3 atributos que julgar ser o mais forte</h3>
          <h3>Ganha quem tiver o atributo mais forte</h3>
          <h2 className="deck">
            Cartas restantes;
            {' '}
            <span className="pts">{playerDeck.length}</span>
          </h2>
        </div>
        <section className="section__game--pts">
          <h2>
            Pontos Jogador;
            {' '}
            <span className="pts">{player}</span>
          </h2>
          <h2>
            Pontos Computador;
            {' '}
            <span className="pts">{computer}</span>
          </h2>

        </section>

        <section className="section__game--cards">
          <Card { ...playerCard } isPreview onAttrClick={ handleAttrClick } />

          <Card { ...computerCard } isPreview computer={ hideCard } />
        </section>

        {
          winner !== ''
          && (
            <section className="section__game--over">
              <h2>{winner}</h2>
              <section className="atributos">
                <div className="attr">
                  <h3>{playerCard[attr]}</h3>
                  <h5>{attrNames[attr]}</h5>
                </div>
                <h2>VS</h2>
                <div className="attr">
                  <h3>{computerCard[attr]}</h3>
                  <h5>{attrNames[attr]}</h5>
                </div>
              </section>
              <Button
                text={ playerDeck.length === 0 ? 'Reiniciar' : 'Próxima carta' }
                onClick={ this.newRound }
              />
            </section>
          )
        }
      </section>

    );
  }
}

Game.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape).isRequired,
  showCardsClick: PropTypes.func.isRequired,
};
