export default class ProductRepository {
	
    constructor(client) {
        this.apiClient = client;
    }

    async getProduct(url, data){
        let products = await this.apiClient.get(url, data);
        return products;
    }
    
}
