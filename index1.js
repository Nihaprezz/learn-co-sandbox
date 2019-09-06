function doTo5(anything){
  return anything(5);
  //anything(5) will actually be divideby10ByN(5);
  //and will actually be appendToHello(5);
}

function divide10ByN(n){
  return 10/ n;
}

console.log(doTo5(divide10ByN));

function appendToHello(s){
  return `Hello, ${s}!`
}

console.log(doTo5(appendToHello));

function somethingExpensive(callback){
  //fetching a bajillion websites
  //then pass their data to callback
  //suppose data has been defined already
  callback(data)
}