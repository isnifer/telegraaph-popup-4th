(function () {

    window.$ = function (selector, el) {
        if (!el) {el = document;}
        return (typeof document.querySelector !== 'undefined') ? el.querySelector(selector) : document.getElementByClassName(selector)[0];
    };

    window.$$ = function (selector, el) {
        if (!el) {el = document;}
        return (function () {
            if (typeof document.querySelectorAll !== 'undefined') {
                var data = el.querySelectorAll(selector);
            } else {
                data = document.getElementByClassName(selector.substring(1, selector.length));
            }
            return Array.prototype.slice.call(data);
        }());
    };

    var popup = $('.popup'),
        button = $('.b-main__button'),
        // buttons = $$('.b-main__button'),
        closeElements = $$('.popup__close');

    button.addEventListener('click', function () {
        popup.classList.toggle('popup_state_visible');
    }, false);

    // Example for 1000 buttons  
    /* for (var j=0; j < buttons.length; j++) {
        buttons[j].addEventListener('click', function () {
            popup.classList.toggle('popup_state_visible');
        }, false);
    } */

    for (var i=0; i < closeElements.length; i++) {
        closeElements[i].addEventListener('click', function (e) {
            if (e.target === this) {
                e.preventDefault();
                popup.classList.toggle('popup_state_visible');
            }
        }, false);
    }

}());