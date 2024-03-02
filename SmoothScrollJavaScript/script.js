const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(function (eachLink) {
    eachLink.addEventListener('click', smoothScroll)
});

function smoothScroll(event) {
    event.preventDefault();
    const targetID = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetID);
    const sectionTop = Math.floor(targetSection.getBoundingClientRect().top) - 200;

    window.scrollBy({
        top: sectionTop,
        left: 0,
        behavior: "smooth"
    });

};

window.addEventListener('load', function () {
    const posts = this.document.querySelectorAll('section');
    let postTops = [];
    let pageTop;
    let counter = 1;
    let prevCounter = 1;
    let doneResizing;

    posts.forEach(function (post) {
        postTops.push(Math.floor(post.getBoundingClientRect().top + window.pageYOffset));


        window.addEventListener('scroll', function () {
            pageTop = window.pageYOffset + 250;

            if (pageTop > postTops[counter]) {
                counter++;
                console.log(`scrolling down ${counter}`);
            } else if (counter > 1 && pageTop < postTops[counter - 1]) {
                counter--;
            }

            if (counter !== prevCounter) {
                navLinks.forEach(function (eachLink) {
                    eachLink.removeAttribute('class');
                });

                const thisLink = this.document.querySelector(`nav ul li:nth-child(${counter}) a`);
                thisLink.className = 'selected';
                prevCounter = counter;
            };
        });
    });

    this.window.addEventListener('resize', function () {
        this.clearTimeout(doneResizing);
        doneResizing = this.setTimeout(function () {
            resetPagePosition();
        }, 500)
    });

    function resetPagePosition() {
        const thisLink = this.document.querySelector(`nav ul li:nth-child(${counter}) a`);
        
        posts.forEach(function (post) {
            postTops.push(Math.floor(post.getBoundingClientRect().top + window.pageYOffset));
        });

        const pagePosition = window.pageYOffset + 250;
        counter = 0;

        postTops.forEach(function (post) {
            if (pagePosition > post) {
                counter++;

            }
        });

        navLinks.forEach(function (eachLink) {
            eachLink.removeAttribute('class');
        });

        thisLink.className = 'selected';
    }
});