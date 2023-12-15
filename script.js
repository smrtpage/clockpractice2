// let offset = 0;
// const sliderLine = document.querySelector('.slider-line');

// document.querySelector('.slider-next').addEventListener('click', function(){
//     offset = offset + 256;
//     if (offset > 768) {
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + 'px';
// });

// document.querySelector('.slider-prev').addEventListener('click', function () {
//     offset = offset - 256;
//     if (offset < 0) {
//         offset = 768;
//     }
//     sliderLine.style.left = -offset + 'px';
// });

// let arr = "hello";

// function reverse(arr){
//     arr = arr.split("");
//     arr = arr.reverse();
//     arr = arr.join("");
//     console.log(arr);
// }

// reverse(arr);

// let arr = [6347, 41, 6, 5, 23, 0];

// function FindMax(arr){
//     let max = arr[0];
//     for(let num of arr){
//         if(max < num){
//             max = num;
//         }
//         return max;
//     }
// }

// console.log(FindMax(arr));

// let cars = ["BMW", "Honda", "Ford", "Toyota", "Mitsubisi"];
// let numbers = [1, 1, 1, 1, 2, 2, 3, 6, 7, 7, 6, 2, 3, 73];
// let nums2 = [1, 4, 2, 478, 73, 8];

// let new_arr = new Array(10).fill(1);
// let rand_num = nums2[Math.floor(Math.random() * (nums2.length))];

// console.log(rand_num);

// var el_down = document.getElementById("geeks");

// function generateP(){
//     var pass = '';
//     var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
//     'abcdefghijklmnopqrstuvwxyz0123456789@#$';

//     for(let i; i <= 8; i++){
//         var char = Math.floor(Math.random() * str.length + 1);

//         pass += str.charAt(char);
//     }

//     return pass
// }

// function gfg_Run() {
//     el_down.innerHTML = generateP();
// }

// function ChangeColor(){
//     document.body.style.backgroundColor =
//     "rgb(" + Math.round(Math.random() * 256) + ","
//      + Math.round(Math.random() * 256) + "," + Math.round(Math.random() * 256) + ")";

// const btn = document.querySelectorAll(".btn-box");
// const box = document.querySelector(".box");
// const generateBtn = document.getElementById("generate-btn");
// const boxSection = document.querySelector(".box-section");

// generateBtn.addEventListener("click", function () {
//   let element = document.createElement("div");
//   boxSection.appendChild(element);
//   element.classList.add("box");
//   let btnchild = document.createElement("button");
//   element.appendChild(btnchild);
//   btnchild.classList.add("btn-box");
//   btnchild.innerText = "X";
//   element.style.backgroundColor =
//     "rgb(" +
//     Math.round(Math.random() * 256) +
//     "," +
//     Math.round(Math.random() * 256) +
//     "," +
//     Math.round(Math.random() * 256) +
//     ")";

//   btnchild.addEventListener("click", () => {
//     element.remove();
//   });
// });

// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", () => {
//     btn[i].parentElement.remove();
//   });
// }

// const boxSection = document.querySelector(".box-section");
// const generateBtn = document.getElementById("generate-btn");
// const deleteAllBtn = document.getElementById("deleteAllBtn");
// const noBoxesText = document.getElementById("no-boxes");

// deleteAllBtn.addEventListener("click", () => {
//   const box = document.querySelectorAll(".box");

//   for (let i = 0; i < box.length; i++) {
//     box[i].remove();
//   }
// });

// generateBtn.addEventListener("click", () => {
//   const newBox = createBox();
//   boxSection.appendChild(newBox);
// });

// function createBox() {
//   const box = document.createElement("div");
//   box.classList.add("box");
//   box.style.backgroundColor = generateRandomColor();
//   box.innerText = "Box number " + Math.floor(Math.random() * 100) + 1;
//   box.style.color = "#fff";
//   box.style.fontSize = "22px";

//   const deleteBtn = document.createElement("button");
//   deleteBtn.classList.add("btn-box");
//   deleteBtn.innerText = "X";
//   deleteBtn.addEventListener("click", () => {
//     box.remove();
//   });

//   box.appendChild(deleteBtn);
//   return box;
// }

// function generateRandomColor() {
//   return `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(
//     256
//   )})`;
// }

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// const deleteBtns = document.querySelectorAll(".btn-box");
// deleteBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     btn.parentElement.remove();
//   });
// });

// let value;

// value = Number(undefined);

// console.log(value);
// console.log(typeof value);

// const arr = [9, 4, 3, 5, 10, 49];

// function FindMax() {
//   let max = Math.min(...arr);
//   return max;
// }

// console.log(FindMax(arr));

// const arr = [9, 4, 3, 5, 10, 49, 4];

// function sumOfArr(arr) {
//   let sum = 0;
//   arr.forEach((n) => (sum += n));
//   return sum;
// }

// console.log(sumOfArr(arr));

// let mult = 1;

// for (let i = 1; i <= 5; i++) {
//   mult *= i;
// }

// console.log(mult);

// document.getElementById("in").oninput = function () {
//   const offset = 3;
//   let str = this.value;
//   let out = "";
//   for (let i = 0; i < str.length; i++) {
//     let code = str.charCodeAt(i);
//     code += offset;
//     out += String.fromCharCode(code);
//   }
//   document.getElementById("out").innerHTML = out;
// };

// const arr = [2, -6, 5, -2];

// arr.sort(function (a, b) {
//   return b - a;
// });

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     arr.pop();
//   }
// }

// console.log(arr);

let time = document.querySelector(".time");

function getAllTime() {
  const now = new Date();

  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());

  time.textContent = `${hours}:${minutes}:${seconds}`;
}

function formatTime(time) {
  return time >= 10 ? time : `0${time}`;
}

getAllTime();
setInterval(getAllTime, 1000);
