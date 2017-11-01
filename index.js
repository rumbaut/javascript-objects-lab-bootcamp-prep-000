var recipes = {
  1:'asdasd'
};
const dog = ['fid','as','apopop'];
dog.length = 1;
console.log(dog);
//console.log(recipes[1]);
function updateObjectWithKeyAndValue(object, key, value){
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
