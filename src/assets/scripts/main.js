import settings from './settings';
import { accordion, aside, swiper, modal } from './components/';

window.addEventListener('DOMContentLoaded', (e) => {
    settings({ windowLoadData: e });
    accordion({ showEl: '.accordion-collapse', actionHandleEl: '.accordion-header' });
    aside({ asideCloseSelector: 'data-close', asideOpenSelector: 'data-open', asideBlockSelector: 'data-aside', id: 'sidenav-1', overley: '.overley', options: { width: '350px' } });
    aside({ asideCloseSelector: 'data-close', asideOpenSelector: 'data-open', asideBlockSelector: 'data-aside', id: 'sidenav-2', options: { width: '100%' } });
    swiper({ swiperSelector: '.swiper1', touch: true, count: 3 });
    modal({ dataName: 'modal-1' });
    let str = "Hello";
    str.something = 5;
    alert(str.something);
});