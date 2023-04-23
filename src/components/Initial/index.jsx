import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { showModal } from '../../helpers/functions';
import { playClickSound } from '../../helpers/game_sounds';
import logo from '../../media/images/logo2.png';
import Button from '../Button';
import './style.css';

export default class Initial extends Component {
  openVideo = () => {
    const strIframwe = '<iframe width="100%" height="400px" src="https://www.youtube.com/embed/3OvnjPQ0Ofg?controls=0&amp;start=90" title="YouTube video player" frameborder="0" autoplay="1" ></iframe>';
    showModal(
      'Dê o play e veja se alguma coragem o vídeo pode gerar...',
      null,
      strIframwe,
      'Já perdi o medo agora!',
    );
  };

  handleTenhoMedo = () => {
    playClickSound();
    const timeout = 600;
    setTimeout(this.openVideo, timeout);
  };

  render() {
    const { startGame } = this.props;
    return (
      <section className="section__start">
        <Button
          extraclass="back__button"
          text="Tenho medo"
          onClick={ this.handleTenhoMedo }
        />
        <section className="section__start--content">

          <img src={ logo } alt="logo" srcSet="" />
          <div className="welcome">
            <h3>Olá!</h3>
            <p>Este é um jogo no estilo Super Trunfo</p>
            <p>Você recebe uma carta e disputa contra o computador</p>
            <p>Escolhendo em qual categoria sua carta pode ter a maior pontuação</p>
          </div>
          <Button text="Iniciar" onClick={ startGame } />
        </section>
      </section>
    );
  }
}

Initial.propTypes = {
  startGame: PropTypes.func.isRequired,
};
