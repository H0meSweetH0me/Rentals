import { information } from "./information.js";
//TODO:find a solution and link every flat to his own information using id or find something else
const params = new URLSearchParams(window.location.search);
const urunId = params.get('id');

const urun = information.find(u => u.id == urunId);
if(urun){
    document.getElementById('slide-1').src = urun.image1;
    document.getElementById('slide-2').src = urun.image2;
    document.getElementById('slide-3').src = urun.image3;
    document.getElementById('slide-4').src = urun.image4;
    document.getElementById('addressHref').href = urun.maps;
    document.getElementById('address').textContent = urun.address;
    document.getElementById('rooms').textContent = urun.rooms;
    document.getElementById('floor').textContent = urun.floor;
    document.getElementById('type').textContent = urun.type;
    document.getElementById('gender').textContent = urun.gender;
    document.getElementById('price').textContent = urun.price;
    document.getElementById('details').textContent = urun.details;
    document.getElementById('nearstLoc').textContent = urun.nerastLoc;
}else{
    document.body.innerHTML = '<h1>IT`S NOT AVAILABLE FOR NOW</h1>';
}
console.log('true');