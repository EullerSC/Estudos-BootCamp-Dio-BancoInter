function ApenasPares(padrao){
    return padrao.filter(callback);

}

function callback(novo){
    return novo % 2 == 0;

}

const atual = [5,7,8,4,3,1,10,12];

console.log(ApenasPares(atual));