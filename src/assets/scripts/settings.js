export const getScrollbarWidth = () => {
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth;
};

const settings = ({ windowLoadData = null }) => {
    // settings for teg <a>...</a>
    (function() {
        const disLinks = document.querySelectorAll('a.disabled');
        if (disLinks) {
            disLinks.forEach(a => {
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    return false;
                });
            });
        }
    })();
};

export default settings;