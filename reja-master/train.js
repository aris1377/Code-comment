// u 2ta string parametr ega bolsin, 
//hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true

function checkContent(a, b) {
  return a.split("").sort().join("") === b.split("").sort().join("");
}
console.log(checkContent("mitgroup", "gmtiprou"));

//TASK-C
// Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
// Hamda classning quyidagdek 3'ta metodi bo'lsin:

// 1) qoldiq
// 2) sotish
// 3) qabul

// Har bir metod ishga tushgan vaqtda log qilinsin
// MASALAN:
// const shop = new Shop(4, 5, 2)

// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!

// const moment = require("moment");
// class Shop {
//   //state
//   non;
//   lagmon;
//   cola;
//   //constructor
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }
//   timeUpdate() {
//     return moment().format("HH:mm");
//   }
//   //method
//   qoldiq() {
//     const time = this.timeUpdate();
//     console.log(`hozir ${time}`);
//     console.log(
//       `${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola`
//     );
//   }
//   qabul(box, amount) {
//     const time = this.timeUpdate();
//     console.log(`hozir ${time}`);
//     this[box] += amount;
//     console.log(
//       `${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola`
//     );
//   }
//   sotish(box, amount) {
//     const time = this.timeUpdate();
//     console.log(`hozir ${time}`);
//     this[box] -= amount;
//     console.log(
//       `${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola`
//     );
//   }
// }
// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// shop.sotish("non", 3);
// shop.qabul("cola", 4);

//Task B
//1 ta str_Num parametr qabul qiladigan countDigits function ochamiz
//let start=0 dan boshlanadigan variable ochamiz
//startdan boshalb str_Num ni oxirigacha forda aylantiramiz
//bizga raqamlarni sanab borish uchun box quti ochib olamiz
//va forda aylanib 9 dan kichik kelgan raqamlarni usha qutida yigamiz
// function countDigits(str_Num) {
//   let box = 0;
//   for (let start = 0; start <= str_Num.length; start++){
//     if (str_Num[start] <= 9) {
//       box++;
//     }
//   }
//   return box;
// };
// console.log(countDigits("ad2a54y79wet0sfgb9"));

// //Task a
// // 2ta paramatrga ega function tuzamiz
// // parametr-2 ni ichida parametr-1 nechta ekanligini sanash uchun
// // for ichiga 0 dan boshlanadigan let variable ochamiz
// // 0 dan paramentr-2 stringini uzunligigacha aylantiramiz
// // let number uchamiz(sanash uchun)
// // if ni ichida parametr-2 ni keyini parametr-1 ga tenglshtirib bir xillarini number sanab ketadi
// const count_letter = (letter, string) => {
//   let number = 0;
//   for (let start = 0; start < string.length; start++) {
//     if (string[start] === letter) {
//       number++;
//     }
//   }
//   return number;
// };
// console.log(count_letter("e", "engineer"));

//CALLBACK function with setTimeout

// console.log("Jeckma maslaxatlari");
// const list = [
//   "Yaxshi talaba bo'ling", //10-20
//   "To'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//   "O'zingizga ishlashni boshlang", //30-40
//   "Siz kuchli bo'lgan narsalar qilimg", //40-50
//   "Yoshlarga investitsya qiling", //50-60
//   "Endi dam oling foydasi yo'q", //60
// ];

// function masalaxatBering(a, callback) {
//   if (typeof a !== "number") callback("insert number", "null"); //null - data
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }
// console.log("passed here 0");
// masalaxatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

//CALLBACK function with setInterval
// console.log("Jeckma maslaxatlari");
// const list = [
//   "Yaxshi talaba bo'ling", //10-20
//   "To'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//   "O'zingizga ishlashni boshlang", //30-40
//   "Siz kuchli bo'lgan narsalar qilimg", //40-50
//   "Yoshlarga investitsya qiling", //50-60
//   "Endi dam oling foydasi yo'q", //60
// ];

// function masalaxatBering(a, callback) {
//   if (typeof a !== "number") callback("insert number", "null"); //null - data
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }
// console.log("passed here 0");
// masalaxatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

//define
//ASYC function
// async function masalaxatBering(a) {
//   if (typeof a !== "number") throw("insert number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[0];
//   else if (a > 30 && a <= 40) return list[0];
//   else if (a > 40 && a <= 50) return list[0];
//   else if (a > 50 && a <= 60) return list[0];
//   else {
//     return new Promise((reselve, reject) => {
//       setTimeout(() => {
//         reselve(list[5]);
//       }, 5000);
//     });
//   }
// }

//call
//THEN AND CATCH
// console.log("passed here 0");
// masalaxatBering(25).then(data => {
//   console.log("javob:", data);
// }).catch(err => {
//   console.log('ERROR:', err);
// })
// console.log("passed here 1");
//bu qismida sync function ishga tushgandan keyin asyc ishga tushyapti

//ASYCN call qismi
// async function run() {
//   let javob = await masalaxatBering(25);
//   console.log(javob);
//   javob = await masalaxatBering(70);
//   console.log(javob);
//   javob = await masalaxatBering(40);
//   console.log(javob);
// }
// run();
//bu bizga variablarni qiymatini olmaguncha keyingisiga otmaslikni belgilab beradi
