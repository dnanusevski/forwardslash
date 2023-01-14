export default class Cart {

    items = [{id:1, amount:5}];

	// Add if exists, else add amount
	addToCart(id, amount) {
       // in app wide state, we should clone or map the array.
        let item = {id:id, amount:parseInt(amount)};
        let el = this.items.find(obj => obj.id === id)
        
        if(el){
            el.amount += parseInt(amount);
        } else {
            this.items.push(item);
        }
        console.log(this.items);
    }
    
    removeFromCart(id){
        console.log('-----------!!!!-----------'+id);

        let newItems = this.items.filter(el=>{
            el.id === id;
        });
        this.items = newItems;
    }

    getCartitems(){
        return this.items;
    }
}
