
exports.min = function min (array) {
  if (array == underfined || Array.isArray(array) === false){
    return 0;
  } 

  var m = array[0];
    for (let i = 0; i < array.length; i++){
      if (array[i] < m){
        m = array[i];
      }
    }
    return m;     
}

exports.max = function max (array) {
  if (array == underfined || Array.isArray(array) === false){
    return 0;
  } 
  var n = array[0];
  for (let i = 0; i < array.length; i++){
    if (array[i] > n){
      n = array[i];
    }
  }
  return n;
}

exports.avg = function avg (array) {

  if (array == underfined || Array.isArray(array) === false){
    return 0;
  } 

  var s = 0;
  var a = 0;
for (let i = 0; i < array.length; i++){
    s = s + array[i];
  }
  a = s / array.length;
  return a;
}

