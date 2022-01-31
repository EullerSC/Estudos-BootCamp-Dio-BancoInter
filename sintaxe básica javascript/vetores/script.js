// o que são vetores ou arrays

/*let array = ['string' , 1 , true];
console.log(array);*/

// pode guardar vários tipos de dados.

let array = ['string' , 1 , true, ['array1'],['array2'],['array3'],["array4"] ];
console.log(array);

//foreach
/*array.forEach(function(item,index){console.log(item,index)});*/

/*array.push([]);
console.log(array);*/

/*array.pop();
console.log(array);*/

/*array.shift();
console.log(array);*/

/*array.unshift('novo item');
console.log(array);*/

/*
console.log(array.indexOf(true));*/

/*array.splice(0,3);
console.log(array);*/

/*let novoArray = array.slice(0,3);
console.log(novoArray);*/

let object = {string: 'string', boolean:true , array: ["array"], objectInterno:{objectInterno:'objeto interno'}}

console.log(object.objectInterno);

var string = object.array;
console.log(string);

var TorF = object.boolean;
console.log(TorF);

var {string,objectInterno}= object;
console.log(string,objectInterno);