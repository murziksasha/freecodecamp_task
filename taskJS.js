


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


})