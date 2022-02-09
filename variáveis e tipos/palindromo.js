//solução 1

function verificaPalindromo(string){
    if(!string)return;

    return string.split("").reverse().join("") === string;
}

 console.log(verificaPalindromo("amigo"));

 //solução 2
// observação: o indice começa no zero, e o length começa no 1.
 function verificaPalindromo2(string){
    if(!string) return "string inexistente";
    for(let i=0; i<string.length; i++){
        if(string[i] !== string[string.length -1 -i]){
            return false;
        }

    }

    return true;

 }

 console.log(verificaPalindromo2("abba"));