(function () {
    'use strict';
    let tabs = document.querySelectorAll('#tabs > ul > li > a');

    tabs.forEach(tab => {
        tab.addEventListener('click', selectTab);
    });


    function selectTab(event) {
        event.preventDefault();

        tabs.forEach(tab => {
            tab.removeAttribute('class');
        });

        event.target.className = 'active';

        let thisTab = event.target.getAttribute('href');
        let thisContent = document.querySelector(thisTab);


        let oldContent = document.querySelector('.visible');
        oldContent.className = 'visuallyHidden';

        oldContent.addEventListener('transitionend', function () {
            oldContent.className = 'hidden';
            thisContent.className = 'visible visuallyHidden';

            setTimeout(function () {
                thisContent.classList.remove('visuallyHidden');
            }, 200)
        }, {
            capture: false,
            once: true,
            passive: false
        })

    };
})();