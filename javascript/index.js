import { products } from "./products.js";

let productHTML = '';

products.forEach((product) => {
    productHTML += `
    <div class="products">
            <a href="second.html?id=${product.id}"> <img class="image" src="${product.image}" alt="image"></a>
             <section class="information">
             <div class="dateAddress">
                 <p class="date">${product.dateAded}</p>
                 <p class="address">${product.address}</p>
            </div>
            <div class="priceAvailable">
                 <p class="price">${product.price} tl</p>
                 <p class="isAvailable">${product.isAvailable}</p>
            </div>
             </section>
             
         </div>
    `;

});

document.querySelector('.js-sales').innerHTML = productHTML;

if(window.location.pathname.endsWith("index.html")){
    const newUrl = window.location.pathname.replace("index.html", "index");
    window.history.replaceState({}, document.title, newUrl);
}