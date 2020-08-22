import modals from './modules/modals';
import sliders from './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.comment-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    
});