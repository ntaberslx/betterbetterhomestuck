// ==UserScript==
// @name         Better Better Homestuck
// @version      1.0
// @description  try to take over the world!
// @author       Natalie Taber
// @include      https://www.homestuck.com/story/*
// @include      https://www.homestuck.com/map/story*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', (event) => {
        var as = document.getElementsByTagName('A');
        var pageNum = +window.top.location.href.split('#')[1];
        for (var j = as.length; j > 0; j--){
            if (as[j] && as[j].pathname && as[j].pathname.startsWith('/story')){
                var asjPathNum = +as[j].pathname.split('/')[2];
                if (asjPathNum <= pageNum){
                    console.log('last page was '+asjPathNum);
                    as[j].style = 'background-color: red;';
                    as[j].scrollIntoView({
                        behavior: 'smooth'
                    });
                    break;
                }
            }
        }
    });

    var ps = document.getElementsByTagName('P');
    for (var i=0; i < ps.length; i++) {
        ps[i].innerHTML = ps[i].innerHTML.replace(/fag/ig, '***');
        ps[i].innerHTML = ps[i].innerHTML.replace(/retard/ig, '******');
        ps[i].innerHTML = ps[i].innerHTML.replace(/cripple/ig, '*******');
        ps[i].innerHTML = ps[i].innerHTML.replace(/#FFFFFF/g, '#000000');
    }


    document.onkeyup = (e) => {
        if (e.key === 'Meta' || e.key === 'Control') {
            document.getElementsByClassName('o_chat-log-btn')[0].click();
        } else if (e.shiftKey && e.which === 38) {
            var pageNum = window.top.location.href.split('/')[4];
            window.top.location.href = 'https://www.homestuck.com/map/story#'+pageNum;
        } else if (e.key === 'ArrowRight') {
            var pageNumInc = +window.top.location.href.split('/')[4] + 1;
            if (pageNumInc < 8130){
                window.top.location.href = 'https://www.homestuck.com/story/'+pageNumInc;
            }
        } else if (e.key === 'ArrowLeft') {
            var pageNumDec = +window.top.location.href.split('/')[4] - 1;
            if (pageNumDec > 0){
                window.top.location.href = 'https://www.homestuck.com/story/'+pageNumDec;
            }
        }
    };

})();
