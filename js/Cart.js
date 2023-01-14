export default class Cart {

    items = [];

	// Add if exists, else add amount
    /**
	* @return param int id
    * @return param int amount
    * @return void
	*/
	addToCart(id, amount) {
       // in app wide state, we should clone or map the array.
        let item = {id:id, amount:parseInt(amount)};
        let el = this.items.find(obj => obj.id === id)
        
        if(el){
            el.amount += parseInt(amount);
        } else {
            this.items.push(item);
        }  
    }

    /**
	* @param int id
	* @return void
	*/
    removeFromCart(id){
        let newItems = this.items.filter(el => parseInt(el.id) !== parseInt(id));
        this.items = newItems;
    }

    /**
	* @return void
	*/
    getCartitems(){
        return this.items;
    }

   
}
