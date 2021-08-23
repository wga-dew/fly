const aside = ({ asideBlockSelector = null, asideCloseSelector = null, asideOpenSelector = null, id = null, overley = null, options = { width: '100%' } }) => {
    const openEl = document.querySelectorAll(`[${asideOpenSelector}=${id}]`);
    const asideEl = document.querySelector(`[${asideBlockSelector}=${id}]`);
    const closeEl = asideEl.querySelector(`[${asideCloseSelector}=${id}]`);
    const overlap = document.querySelector(overley);
    if (openEl) {
        openEl.forEach(o => {
            o.addEventListener('click', () => {
                if (asideEl) {
                    if (window.innerWidth <= 375) {
                        asideEl.style.width = '100%';
                    } else {
                        asideEl.style.width = options.width;
                    }
                    asideEl.classList.add('show');
                    overlap ? overlap.classList.add('active') : null;
                    resize(asideEl)
                }
            })
        })
        closeEl.addEventListener('click', () => {
            closeAside(asideEl, overlap)
        })
        overlap ? overlap.addEventListener('click', () => {
            closeAside(asideEl, overlap)
        }) : null;
    }

    function resize(el) {
        window.addEventListener('resize', () => {
            if (el.classList.contains('show')) {
                if (window.innerWidth <= 375) {
                    el.style.width = '100%';
                } else {
                    el.style.width = options.width;
                }
            }
        })
    }

    function closeAside(aside = null, over = null) {
        if (aside) {
            aside.classList.remove('show');
            aside.removeAttribute('style');
        }
        if (over) {
            over.classList.remove('active');
        }
    }
};

export default aside;