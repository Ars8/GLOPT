import modals from './modules/modals';
import sliders from './modules/sliders';
import scrolling from './modules/scrolling';
import forms from './modules/forms';
import scrollingToLink from './modules/scrollinToLink';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  sliders('.comment__content-wrap', 'horizontal', '.main-prev-btn', '.main-next-btn');
  scrolling('.pageup');
  scrollingToLink('#adv');
  scrollingToLink('#abwork');
  scrollingToLink('#pr');
  scrollingToLink('#schwork');
  scrollingToLink('#comm');
  scrollingToLink('#quest');
  forms();
});
