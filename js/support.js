// Numero random tra max e min
function getRnd(min, max){

  var minRnd = min;
  var maxRnd = max - minRnd + 1;

  var rnd = parseInt(Math.floor(Math.random() * maxRnd) + minRnd);
  return rnd;
}

// quantity di numeri random diversi tra un numMin e un numMax in un array
function getRnds(numMin, numMax, quantity){
  var numRnds = [];

  while (numRnds.length < quantity){
    var numRnd = getRnd(numMin, numMax);
    if (!numRnds.includes(numRnd)){
      numRnds.push(numRnd);
    }
  }

  return numRnds;
}

// Verifico se il numero è pari o dispari
function isPair(value){
  if (value % 2 == 0){
    return true;
  } else {
    return false;
  }
}

// Verifico se una parola è palindroma
function isPalindrom(str){
  var reverseStr = str.toLowerCase().split('').reverse( ).join('');

  if (str == reverseStr){
    return true;
  } else {
    return false;
  }
}
