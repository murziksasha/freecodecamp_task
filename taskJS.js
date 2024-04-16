


window.addEventListener('DOMContentLoaded', () => {

  
function createFilledArray(startValue, length ) {
  const newArray = [];
  for (let i = 0; i < length; i++) {
      newArray.push(startValue + i);
  }
  return newArray;
}

console.log(createFilledArray(1, 10));
console.log(createFilledArray(2, 5));

function makeNegative(num) {
  if(num < 0) return num;
  if(num === 0 || num === -0) return 0;
  return num * -1;
}

// console.log(makeNegative(1));    // return -1
// console.log(makeNegative(-5));   // return -5
// console.log(makeNegative(0));    // return 0
// console.log(makeNegative(0.12)); // return -0.12

function findNeedle(haystack) {
  if(!haystack.length)return;
const superItem =  "needle";
let resultPosition = 0;
haystack.map((item, i) => {
  if(item !== superItem) return;
  resultPosition = i;
});
return `found the needle at position ${resultPosition}`
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));



})