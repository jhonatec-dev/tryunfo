import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { showModal } from '../../helpers/functions';
import { pauseAll, playClickSound } from '../../helpers/game_sounds';
import videoURL from '../../media/audios/Hidden.mp4';
import Button from '../Button';
import Card from '../Card';
import Filter from '../Filter';
import './style.css';

export default class EditCards extends Component {
  openVideo = () => {
    const strIframwe = `<video width="100%" height="300px" 
    controls autoplay volume="0.35">
    <source src="${videoURL}" type="video/mp4">
    </video>
    <div class="div__hidden">
    <h2>Hi! It's me again...</h2>
    <textarea readOnly>
    So here goes, I'm not even sure why the universe captivated me with its presence...
    But the fact is that I get inspired every day, and the trigger was our contact...
    The person that you are, and seek to be gets me deeply envolved... 
    Even if our destiny is to stay far away...
    I still feel a special consideration for you...
    And when you appear in my dreams around here...
    I can enjoy a little bit of your light and touch...
    </textarea>
  </div>`;
    showModal(
      'Fallen Angel, essa é pra você...',
      null,
      strIframwe,
      'Go back to the void',
    );
    pauseAll();
  };

  handleAttrClick = (card) => {
    if (card.cardName === 'Fallen Angel') {
      playClickSound();
      const timeout = 600;
      setTimeout(this.openVideo, timeout);
    }
  };

  render() {
    const {
      filterOnChange, filterFields, removeCard,
      createCard, filteredCards, startGame,
    } = this.props;
    return (
      <section className="section__edit-cards">

        <Button text="Voltar" extraclass="back__button" onClick={ startGame } />
        <Filter
          filterOnChange={ filterOnChange }
          superTrunfo={ filterFields.superTrunfo }
          onAddCardClick={ createCard }
        />
        <section className="section__cards">
          {
            filteredCards.map((card) => (
              <div key={ card.cardName }>
                <Card
                  { ...card }
                  onAttrClick={ () => this.handleAttrClick(card) }
                  isPreview={ false }
                  onRemoveClick={ () => removeCard(card.cardName) }
                />
              </div>))
          }
        </section>
      </section>
    );
  }
}

EditCards.propTypes = {
  filterFields: PropTypes.shape({
    superTrunfo: PropTypes.bool,
  }).isRequired,
  filteredCards: PropTypes.arrayOf(PropTypes.shape).isRequired,
  filterOnChange: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
  createCard: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};
