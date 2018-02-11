export function ObjToArr(Obj) {
    return Object.keys(Obj).map(key => Obj[key])
}

export function unique(arr) {
    var obj = {};
  
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i];
      obj[str] = true; // запомнить строку в виде свойства объекта
    }
    return Object.keys(obj); // собрать ключи перебором 
}

export function array_compare(a, b) {
  if(a.length !== b.length){
    return false;}
  for(var i = 0; i < a.length; i++){
    if(a[i] !== b[i]){
      return false;
    }
  }
  return true;
}

  