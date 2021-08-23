const accordion = ({ actionHandleEl = null, showEl = null, show = -1 }) => {
    const headEl = document.querySelectorAll(actionHandleEl);
    if (headEl) {
        headEl.forEach(el => {
            el.addEventListener('click', () => {
                const body = el.nextElementSibling;
                if (body && body.classList.contains(showEl.replace('.', ''))) {
                    if (!body.classList.contains('show')) {
                        if (show > 0) {
                            document.querySelectorAll(showEl).forEach(el => {
                                if (el.classList.contains('show')) {
                                    el.classList.remove('show');
                                    el.style.maxHeight = `0`;
                                }
                            })
                        }
                        body.classList.add('show');
                        body.style.maxHeight = `${body.scrollHeight}px`;
                    } else {
                        body.classList.remove('show');
                        body.style.maxHeight = `0`;
                    }
                }
            })
        })
    }
};

export default accordion;