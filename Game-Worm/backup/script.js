window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let Worm = document.querySelector(".head"),
        fon = document.querySelector(".fon-block"),
        direct = 3,
        tox = 0,
        toy = 0,
        step = 20;
    console.log(Worm);
    console.log(fon);
    console.log(tox);

    Worm.style.marginLeft = '0px';
    Worm.style.marginTop = '0px';

    function right() {
        tox += step;
        Worm.style.marginLeft = tox + 'px';
        direct = 3;
    }

    function top() {
        toy += step;
        Worm.style.marginTop = toy + 'px';
        direct = 0;
    }

    function left() {
        tox -= step;
        Worm.style.marginLeft = tox + 'px';
        direct = 1;
    }

    function down() {
        toy -= step;
        Worm.style.marginTop = toy + 'px';
        direct = 2;
    }

    console.log(tox);
    addEventListener('keydown', function (e) {
        function move() {
            if (e.keyCode == 83) {
                return top();
            } else if (e.keyCode == 68) {
                return right();
            } else if (e.keyCode == 65) {
                return left();
            } else if (e.keyCode == 87) {
                return down();
            } else {
                console.log("Error");
                console.log(typeof (e.keyCode));
            }
        }
        move();
        //s83 d68 a65 w87
    });
    // clearInterval(tim);
    let tim = setInterval(() => {
        if (direct == 1) {
            left();
        } else if (direct == 2) {
            down();
        } else if (direct == 3) {
            right();
        } else if (direct == 0) {
            top();
        } else {
            console.log("Error");
        }
    }, 100000);
});