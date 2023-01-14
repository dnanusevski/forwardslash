/**
* For demonstration purposes i am going with 
* ComponentFacotory, i could also go with builder
* In reality i would go with functional aproach 
* imitating React functional components
*/

export default class ComponentFactory {
	// a method for building HTML component
	factoryMethod(data) {console.log('calle factoryMethod - should not be called');}
	// a method to pring Component HTML for later usege
	getComponentHtml(data){
		console.log('------called getComponentHtpm');
		return this.factoryMethod(data);
	}
}
