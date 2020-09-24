 'use strict';
 let sss = [1, 2, 3, 4, 5, 6, 7];

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
 massmin(sss);
 console.log(sss);