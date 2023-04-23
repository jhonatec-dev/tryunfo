import Swal from 'sweetalert2';
import { playCardsSound } from './game_sounds';

export const containsInLowCase = (str1, str2) => str1.toLowerCase()
  .includes(str2.toLowerCase());

export const num = (str) => Number(str);

export const validateAttr = (attr, maxAttr) => (num(attr) <= maxAttr)
&& (num(attr) >= 0);

export const shuffle = (array) => {
  const modificator = 0.5;
  return array.sort(() => Math.random() - modificator);
};

export const pickRandomNumber = (min, max) => (
  Math.round(Math.random() * (max - min) + min)
);

export const showMessageTimeout = (message, icon) => Swal.fire({
  background: '#282828',
  color: 'white',
  icon,
  iconColor: '#ba8d59',
  title: message,
  showConfirmButton: false,
  timer: 2000,

});

export const showModal = (message, icon, html, confirmButtonText) => {
  Swal.fire({
    background: '#282828',
    color: 'white',
    icon,
    html,
    title: message,
    showConfirmButton: true,
    confirmButtonColor: '#ba8d59',
    confirmButtonText,
    width: '100%',

  }).then(() => {
    if (message.toLowerCase().includes('angel')) {
      playCardsSound();
    }
  });
};
