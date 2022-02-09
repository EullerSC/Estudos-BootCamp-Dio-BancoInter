const alunos = [
{
    nome: 'Paulo',
    nota: 5,
    turma: '1b',
    

}, 

{
    nome:'Virginia',
    nota:3,
    turma:'1b',

},

{
    nome:'Carlos',
    nota:6,
    turma:'1b'

},


{

    nome:'Amanda',
    nota:3,
    turma:'1b',
}


];


function alunosAcimadaMedia(arr,media){
    let aprovados = [];

    for(let i =0; i<arr.length; i++){
        const {nota,nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome);

        }


    }

    return aprovados;

}

console.log(alunosAcimadaMedia(alunos, 5));