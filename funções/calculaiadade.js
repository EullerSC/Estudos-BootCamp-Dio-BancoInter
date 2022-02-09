function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;


}

const Pessoa = {
    nome:'Amanda',
    idade: 20,

};

const pessoa1 = {
    nome:'Raphael',
    idade: 35,

};

const animal = {
    nome: 'caju',
    idade: 5,
};



console.log(calculaIdade.call(animal,15));