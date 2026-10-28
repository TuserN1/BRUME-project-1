// 1. Le tableau global (Catalogue complet incluant les accessoires)
const coffeeProducts = [
  { id: "c1", name: "Espresso Intense", category: "Base", price: 2.50, image: "espresso.jpg" },
  { id: "c2", name: "Cappuccino Mousseux", category: "Classique", price: 4.00, image: "cappuccino.jpg" },
  { id: "c3", name: "Latte Caramel", category: "Gourmand", price: 4.50, image: "latte.jpg" },
  { id: "c4", name: "Flat White", category: "Classique", price: 3.80, image: "flatwhite.jpg" },
  { id: "c5", name: "Iced Matcha Latte", category: "Froid", price: 5.00, image: "matcha.jpg" },
  { id: "c6", name: "Cold Brew", category: "Froid", price: 4.20, image: "coldbrew.jpg" },
  { id: "c7", name: "Cookie Pépites", category: "Snack", price: 2.00, image: "cookie.jpg" },
  { id: "c8", name: "Mug Isotherme Noir", category: "Accessoire", price: 15.00, image: "mug.jpg" },
  { id: "c9", name: "Filtres Papier V60 (x100)", category: "Accessoire", price: 6.50, image: "filters.jpg" },
  { id: "c10", name: "Tote Bag 'Coffee Lover'", category: "Accessoire", price: 12.00, image: "totebag.jpg" }
];

// 2. Le tableau des produits dans le panier par défaut (avec un accessoire)
let coffeeCart = [
  { id: "c2", name: "Cappuccino Mousseux", price: 4.00, quantity: 2, image: "cappuccino.jpg" },
  { id: "c3", name: "Latte Caramel", price: 4.50, quantity: 1, image: "latte.jpg" },
  { id: "c8", name: "Mug Isotherme Noir", price: 15.00, quantity: 1, image: "mug.jpg" }

];

let coffeeCartcopy=[...coffeeCart]
const coffeeProductscopy=[...coffeeProducts]

for (const order in coffeeCartcopy ){
    let urorder = coffeeCartcopy[order];
    coffeeProductscopy.forEach(element => {
        
        if (urorder.id== element.id ) 
            {

        document.querySelectorAll('.productlist>div')[0].innerHTML+=(`<div class="${urorder.id}"><span class="spanlist"><span style="background-color:#796A59; border-radius:16px; padding:5px 8px; width:max-content; text-align:center;">${element.category}</span>${urorder.name}</span><span class="price" style="text-align:right; display:flex ; justify-content: end ; width:40%;"><span>${urorder.price * urorder.quantity}DH</span></span><div class="valquantity"><button class="sub-btn" style="font-weight: 700;">-</button><span>${urorder.quantity}</span><button class="add-btn">+</button></div></div>`)

          
        }
        
    });
    



}
function subtruction(){
    if(urorder.quantity>0){

    }
};
function addition(){
    
};

coffeeProductscopy.forEach(element => {
    let idtest=`.${element.id}`
    console.log(idtest)
    console.log(document.querySelector(idtest))
        document.querySelector(`.${element.id} .sub-btn`).addEventListener.target("click",subtruction)

    
});