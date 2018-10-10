const copyArray = function (array){
  let copiedArray = [];
  for(let elementsIndex=0; elementsIndex < array.length; elementsIndex++){
    copiedArray[elementsIndex] = array[elementsIndex];
  }
  return copiedArray;
}
exports.copyArray = copyArray;
