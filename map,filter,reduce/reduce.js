//Soma Numeros

/*function NumerosSomados(padrao){
    return padrao.reduce(function(prev,current){
        console.log({prev});
        console.log({current});
        
        return prev + current;

    },0);
}

const atual = [5,8];

console.log(NumerosSomados(atual));*/


//Reduce com lista de array de objetos

const lista = [

{
    name: 'sabao em pó',
    preco: 15,
},

{
    name:'nescau',
    preco: 18,

},


{
    name:'margarina',
    preco: 14,
},


];

const SaldoCorrente = 100;

function AtualizaSaldo(SaldoCorrente, lista){
    return lista.reduce(function(prev,current,index){
        console.log('rodada', index+1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;



    }, SaldoCorrente);

}