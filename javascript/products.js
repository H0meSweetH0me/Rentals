/*
{
    id: '',
    image:'',
    isAvailable: '',
    dateAded: '',
    address: '',
    price: '',
    keywords: ''
}
*/



//TODO:add filters like all rooms and flats
//TODO:change the image slider
//TODO:make all scale changes to fit to mobile devices
export const products = [{
    id:'sisli-001',
    image:'images/sisli-001/S-001-02.jpg',
    isAvailable: 'Available',
    dateAded: '2024/12/14',
    address: 'Şişli/Mecidiyeköy',
    price: '17000',
    keywords: 'şişli 3+1 mecidiyeköy istanbul'
},
{
    id: 'sisli-002',
    image:'images/sisli-002/s-002-01.jpg',
    isAvailable: 'Available',
    dateAded: '2024/12/14',
    address: 'Şişli/Mecidiyeköy',
    price: '23000',
    keywords: 'şişli 2+1 mecidiyeköy istanbul'
},
{
    id: 'kavacik-001',
    image:'images/kavacik-001/K-001-02.jpg',
    isAvailable: 'Available',
    dateAded: '2024/12/14',
    address: 'Soğuksu/Beykoz',
    price: '17500',
    keywords: 'soğuksu 2+1 beykoz istanbul'
},
{
    id: 'kavacik-002',
    image:'images/kavacik-002/K-002-01.jpg',
    isAvailable: 'Available',
    dateAded: '2024/12/14',
    address: 'Kavacık/Beykoz',
    price: '25000',
    keywords: 'kavacık 3+1 kavacik beykoz istanbul'
}


];

const categories = [...new Set(products.map((item) => {return item}))]
document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => {
        return(
            item.keywords.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});
const displayItem = (items) => {
    document.querySelector('.js-sales').innerHTML = items.map((item) =>{
        var {id, image,isAvailable,dateAded,address,price} = item;
        return(
            `<div class="products">
            <a href="second.html?id=${id}"> <img class="image" src="${image}" alt="image"></a>
             <section class="information">
             <div class="dateAddress">
                 <p class="date">${dateAded}</p>
                 <p class="address">${address}</p>
            </div>
            <div class="priceAvailable">
                 <p class="price">${price} tl</p>
                 <p class="isAvailable">${isAvailable}</p>
            </div>
             </section>
             
         </div>`
        )
    }).join('')
    
};
displayItem(categories);