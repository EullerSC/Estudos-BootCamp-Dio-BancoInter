function comparaNumeros(n1, n2) {
	const formafrase1 = frase1(n1, n2);
	const formafrase2 = frase2(n1, n2);

	return `${formafrase1} ${formafrase2}`;
}

function frase1(n1, n2) {
	let iniciofrase = `Os números ${n1} e ${n2}`;
	let verifica = 'não';

	if (n1 === n2) {
		verifica = '';
	}

	return `${iniciofrase} ${verifica} são iguais.`;
}

function frase2(n1, n2) {
	const soma = n1 + n2;
	let menor10 = 'menor';
	let menor20 = 'menor';

	if (soma > 10) {
		menor10 = 'maior';
	}

	if (soma > 20) {
		menor20 = 'maior';
	}

	return `Sua soma é ${soma}, que é ${menor10} do que 10 e ${menor20} do que 20.`;
}

console.log(comparaNumeros(10, 10));