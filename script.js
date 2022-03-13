`use strici`;

// const firstName = "Tigran";
// let job = "JS delevoper";
// const birthYear = 1986;
// let currentYear = 2022;

// const synthese =
//   "My name is " +
//   firstName +
//   ". I'am a " +
//   job +
//   " I am" +
//   (currentYear - birthYear) +
//   " years old.";

// alert(synthese);

// const newSynthese = `My name is ${firstName}. I am a ${job}. I am ${
//   currentYear - birthYear
// } years old`;

// // alert(newSynthese);

// let money = prompt(`Ples imput money summ`);
// let tip;
// // if (50 <= money && money <= 300) {
// //   tip = money * 0.15;
// // } else {
// //   tip = money * 0.2;
// // }

// // switch (money) {
// //   case 50-300:
// //     tip = money * 0.15;
// //     break;
// //   default:
// //     tip = money * 0.2;
// // }
// money >= 50 && money <= 300 ? (tip = money * 0.15) : (tip = money * 0.2);

// alert(`The payed maney is ${money} USD, and the tip is ${tip} USD`);

// const yearOfRetirement = (birthDay) => {
//   const age = 2022 - birthDay;
//   const retirement = 63 - age;
//   return retirement;
// };
// console.log(yearOfRetirement(1986));

// let random = Math.round(Math.random() * 10) + 1;

// while (random !== 11) {
//   console.log(`----Your number is ${random}`);
//   random = Math.round(Math.random() * 10) + 1;
// }

// let test = 5;
// while (test >= 1) {
//   console.log(`Current number is ${test}`);
//   test--;
// }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let total = [];

// for (let i = 0; i <= bills.length - 1; i++) {
//   tips[i] = calcTip(bills[i]);
//   total[i] = calcTip(bills[i]) + bills[i];
// }
// console.log(tips, total, bills);

let averageBils = Number([]);
let averageTips = Number([]);
// const calcAverage = function (i) {
//   average.pop(average[i] + bills[i]);
// };

const summ = function (arr) {
  let totalsum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalsum += arr[i];
  }
  return totalsum / arr.length;
};

// console.log(summ(2, 4, 2));

// console.log(summ(bills));
// console.log(summ(tips));
// console.log(summ(total));

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(`Hello world`);

// Brbrbrbbrbr
