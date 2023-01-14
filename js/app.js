import ApiClient from "./base/ApiClient.js";
import ProductComponentFactory from "./factory/ProductComponentFactory.js";

let APIClient = new ApiClient();

// Async await examples


try{
	console.log(await APIClient.get('SearchProducts'));
} catch (e){
	console.log(e);
}

console.log(await APIClient.get('GetProduct', {id: 1}));
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


