const btn_next1 = document.getElementById('next1')
btn_next1.addEventListener('click',()=>{
    const article_name=document.querySelector('#article-name');
    const article_price=document.querySelector('#baseprice');
    const article_description=document.querySelector('#description');
    const article_image=document.querySelector('#articleimage');
    const article_promotion=document.querySelector('#promotion');    
    const discount_percentage=document.querySelector('#discount');
    const exp_date=document.querySelector('#enddate');


    text_valid(article_name)
    price_valid(article_price)
    description_valid(article_description)
    promotion(article_promotion)    
    
   

});

function text_valid(){
    


}
function price_valid(){

}

function description_valid(){

}
function promotion(){


}
