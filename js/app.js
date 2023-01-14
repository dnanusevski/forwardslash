import ApiClient from "./base/ApiClient.js";
import PorductRepository from "./repository/PorductRepository.js";
import SearchComponentFactory from "./factory/SearchComponentFactory.js";
import CartComponentFactory from "./factory/CartComponentFactory.js";
import PageController from "./controller/PageController.js";
import Cart from "./Cart.js";

let APIClient = new ApiClient();
let productRepo = new PorductRepository(APIClient);
let scf = new SearchComponentFactory();
let ccf = new CartComponentFactory();
appCart = new Cart();

pageController = new PageController(appCart, productRepo, ccf, scf);


pageController.prtintSearchPage();
//let products = await productRepo.getProduct('SearchProducts');

//let html = await scf.getComponentHtml(products);

//document.getElementById('search_products_container').innerHTML = html;





goToCart = async () => {
    pageController.printCart();

}





//let product = await productRepo.getProduct('GetProduct', {id: 1});
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
