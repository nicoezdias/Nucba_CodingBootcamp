let htmlOnDeman = `
    <h1>Hola mundo soy un html creado con js </h1>
`;

let leerHtml = fs.readFile('hola.html', (err, data) => {
	if (err) {
		console.log('Ups! algo paso');
		return;
	}
	console.log(data.toString());
});

for (let index = 0; index < 100; index++) {
	console.log('HOlaaaaa');
}
console.log(Buffer.from('Hola').toJSON());
