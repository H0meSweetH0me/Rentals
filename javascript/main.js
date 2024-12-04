import { products } from "./products.js";

let productHTML = '';

products.forEach((product) => {
    productHTML += `
    <div class="products">
            <a href="second.html?id=${product.id}"> <img class="image" src="${product.image}" alt="image"></a>
             <section class="information">
                 <h1>${product.name}</h1>
                 <p class="date">${product.dateAded}</p>
                 <p class="address">${product.address}</p>
                 <h2>${product.price}$</h2>
             </section>
             
         </div>
    `;

});

document.querySelector('.js-sales').innerHTML = productHTML;