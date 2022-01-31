var jogador1 = 0;
var jogador2 = 1;
var placar;

// if, else if, if aninhado, if ternário


/*if(jogador1 != -1)*/  

//if ternário
/*jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos'):
console.log('Jogadores Inválidos');
    //usando if
    if(jogador1 > 0 && jogador2==0)
    {
        console.log('jogador 1 marcou um ponto');
        placar = jogador1 > jogador2;
        console.log('jogador1 é melhor que jogador 2');
    }       
        // usando else if
        else if(jogador2 > 0 && jogador1 == 0)
        {
            console.log('jogador 2 marcou um ponto');
            placar = jogador2 > jogador1;
            
        }
        //usando else
        else
        {
            console.log('ninguém marcou ponto');
        }


        //usando switch case
        switch(placar){
            case placar = jogador1 > jogador2:
                    console.log('jogador 1 ganhou');
                    break;
            case placar = jogador2 > jogador2:
                console.log('jogador 2 ganhou');
                break;
            default:
            console.log('ninguém ganhou');

        }*/


        //estruturas de repetição

        let array = ['valor1', 'valor2', 'valor3', 'valor4','valor5'];

        let object = {propriedade1: 'valor1', propriedade2:'valor2', propriedade3:'valor3'}

        //for - executa uma instrução até que ela seja falsa

        /*for(let indice = 0; indice< array.length; indice++){
            console.log(indice);
        }*/

        // for/in executa a repetição através de uma propriedade
        //com array

        /*for (let i in array){
            console.log(i);
        }*/

        // com object

       /* for(i in object){
            console.log(i);
        }*/

        // for/of

       /* for(i of array){
            console.log(i);
        }*/


        //While

        var a = 0;
        /*while(a<10){
            a++;
            console.log(a);
        }*/

        do {
            a++
            console.log(a);
        }while(a<10);