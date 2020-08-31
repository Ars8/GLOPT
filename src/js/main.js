import modals from './modules/modals';
import sliders from './modules/sliders';
import scrolling from './modules/scrolling';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.comment__content-wrap', 'horizontal', '.main-prev-btn', '.main-next-btn');
    scrolling('.pageup');
    
});