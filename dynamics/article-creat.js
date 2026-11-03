const btn_next1 = document.getElementById('next1')
const form1_values={
            name:null,
            price:null,
            description:null,

};
const form2_values={};
const form3_values={};
btn_next1.addEventListener('click',()=>{
    const article_name=document.querySelector('#article-name');
    const article_price=document.querySelector('#baseprice');
    const article_description=document.querySelector('#description');
    const article_image=document.querySelector('#articleimage');
    const article_promotion=document.querySelector('#promotion');    
    const discount_percentage=document.querySelector('#discount');
    const exp_date=document.querySelector('#enddate');


    text_valid(article_name.value)
    price_valid(article_price.value)
    description_valid(article_description.value)
    image_valid(article_image.value) 
    promotion(article_promotion.value)   
    
   

});

function text_valid(name){
    const regName = /^[a-zA-Z]+ ?[a-zA-Z]*$/;
    if ((name !== null)&&(regName.test(name))){
        
        console.log("valid")
         
    }else {console.log("not valide")}


}
function price_valid(price){
    const regprice= /^\d+(\.\d{1,2})?$/;
    if ((regprice.test(price))){
        console.log("valide")
    } else {console.log("non valid")}

}
function image_valid(image){
    const regimg=/\.(jpg|jpeg|png)$/i;
    if(regimg.test(image)){
        console.log("valid")

    }else {
        console.log("f off")
    }

}
function description_valid(description){
    const regdescrip= /^[a-zA-Z0-9\s.,!?'"]+$/;
    if (regdescrip.test(description)){
        console.log("valid")

    }else  console.log("not valid")


}
function promotion(){
    const promocheck=document.querySelector('#promotion')
    promocheck.addEventListener('change',()=>{})


}
