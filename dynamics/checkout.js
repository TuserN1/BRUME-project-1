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
let coffeeCartcopy = [...coffeeCart]
const coffeeProductscopy = [...coffeeProducts]
const finalorder = []


function orderlist() {
    let total = 0;

    document.querySelectorAll('.productlist>div')[0].innerHTML = ""
    for (const order in coffeeCartcopy) {
        let urorder = coffeeCartcopy[order];
        coffeeProductscopy.forEach(element => {

            if (urorder.id == element.id) {
                console.log(urorder.id)
                let placement = document.querySelectorAll('.productlist>div')[0]
                let content = (`<div id="${urorder.id}"><span class="spanlist"><span style="background-color:#796A59; border-radius:16px; padding:5px 8px; width:max-content; text-align:center;">${element.category}</span>${urorder.name}</span><span class="price" style="text-align:right; display:flex ; justify-content: end ; width:40%;"><span>${urorder.price * urorder.quantity}DH</span></span><div class="valquantity"><button id="sub-btn-${urorder.id}" style="font-weight: 700;">-</button><span>${urorder.quantity}</span><button id ="add-btn-${urorder.id}">+</button></div></div>`)
                placement.insertAdjacentHTML('beforeend', content)

                document.querySelector(`#sub-btn-${urorder.id}`).addEventListener("click", () => {



                    if (urorder.quantity > 1) {
                        urorder.quantity -= 1
                        orderlist()

                    }

                })
                document.querySelector(`#add-btn-${urorder.id}`).addEventListener("click", () => {


                    urorder.quantity += 1
                    orderlist()


                }


                )

            }

        });


        total += urorder.quantity * urorder.price

    }

    const spanall = document.createElement("span")
    const divall = document.createElement("div")
    const btnAdd = document.createElement("button");
    const totallist = document.createElement("span");
    spanall.classList.add("divall");
    totallist.classList.add("totallist");
    btnAdd.classList.add("quickadd")
    totallist.insertAdjacentHTML("beforeend", `<span>total</span><span>${total}</span>`)
    btnAdd.innerText = "quick-add";
    document.querySelector('.productlist>div').append(spanall)
    document.querySelector('.productlist>div>span').append(divall)
    document.querySelector('.productlist>div>span>div').append(btnAdd)
    document.querySelector('.productlist>div>span>div').append(totallist)


}
orderlist();
document.querySelector('.quickadd').addEventListener("click", () => {
    var flotings = document.querySelector('.searchsec')
    // let content=document.querySelector('.my-money')
    // let content1=document.querySelector('.productlist')
    
    if (window.getComputedStyle(flotings).display === "none") {
        flotings.style.display = "flex";
        // content.style.display ="none";
        // content1.style.display ="none";
        
        searchfun()
        
        
    }
    
    
});

let typsearch="";
function searchfun() {
    // console.log("hello");
    let stylesearch = document.querySelector('.searchsec');
    let divsearch = stylesearch.querySelector('div')

    stylesearch.style.opacity = " 0.8";
    stylesearch.style.backgroundColor = " #909f8b9c";
    stylesearch.style.backdropFilter = " blur(40px)";
    stylesearch.style.position = "fixed";
    stylesearch.style.width = "100vw";
    stylesearch.style.height = "100vh";
    stylesearch.style.top = "0";
    stylesearch.style.justifyContent = "center";
    stylesearch.style.alignItems = "center";

    ;
    divsearch.style.backgroundColor = "black";
    divsearch.style.minWidth = "90vw";
    divsearch.style.height = "80vh";
    divsearch.style.borderRadius = "16px";
    divsearch.style.justifyContent = "center";
    divsearch.style.display = "flex";
    stylesearch.append(divsearch);

    let searchbar = document.createElement("input");
    searchbar.classList.add("searchbar");
    searchbar.setAttribute('type', "search");
    searchbar.setAttribute('placeholder', "search");
    searchbar.style.backgroundColor = "#a39393";
    searchbar.style.height = "30px";
    searchbar.style.paddingLeft = "10px";
    searchbar.style.paddingRight = "10px";
    searchbar.style.color = "solid black";
    searchbar.style.width = "70%";
    searchbar.style.border = "0";
    searchbar.style.opacity = "100%";
    searchbar.style.borderRadius = "16px";
    searchbar.style.margin = "20px";
    divsearch.append(searchbar);
typsearch="";
    document.querySelector('.searchbar').addEventListener('input', searchmicanism )
    
}
function searchmicanism(){
    

    
    if (event.data !== null && event.data !== undefined ) {
        typsearch+=(event.data)
        
        console.log(event.data);
        }
        let arrsearch=typsearch.split("")  ;
        console.log(arrsearch)     
         coffeeProductscopy.forEach(element => {
            
            if(element.name.includes(typsearch)){
                afichage(element)
                
                
            }}
        )}




    function afichage(element) {
        console.log(element);
        // typsearch=;



    }