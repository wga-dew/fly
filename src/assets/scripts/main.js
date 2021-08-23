import accordion from "./components/accordion";
import aside from './components/aside';

window.addEventListener('DOMContentLoaded', () => {
    accordion({ showEl: '.accordion-collapse', actionHandleEl: '.accordion-header' });
    aside({ asideCloseSelector: 'data-close', asideOpenSelector: 'data-open', asideBlockSelector: 'data-aside', id: 'sidenav-1', overley: '.overley', options: { width: '350px' } });
    aside({ asideCloseSelector: 'data-close', asideOpenSelector: 'data-open', asideBlockSelector: 'data-aside', id: 'sidenav-2', options: { width: '100%' } });
});