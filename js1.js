
function splitAndMerge(str, sp) {
  let pos = 0;
  let target = ' ';
  let result = '';
  let foundPos;

  while (true) {
    foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
    for (let i = pos; i < foundPos - 1; ++i){
      result +=  str[i] + sp;
    }
    result += str[foundPos - 1] + ' ';
    pos = foundPos + 1;
  }

  for (let i = pos; i < str.length - 1; ++i)
  {
    result += str[i] + sp;
  }
  result += str[str.length - 1] + ' ';
  return result;
}

splitAndMerge("My name is John","!");
splitAndMerge("Hello World!",",");

function convert(obj){
  let arr = [];
  for (let key in obj){
    let arrItem = [];
    arrItem.push(key, obj[key]);
    arr.push(arrItem);
  }
  return arr;
}

let testObj = {
   name: 'Jeremy',
   age: 24,
   role: 'Software Engineer'
};

convert( testObj);

function toCamelCase(str){
  let result;
  let word;
  let wordsArr = str.replace(/(-|_)/g,' ').split(' ');

  for (i = 0; i < wordsArr.length; ++i)
  {
    if (i == 0) {
      result = wordsArr[0];
    }
    else {
        word = wordsArr[i];
        result += word[0].toUpperCase() + word.substr(1);
    }
  }
  return result;
}

toCamelCase("the-stealth-warrior");
toCamelCase("The_Stealth_Warrior");

function reverseWord(str) {
  let word = str.split(' ');
  let result = '';

  function reverse(str){
    let res = '';

    for (j = 0; j < str.length; ++j){
      res += str[str.length - j - 1];
    }
    return res;
  }

  for (let i = 0; i < word.length; ++i){
    if (word[i] != ''){
      result += reverse(word[i]) ;
    }
    result += ' ';
  }

  return result.slice(0, result.length - 1);
}

reverseWord(" A fun little challenge! ");


function stringExpansion(str){
  let result = '';
  let rep = 1;

  for (i = 0; i < str.length; ++i){
    if (isFinite(str[i])) {
      rep = str[i];
    }
    else {
      for (j = 0; j < rep; ++j){
        result += str[i];
      }
      rep = 1;
    }
  }
  return result;
}

stringExpansion("3D2a5d2f");
stringExpansion('3d332f2a');
stringExpansion('abcde');




