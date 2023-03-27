function split(wholeArray) {
  let mitad = Math.round(wholeArray.length / 2);

  let firstHalf = wholeArray.splice(0, mitad);
  //Con splice ya corte el array asi que en secondHalf solo necesito guardar el restante
  let secondHalf = wholeArray;

  return [firstHalf, secondHalf];
}
