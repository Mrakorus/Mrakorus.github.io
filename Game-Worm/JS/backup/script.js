window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let Worm = document.querySelector(".head"),
        fon = document.querySelector(".fon-block"),

        direct = 3,
        tox = 0,
        toy = 0,
        step = 20,
        trackx = [0],
        tracky = [0],
        trackd = [3],
        long = 1,
        numfoods = 0,
        xfoods = [],
        yfoods = [];


    Worm.style.marginLeft = '0px';
    Worm.style.marginTop = '0px';
    Worm.style.transform = "rotate(0deg)";

    function right() {
        tox += step;
        Worm.style.marginLeft = tox + 'px';
        direct = 3;
        Worm.style.transform = "rotate(0deg)";
    }

    function down() {
        toy += step;
        Worm.style.marginTop = toy + 'px';
        direct = 0;
        Worm.style.transform = "rotate(90deg)";
    }

    function left() {
        tox -= step;
        Worm.style.marginLeft = tox + 'px';
        direct = 1;
        Worm.style.transform = "rotate(180deg)";

    }

    function top() {
        toy -= step;
        Worm.style.marginTop = toy + 'px';
        direct = 2;
        Worm.style.transform = "rotate(270deg)";
    }

    while (numfoods < 10) {
        getFoods();
        numfoods++;
    }

    function massmin(mass) {
        let mass1 = [];
        for (let i = 0; i < mass.length; i++) {
            mass1.push(mass[i]);
        }
        for (let i = mass.length - 1; i >= 0; i--) {
            mass[i] = mass1[i + 1];
        }
        mass.pop();
    }
    poin();
    addEventListener('keydown', function (e) {

        function move() {


            if (e.keyCode == 83) {
                direct = 0;
            } else if (e.keyCode == 68) {
                direct = 3;
            } else if (e.keyCode == 65) {
                direct = 1;
            } else if (e.keyCode == 87) {
                direct = 2;
            } else if (e.keyCode == 69) {
                // let all = document.querySelectorAll(".head, .body");

                addbody();
            } else if (e.keyCode == 82) {
                getFoods();
            } else {
                console.log("Error");
                console.log(typeof (e.keyCode));
            }

        }

        move();

        //s83 d68 a65 w87 e69 r82
    });
    // clearInterval(tim);
    let tim = setInterval(() => {


        while (numfoods < 10) {
            getFoods();
            numfoods++;
        }
        out();
        switch (direct) {
            case (1):
                left();
                break;
            case (2):
                top();
                break;
            case (3):
                right();
                break;
            case (0):
                down();
                break;
            default:
                console.log("Error");
                break;
        }

        trackd.push(direct);
        trackx.push(tox);
        tracky.push(toy);

        // console.log(trackx);
        // console.log(tracky);
        // console.log(tox);
        // console.log(toy);




        movebody();
        eatfood();
        poin();
        if (trackx.length > (long + 1)) {
            massmin(trackx);
            massmin(tracky);
            massmin(trackd);
        }
        // console.log(xfoods);
    }, 500);

    function getFoods() {

        let foods = document.createElement("div"),
            sizey = fon.clientHeight,
            sizex = fon.clientWidth,
            rounx = Math.round(Math.random() * 1000) % sizex,
            rouny = Math.round(Math.random() * 1000) % sizey;
        while (1) {
            rounx++;
            if ((rounx % 20) == 0) {
                break;
            }
        }
        while (1) {
            rouny++;
            if ((rouny % 20) == 0) {
                break;
            }
        }
        if (rounx == sizex) {
            rounx -= 20;
        }
        if (rouny == sizey) {
            rouny -= 20;
        }
        xfoods.push(rounx);
        yfoods.push(rouny);
        foods.classList.add("food");
        foods.style.marginLeft = rounx + "px";
        foods.style.marginTop = rouny + "px";
        fon.appendChild(foods);


    }

    function eatfood() {
        for (let i = 0; i <= xfoods.length; i++) {
            if (tox == xfoods[i] && toy == yfoods[i]) {

                xfoods.splice(i, 1);
                yfoods.splice(i, 1);

                delbody(i);
                addbody();
                long++;
            }
        }
    }

    function delbody(i) {
        let numbbod = document.querySelectorAll(".food");
        fon.removeChild(numbbod[i]);
        numfoods--;

    }

    function addbody() {
        let body = document.createElement("div"),

            coorx = trackx[trackx.length - 2],
            coory = tracky[tracky.length - 2];
        body.classList.add("body");

        body.style.marginLeft = coorx + "px";
        body.style.marginTop = coory + "px";
        fon.appendChild(body);

    }

    function movebody() {
        let bodies = document.querySelectorAll(".body");
        if (bodies != 0) {
            for (let i = 0, n = 2; i <= bodies.length - 1; i++, n++) {
                bodies[i].style.marginLeft = trackx[trackx.length - n] + 'px';
                bodies[i].style.marginTop = tracky[tracky.length - n] + 'px';

            }
            eatitself(bodies);
        }

    }

    function out() {

        // console.log(all);
        if (tox >= fon.clientWidth - step && direct == 3) { //(fon.clientWidth  - step)
            tox = -20;
            Worm.style.marginLeft = tox + 'px';
            // direct = 3;
            Worm.style.transform = "rotate(0deg)";
        }
        if (tox <= 0 && direct == 1) {
            tox = fon.clientWidth;
            Worm.style.marginLeft = tox + 'px';
            // direct = 1;
            Worm.style.transform = "rotate(180deg)";
        }
        if (toy >= (fon.clientHeight - step) && direct == 0) {
            toy = -20;
            Worm.style.marginTop = toy + 'px';
            // direct = 0;
            Worm.style.transform = "rotate(90deg)";
        }
        if (toy <= 0 && direct == 2) {
            toy = fon.clientHeight;
            Worm.style.marginTop = toy + 'px';
            // direct = 2;
            Worm.style.transform = "rotate(270deg)";
        }

    }

    function eatitself(bods) {
        for (let i = 0; i <= bods.length - 1; i++)
            if (tox == trackx[trackx.length - (i + 2)] && toy == tracky[tracky.length - (i + 2)]) {
                for (let g = i; g <= bods.length - 1; g++) {
                    fon.removeChild(bods[g]);
                    long--;
                }
            }
    }

    function poin() {
        let points = document.querySelector(".points");
        // points.style.wigth = '100px';

        points.innerHTML = long;
        fon.appendChild(points);
    }
    

});