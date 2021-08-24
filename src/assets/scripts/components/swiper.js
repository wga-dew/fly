const swiper = ({ swiperSelector = null, touch = false, count = 1 }) => {
    const swiperBlock = document.querySelector(swiperSelector),
        swiperTrack = swiperBlock.querySelector('.swiper_container'),
        swiperItems = swiperTrack.querySelectorAll('.swiper_item'),
        btnPrev = swiperBlock.querySelector('.prev'),
        btnNext = swiperBlock.querySelector('.next');

    if (swiperBlock && swiperTrack && swiperItems) {
        let currentItem = null,
            swiperItemsLength = null,
            width = null;

        init();

        if (btnPrev && btnNext) {
            btnPrev.addEventListener('click', prev);
            btnNext.addEventListener('click', next);
        }

        swiperBlock.addEventListener('touchstart', handleTouchStart, { passive: true });
        swiperBlock.addEventListener('touchmove', handleTouchMove, { passive: true });
        swiperBlock.addEventListener('touchend', handleTouchEnd, { passive: true });
        window.addEventListener('resize', init, { passive: true });

        let startX = null,
            startY = null,
            moveX = null,
            moveY = null,
            xDiff = null,
            yDiff = null,
            startTime = null,
            endTime = null,
            minX = Math.round(swiperBlock.clientWidth / 3),
            minY = Math.round(swiperBlock.clientHeight / 3),
            minTime = Math.round((minX + minY) / 2);

        function handleTouchStart(e) {
            const ftouch = e.touches[0];
            startX = ftouch.clientX;
            startY = ftouch.clientY;
            startTime = Math.round(e.timeStamp);
        }

        function handleTouchMove(e) {
            if (!startX || !startY) return false;
            const ftouch = e.touches[0];
            moveX = ftouch.clientX;
            moveY = ftouch.clientY;
        }

        function handleTouchEnd(e) {
            if (!startX || !startY || !moveX || !moveY) return false;
            endTime = Math.round(e.timeStamp);
            xDiff = moveX - startX;
            yDiff = moveY - startY;
            let timeDiff = endTime - startTime;

            if (touch) {
                if (Math.abs(xDiff) >= minX || Math.abs(yDiff) >= minY && timeDiff > minTime) {
                    if (Math.abs(xDiff) > Math.abs(yDiff)) {
                        if (xDiff > 0) prev();
                        else next();
                    } else {
                        if (yDiff > 0) 'Down';
                        else 'Up';
                    }
                }
            }
            reset();
        }

        function reset() {
            startX = null;
            startY = null;
            moveX = null;
            moveY = null;
        }

        function init() {
            if (count < 1) count = 1;
            if (count > 5) count = 5;
            minX = Math.round(swiperBlock.clientWidth / 3);
            minY = Math.round(swiperBlock.clientHeight / 3);
            minTime = Math.round((minX + minY) / 2);

            currentItem = 0;
            swiperItemsLength = swiperItems.length;
            width = (+window.getComputedStyle(swiperBlock).width.replace('px', '') / count);

            swiperItems.forEach(itm => {
                itm.style.width = width + 'px';
                itm.style.height = 'auto';
            })

            swiperTrack.style.width = `${width * swiperItemsLength}px`;
            swiperTrack.style.height = `auto`;
            swiperTrack.style.transform = `translateX(0)`;
        }

        function prev() {
            if (currentItem > 0) --currentItem;
            else currentItem = (swiperItemsLength - count);
            console.log(currentItem);
            slide(currentItem);
        }

        function next() {
            if (currentItem != (swiperItemsLength - count)) ++currentItem;
            else currentItem = 0;
            slide(currentItem);
        }

        function slide(current) {
            switch (current) {
                case current < 0:
                    swiperTrack.style.transform = `translateX(-${width * (swiperItemsLength - 1)}px)`;
                    break;
                case swiperItemsLength:
                    swiperTrack.style.transform = `translateX(0px)`;
                    break;
                default:
                    swiperTrack.style.transform = `translateX(-${width * current}px)`;
                    break
            }
        }
    }
};

export default swiper;