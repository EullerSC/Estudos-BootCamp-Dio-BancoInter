const meuArray = [30,30,40,5,223,2049,3034,5];

function valoresUnicos(arr){
    const mySet = new Set(arr);
   //utilizando a técnia spread para criar um novo array único.
    return[...mySet];


}

console.log(valoresUnicos(meuArray));