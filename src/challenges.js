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
function footballPoints(wins, ties) {
  totalPoints = 0;
  totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}
// Desafio 6
function highestCount(arrayNumber) {
  let biggest = arrayNumber[0];
  let count = 0;
  //Verifica o maior
  for(let number of arrayNumber){
    if(number > biggest){
      biggest = number;
    }
  }
  //Conta quantas vezes o maior apareceu
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if(biggest === arrayNumber[index])
    count += 1;
  }
  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = 0;
  let distanceCat2 = 0;
  distanceCat1 = cat1 - mouse;
  distanceCat2 = cat2 - mouse;

  //Verifica se os números não são negativos para converte-los
  if(distanceCat1 < 0){
    distanceCat1 *= -1; 
  }else if (distanceCat2 < 0){
    distanceCat2 *= -1; 
  }

  //Verifica quem esta mais próximo do mouse
  if(distanceCat1 === distanceCat2){
    return 'os gatos trombam e o rato foge';
  }else if(distanceCat1 < distanceCat2){
    return 'cat1';
  }else{
    return 'cat2';
  }
}
// Desafio 8
function fizzBuzz(arrNumber) {
  result = [];
  for (let index = 0; index < arrNumber.length; index += 1) {
    if( arrNumber[index] % 3 === 0 && arrNumber[index] % 5 === 0){
      result.push('fizzBuzz');
    }else if(arrNumber[index] % 3 === 0){
      result.push('fizz');
    }else if (arrNumber[index] % 5 === 0){
      result.push('buzz');
    }else{
      result.push('bug!');
    }
  }
  return result;
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
