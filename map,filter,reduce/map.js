//uso do map com this

/*const maca = {
    value: 3,
};

const laranja = {
    value: 5,
};


function mapComThis(num,thisArg){
    return num.map(function(novo){
    return novo*this.value;
    
        } ,thisArg );

}

const padrao = [6,9];

console.log(mapComThis(padrao,maca));
console.log(mapComThis(padrao,laranja));*/

// map sem o uso do this

function mapSemThis(atual){
    return atual.map(function(novo){
    return novo*2

    } );

}

const padrao = [6,12,4,3,9,28,44];

console.log('novo array' , mapSemThis(padrao));

console.log(padrao);