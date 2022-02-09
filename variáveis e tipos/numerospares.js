function substituirPares(array){
    if(!array) return -1;
    if(!array.length) return -1;


    for(let i=0; i<array.length; i++){
        if(array[i]=== 0){
            console.log("Você já é zero!");

        }else if(array[i] % 2 === 0 ){
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;

        }

    }

    return array;

}

let arr=[5,10,15,19,22,24,31,33,56];
console.log(substituirPares(arr));