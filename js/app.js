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

goToCart = async (what) => {
  // what === "cart" ? pageController.printCart() : pageController.prtintSearchPage();
  switch (what) {
    case "cart":
      pageController.printCart();
      break;
    case "search":
      pageController.prtintSearchPage();
      break;
    case "checkout":
      pageController.checkout();
      break;
  }
};

