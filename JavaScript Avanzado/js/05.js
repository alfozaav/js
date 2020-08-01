//  JavaScript Event Loop

console.log('Yo me mostraré primero');

setTimeout(() => {
    console.log('Yo me mostraré segundo');
}, 0);

console.log('Yo me mostraré tercero');


setTimeout(() => {
    console.log('Yo me mostraré cuarto');
}, 0);

new Promise(res => {
    res('Yo soy un Promise')
}).then(console.log);



console.log('Yo me mostraré quinto');