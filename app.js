let products = [
   {
    id: 1,
    productName: 'Shoes',
    price: 299,
   },
   {
    id: 2,
    productName: 'T-Shirt',
    price: 100,
   },
   {
    id: 3,
    productName: 'Pullover',
    price: 150,
   },
   {
    id: 4,
    productName: 'Shirt',
    price: 700,
   },
   {
    id: 5,
    productName: 'Sneakers',
    price: 200,
   }
]

/*METODOS DE ARRAY*/

/*MAP*/
//llego la inflacion y aumentaron los precios, entonces necesitamos un metodo que aumente el valor de cada uno de los precios de nuestro array
let inflacionProducts = products.map(product = elemento => elemento.price * 10)
//console.log(inflacionProducts); //[ 2990, 1000, 1500, 7000, 2000 ]

/*FILTER*/
let priceProducts = inflacionProducts.filter(producto => producto > 1500);
//console.log(priceProducts); //[ 2990, 7000, 2000 ]

/*REDUCE*/ //RECIBE 2 PARAMETROS
let totalProducts = inflacionProducts.reduce(product = (estado, numero) => estado + numero)
//console.log(totalProducts); //14490


/*FOREACH*/ //RECIBE 2 PARAMETROS
let ubicacionProductos = products.forEach(product = (valor, indice) => console.log(
    'El producto esta en la posicion ' + indice + ' y su precio es ' + valor.price
))

console.log(ubicacionProductos)




