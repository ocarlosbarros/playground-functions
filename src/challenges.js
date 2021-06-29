// Desafio 1
function compareTrue(firstValue, secondValue) {
  let result = false;
  if(typeof firstValue === 'boolean' && typeof secondValue === 'boolean'){
    if(firstValue === true && secondValue === true){
      result = true;
    }
  }else{
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let sentenceArray;
  sentenceArray = sentence.split(" ");
  return sentenceArray;  
}
// Desafio 4
function concatName(arr) {
  let firstPosition;
  let lastPosition;
  for (let index = 0; index < arr.length; index += 1) {
    if(index === 0){
      firstPosition = arr[index];
    }else if( index === arr.length -1){
      lastPosition = arr[index];
    }
  }
  return `${lastPosition}, ${firstPosition}`
}
// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
