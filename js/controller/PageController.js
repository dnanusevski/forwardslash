export default class PageController {
  constructor(cart, productRepo, cartComponentFactory, searchComponentFactory) {
    this.cart = cart;
    this.productRepo = productRepo;
    this.ccf = cartComponentFactory;
    this.scf = searchComponentFactory;
  }

  /**
   * @return void
   */
  async prtintSearchPage() {
    document.getElementById("js_product_page").style.display = "block";
    document.getElementById("js_cart_page").style.display = "none";
    let products = await this.productRepo.getProduct("SearchProducts");
    let html = await this.scf.getComponentHtml(products);
    document.getElementById("search_products_container").innerHTML = html;
  }

  /**
   * @return void
   */
  async printCart() {
    //document.getElementById('js_product_page').innerHTML = "";
    document.getElementById("js_product_page").style.display = "none";
    document.getElementById("js_cart_page").style.display = "block";
    let items = this.cart.items;
    let cartComplete = [];

    let total = 0;

    items.forEach(async (element) => {
      console.log(element);
      let product = await this.productRepo.getProduct("GetProduct", {
        id: element.id,
      });
      cartComplete.push({ ...product, amount: element.amount });
      total += element.amount * product.price;
    });

    let html = await this.ccf.getComponentHtml(cartComplete);

    document.getElementById("cart_products_container").innerHTML = html;
    document.getElementById("js_total").innerHTML = total;
  }
  
  /**
   * @param int id
   * @return void
   */
  removeCartItem(id) {
    this.cart.removeFromCart(id);
    this.printCart("cart_products_container");
  }

  /**
   * @return void
   */
  checkout() {
    this.productRepo.checkout(this.cart.items);
  }
}
