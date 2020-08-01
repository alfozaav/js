const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];

// for (let i = 0; i < autos.length; i++) {
// 	if (autos[i].color === negro) {
// 		console.log(autos[i]);
// 	}
// }

// forEach: Recorre cada elemento de un arreglo
// let resultado = [];
// autos.forEach(auto => {
// 	if (auto.color === 'Rojo') {
// 		resultado.push(auto);
// 	}
// });
// console.log(resultado);
// autos.forEach(auto => {
// 	console.log(auto);
// });

// map: Crea un arreglo nuevo y lo recorre
// let resultado = autos.map(auto => {
// 	if (auto.marca === 'BMW') {
// 		return auto;
// 	}
// });
// console.log(resultado);

// filter: Crea un arreglo basado en una prueba valuada
// let resultado = autos.filter(auto => auto.marca === 'BMW');
// let resultado = autos.filter(auto => auto.color === 'Rojo');
// let resultado = autos.filter(auto => auto.year === 2018);
// let resultado = autos.filter(auto => auto.year > 2015);
// let resultado = autos.filter(auto => auto.precio > 50000);
// let resultado = autos.filter(auto => auto.puertas === 2);
// let resultado = autos.filter(auto => auto.transmision === 'manual');
// let resultado = autos.filter(auto => auto.year >= 2015 && auto.year <= 2017);
// let resultado = autos.filter(auto => auto.year >= 2016 && auto.marca === 'BMW' );
// console.log(resultado);

// find: Retorna el primer elemento que encuentre del arreglo
// let resultado = autos.find(auto => auto.marca === 'BMW');
// let resultado = autos.find(auto => auto.modelo === 'Mustang');
// console.log(resultado);

// reduce: Toma todos los valores y los regresa como uno único
// let resultado = autos.reduce((total, auto) => total + auto.precio, 0);
// const numeros = [1,2,3];
// let resultado = numeros.reduce((total, numero) => total + numero, 0);
// console.log(resultado);

// some: evalua cierta condicion y únicamente retorna true o false
// let resultado = autos.some(auto => auto.marca === 'BMW');
// let resultado = autos.some(auto => auto.marca === 'Ferrari');
// let resultado = autos.some(auto => auto.precio > 1000000);
// console.log(resultado);


