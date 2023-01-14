import ComponentFactory from "./ComponentFactory.js";

export default class ProductComponentFactory extends ComponentFactory{
	
	/**
	* @param Object|Array data
	* @return String
	*/
	async factoryMethod(data){
		// try
			let response = await fetch('/templates/CartItem.html');
			let responseText = await response.text();
		// Catch something 
		
		// Convert the HTML string into a document object
		let parser = new DOMParser();
		let doc = parser.parseFromString(responseText, 'text/html');
		
		let product = doc.querySelector('#product');

		let html = '';
		
		// if we have object lets just build one component
		if(!Array.isArray(data)){
			html += this.buildComponent(product, data);
		} 
		// if ti is array we need to loop
		else {
			for(data of data){
				html += this.buildComponent(product, data);
			}
		}
		return html;
	}
	
	/**
	* @param Object data
	* @return String
	*/
	buildComponent(product, data){
		let clone = product.cloneNode(true);

		// Get required elements
		let product_image = clone.querySelector('#product_image');
		let product_title = clone.querySelector('#product_title');
		let product_price = clone.querySelector('#product_price');
		
		//fill it up
		product_image.src = data.photo;
		product_title.innerHTML = data.name;
		product_price.innerHTML = data.price;
		
		return clone.innerHTML;
	}
}