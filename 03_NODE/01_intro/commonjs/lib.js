const { add } = require('./otroModulo');

const value = add(10, 50);
const miConstPrivada = 'Esto solo vive en este modulo';

module.exports = {
	id: '1',
	printPrivate: () => {
		console.log(miConstPrivada);
	},
	calculoInterno: value,
};
