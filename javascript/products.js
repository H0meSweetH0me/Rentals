//TODO:make the address layout on products on right
//TODO:change serchbar and make it interactive
//TODO:add filters like all rooms and flats
//TODO:change the image slider
//TODO:make all scale changes to fit to mobile devices
//TODO:chnage the grid column from 3 to 2 on mobile devices
export const products = [{
    id:1,
    image:'images/house.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/10/24',
    address: 'uskudar/istanbul',
    price: 100,
    keywords: 'uskudar 3+1 istanbul'
},
{
    id:2,
    image:'images/2house1.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/11/16',
    address: 'Beykoz/Istanbul',
    price: 300,
    keywords: 'beykoz 2+1 istanbul'
},
{
    id:3,
    image:'images/2house2.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/11/16',
    address: 'uskudar/istanbul',
    price: 8000,
    keywords: 'uskudar 3+1 istanbul'
}
,
{
    id:4,
    image:'images/house2.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/11/16',
    address: 'esenyurt/istanbul',
    price: 1000,
    keywords: 'esenyurt 4+1 istanbul'
}
,
{
    id:5,
    image:'images/house4.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/11/16',
    address: 'umraniye/istanbul',
    price: 160000,
    keywords: 'umraniye 4+1 istanbul'
}
,
{
    id:6,
    image:'images/2house4.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/11/16',
    address: 'esenyurt/istanbul',
    price: 200,
    keywords: 'esenyurt 3+1 istanbul'
},{
    id:1,
    image:'images/house.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/10/24',
    address: 'uskudar/istanbul',
    price: 100,
    keywords: 'uskudar 1+1 istanbul'
},
{
    id:2,
    image:'images/2house1.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/11/16',
    address: 'Beykoz/Istanbul',
    price: 300,
    keywords: 'beykoz 1+1 istanbul'
},
{
    id:3,
    image:'images/2house2.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/11/16',
    address: 'fatih/istanbul',
    price: 8000,
    keywords: 'fatih 3+2 istanbul'
}
,
{
    id:4,
    image:'images/house2.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/11/16',
    address: 'umraniye/istanbul',
    price: 1000,
    keywords: 'umraniye 3+1 istanbul'
}
,
{
    id:5,
    image:'images/house4.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/11/16',
    address: 'avcilar/istanbul',
    price: 160000,
    keywords: 'avcilar 1+1 istanbul'
}
,
{
    id:6,
    image:'images/2house4.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/11/16',
    address: 'avcilar/istanbul',
    price: 200,
    keywords: 'avcilar 2+1 istanbul'
},{
    id:1,
    image:'images/house.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/10/24',
    address: 'uskudar/istanbul',
    price: 100,
    keywords: 'uskudar 1+1 istanbul'
},
{
    id:2,
    image:'images/2house1.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/11/16',
    address: 'Beykoz/Istanbul',
    price: 300,
    keywords: 'beykoz 2+1 istanbul'
},
{
    id:3,
    image:'images/2house2.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/11/16',
    address: 'avcilar/istanbul',
    price: 8000,
    keywords: 'avcilar 4+1 istanbul'
}
,
{
    id:4,
    image:'images/house2.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/11/16',
    address: 'umraniye/istanbul',
    price: 1000,
    keywords: 'umraniye 4+2 istanbul'
}
,
{
    id:5,
    image:'images/house4.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/11/16',
    address: 'beykoz/istanbul',
    price: 160000,
    keywords: 'beykoz 3+1 istanbul'
}
,
{
    id:6,
    image:'images/2house4.jpeg',
    isAvailable: 'Available',
    dateAded: '2024/11/16',
    address: 'fatih/istanbul',
    price: 200,
    keywords: 'fatih 2+1 istanbul'
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