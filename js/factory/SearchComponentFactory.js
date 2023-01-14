import ComponentFactory from "./ComponentFactory.js";

export default class SearchComponentFactory extends ComponentFactory{
	
	/**
	* @param Object|Array data
	* @return String
	*/
	async factoryMethod(data){
        
       
		// try
			let response = await fetch('/templates/SearchItem.html');
			let responseText = await response.text();
		// Catch something 
		
		// Convert the HTML string into a document object
		let parser = new DOMParser();
		let doc = parser.parseFromString(responseText, 'text/html');
		
		let product = doc.querySelector('#product_wrapper');
        
		let html = '';
       
		// if we have object lets just build one component
		if(!Array.isArray(data)){
			html += this.buildComponent(product, data);
		} 
	
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
        let add_button = clone.querySelector('#add_button');

		//fill it up
		product_image.src = data.photo;
		product_title.innerHTML = data.name;
		product_price.innerHTML = data.price;
        add_button.setAttribute("onclick","appCart.addToCart("+data.id+", this.previousSibling.previousSibling.value);");
		return clone.innerHTML;
	}
}