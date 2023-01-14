import ApiClient from "./base/ApiClient.js";
import PorductRepository from "./repository/PorductRepository.js";
import SearchComponentFactory from "./factory/SearchComponentFactory.js";
import Cart from "./Cart.js";

let APIClient = new ApiClient();
let productRepo = new PorductRepository(APIClient);
let scf = new SearchComponentFactory();
console.log(appCart);
appCart = new Cart();

//console.log(cart.addToCart);

let products = await productRepo.getProduct('SearchProducts');
let product = await productRepo.getProduct('GetProduct', {id: 1});
let html = await scf.getComponentHtml(products);

/*
console.log(products);
console.log(product);
console.log(html);
*/

document.getElementById('search_products_container').innerHTML = html;




/*
// Async await examples
try{
	console.log(await APIClient.get('SearchProducts'));
    console.log('I AM HERE')
} catch (e){
	console.log(e);
}
console.log(await APIClient.get('GetProduct', {id: 1}));
*/
/*

await APIClient.post('Purchase', [
    {
        product_id: 73,
        amount: 21
    },
    {
        product_id: 22,
        amount: 21
    }
]); // APIClient will do a console.log()
*/





/*
// Regular promise examples
APIClient.get('SearchProducts')
    .then((result) => {
        console.log(result);
    }).catch ((error)=>{
		console.log(error);
	});

APIClient.get('GetProduct', {id: 1})
    .then((result) => {
        console.log(result);
    });

APIClient.post('Purchase', [
    {
        product_id: 73,
        amount: 21
    },
    {
        product_id: 22,
        amount: 22
    }
]); // APIClient will do a console.log()

*/
