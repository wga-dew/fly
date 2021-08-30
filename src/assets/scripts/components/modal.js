const modal = ({ dataName = null }) => {
    const modalContainer = document.querySelector(`[data-modal='${dataName}']`),
        modalOpen = document.querySelector(`[data-open='${dataName}']`),
        modalClose = document.querySelector(`[data-close='${dataName}']`);

    if (modalContainer && modalOpen && modalClose) {
        modalOpen.addEventListener('click', modalShow);
        modalClose.addEventListener('click', modalHide);
        modalContainer.addEventListener('click', (e) => {
            if (!e.target.closest('.modal')) {
                modalHide();
            }
        });
    }

    function modalShow() {
        modalContainer.classList.add('show');
    }

    function modalHide() {
        modalContainer.classList.remove('show');
    }
};

export default modal;