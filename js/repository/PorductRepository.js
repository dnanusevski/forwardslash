export default class ProductRepository {
	
    constructor(client) {
        this.apiClient = client;
    }

    async getProduct(url, data){
        try{
            let products = await this.apiClient.get(url, data);
            return products;
        } catch (e){
            console.log(e);
            // to return something so that we know what to do
        }
        
    }

    async checkout(items){
        console.log(items);
        try{
            let result = await this.apiClient.post('Purchase'. items);
        } catch (e){
            console.log(e);
            // to return something so that we know what to do
        }
    }
    
}
