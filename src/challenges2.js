// Desafio 10
function techList(techList, name) {
  if(techList.length === 0){
    return 'Vazio!';
  }
  const namedTechList = [];
  for (let index = 0; index < techList.length; index += 1) {
    namedTechList.push({
      tech:techList[index],
      name:name
    });
  }
  /**
   * @param sort -> uma função que compara dois objetos
   * @return numero negativo se techA < techB ou numero positivo se techB < techA ou 0 se iguais
   * @source https://pt.stackoverflow.com/questions/46600/como-ordenar-uma-array-de-objetos-com-array-sort
   */
  namedTechList.sort(function(techA,techB){
    return techA.tech < techB.tech ? -1 : techA.tech > techB.tech ? 1 : 0;
  });

  return namedTechList;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Bruce'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
