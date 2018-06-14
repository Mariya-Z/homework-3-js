
/*splitAndMerge("My name is John","!");
splitAndMerge("Hello World!",",")
*/
reverseWord(" A fun little challenge! ");

toCamelCase("the-stealth-warrior");
stringExpansion("3D2a5d2f");
stringExpansion('3d332f2a');
stringExpansion('abcde');

function reverseWord(str) {

  let pos = 0;
  let target = ' ';
  let result = '';

  while (true) {
    var foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
    if (foundPos == 0)
    {
      pos = 1;
      result = ' ';
      continue;
    }
    for (let i = foundPos - 1; i >= pos; --i){
      result +=  str[i] ;
    }
    result += ' ';
    pos = foundPos + 1;
  }
  // alert(result);
  return result;
}

function stringExpansion(str){
  let result = '';
  let rep = 1;
  let symbol = '';

  for (i = 0; i < str.length; ++i){
    if (isFinite(str[i])) {
      rep = str[i];
    }
    else {
      rep = +rep;
      symbol

      for (j = 0; j < rep; ++j){
        result += str[i];
      }
      rep = 1;
    }
  }
  // alert(result);
  return result;
}

function toCamelCase(str){
  let result;
  let word;

  if (str.indexOf('-'))
  {
    let wordsArr = str.split('-');
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
  }
  else if (str.indexOf('_'))
  {
    let wordsArr = str.split('_');
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
  }
  // alert(result);
  return result;
}


function splitAndMerge(str, sp) {

  let pos = 0;
  let target = ' ';
  let result = '';

  while (true) {
    var foundPos = str.indexOf(target, pos);
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
  // alert(result);
  return result;
}


