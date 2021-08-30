export const scrollToggle = ({ el = null, toggleEl = null, dur = 300, display = 'block', activeClass = 'show' }) => {
    if (el && toggleEl) {
        toggleEl.addEventListener('click', () => {
            const elH = el.scrollHeight;

            el.style.display = display;
            if (parseFloat(window.getComputedStyle(el).transitionDuration) == 0) {
                el.style.transition = `height ${dur / 1000}s ease-in-out`;
            }

            function resizeEl() {
                if (el.classList.contains(activeClass)) {
                    let arrH = [];

                    for (let itm of el.children) {
                        arrH.push(itm.clientHeight);
                    }

                    let allH = arrH.reduce((prev, next) => prev + next);

                    el.style.height = `${allH}px`;
                }
            }

            window.addEventListener('resize', resizeEl);

            if (el.classList.contains(activeClass)) {
                el.classList.remove(activeClass);
                el.style.height = `calc(${el.style.height} - ${elH}px)`;
            } else {
                el.classList.add(activeClass);
                el.style.height = `${elH}px`;
                el.style.maxHeight = '100%';
            }
        });
    }
}