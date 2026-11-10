let cardid=0;
const btn_next1 = document.getElementById('next1')

const form1_values = {
    name: null,
    price: null,
    description: null,
    image:null


};

const form2_values = {
    origin: null,
    intensity: null,
    temp: null,
    size: [null],
    milk: [],
    supplements: [],

};
let valid = true
const checkprormo = document.querySelector('#promotion')

checkprormo.addEventListener('change', () => {
    //let validatorpromo = 

    //console.log(validatorpromo)
    document.querySelector('#promo').classList.toggle('visually-hidden');
    // document.querySelector('#promo').value.toggle('visually-hidden');

    //return promo_active=validatorpromo 

})
btn_next1.addEventListener('click', () => {
    const article_name = document.querySelector('#article-name');
    const article_price = document.querySelector('#baseprice');
    const article_description = document.querySelector('#description');
    const article_image = document.querySelector('#articleimage');

    text_valid(article_name)
    price_valid(article_price.value)
    description_valid(article_description.value)
    image_valid(article_image.value)
    if (checkprormo.checked) {


        form1_values.promo = null;
        form1_values.date = null;
        promotion()




    } else {
        if (form1_values.promo !== undefined) {
            delete form1_values.promo
            delete form1_values.date


        }
    }
    var count = 0;
    for (const key in form1_values) {

        if (form1_values[key] !== null) {
            count++
        }

        console.log(form1_values[key])


    }
    const length_form1 = Object.keys(form1_values)
    if (length_form1.length == count) {
        console.log("great")
        document.querySelector('#form1').classList = "visually-hidden"
        document.querySelector('#form2').classList = "";
        document.querySelector('#progress').innerHTML=` <div class="progress mt-6" role="progressbar" aria-label="Example 1px high" aria-valuenow="25"
                aria-valuemin="0" aria-valuemax="100" style="height: 1px">
                <div class="progress-bar" style="width: 25%"></div>
            </div>
            <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0"
                aria-valuemax="100" style="height: 20px">
                <div class="progress-bar" style="width: 66%"></div>
            </div>`
       

    } else Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: 'info not complate',
        confirmButtonText: 'try again'
    });


});

function text_valid(element) {
    const name = element.value
    const regName = /^[a-zA-Z]+ ?[a-zA-Z]*$/;
    if ((name !== null) && (regName.test(name))) {

        form1_values.name = name

    } else element.classList.add('border-danger')


}

function price_valid(price) {
    const regprice = /^\d+(\.\d{1,2})?$/;
    if ((regprice.test(price))) {
        form1_values.price = price
    } else { }

}

function image_valid(image) {
    const regimg = /^https?:\/\/(?:localhost|(?:[0-9]{1,3}\.){3}[0-9]{1,3}|(?:[a-z0-9\-]+\.)+[a-z]{2,6})(?::\d+)?(?:\/[^\s?.]+)*\.((?:jp(e)?g|png?))(?:\?.*)?$/;
    if (regimg.test(image)) {
        form1_values.image = image

    } else {
        console.log("not valid")
    }

}

function description_valid(description) {
    const regdescrip = /^[a-zA-Z0-9\s.,!?'"]+$/;
    if (regdescrip.test(description)) {
        form1_values.description = description

    } else console.log("not valid")


}

function promotion() {
    const promo_num = document.querySelector('#discount')
    const promo_date = document.querySelector('#expdate')
    const promo = promo_num.value
    const date = promo_date.value
    console.log(date)

    const regpercent = /^([0-9]|[1-9][0-9]|100)$/;
    if (regpercent.test(promo)) {
        form1_values.promo = promo;

    } else console.log(" promo not valid")
    const regexp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    if (regexp.test(date)) {
        form1_values.date = date


    } else console.log('expdate: is not valid')




}
document.querySelector('#goback-1').addEventListener('click', () => {
    document.querySelector('#form1').classList.toggle('visually-hidden');
    document.querySelector('#form2').classList.toggle('visually-hidden');
})

const btn_next2 = document.querySelector('#next-2')


btn_next2.addEventListener('click', () => {
    console.log("click")
    valid = true
    const article_origin = document.querySelector('#grains-source')
    const article_intens = document.querySelector('#intensity')
    const article_temp = document.querySelectorAll('input[name="Temperature"]')
    const article_size = document.querySelectorAll('input[name="sizes"]')
    const article_milk = document.querySelectorAll('input[name="milk"]')
    const article_supplements = document.querySelectorAll('input[name="supplements"]')



    testorigin(article_origin.options[article_origin.selectedIndex], article_origin)
    testintensity(article_intens)
    testtemp(article_temp)
    testsize(article_size)
    testmilk(article_milk)
    testsupplements(article_supplements)
    if (valid==false) {
       Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: 'info not complate',
        
        confirmButtonText: 'try again'
        
    });
    }else {
        cardcreat()
        document.querySelector('#form2').classList.toggle('visually-hidden');
        document.querySelector('#form3').classList.toggle('visually-hidden');
        document.querySelector('#progress').innerHTML=` <div class="progress mt-6" role="progressbar" aria-label="Example 1px high" aria-valuenow="25"
                aria-valuemin="0" aria-valuemax="100" style="height: 1px">
                <div class="progress-bar" style="width: 25%"></div>
            </div>
            <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0"
                aria-valuemax="100" style="height: 20px">
                <div class="progress-bar" style="width: 100%"></div>
            </div>`
    }
    
})

document.querySelector('#goback-2').addEventListener('click', () => {
    document.querySelector('#form3').classList.toggle('visually-hidden');
    document.querySelector('#form2').classList.toggle('visually-hidden');
})


function testorigin(a, b) {
    if (b.value != 1) {
        form2_values.origin = a.innerHTML
        b.classList = "form-select"
    } else {
        b.classList.add('border-danger')
        valid = false
    }
}
function testintensity(intencity) {
    form2_values.intensity = intencity.value

}
function testtemp(temp) {
    temp.forEach(element => {
        if (element.checked) {
            form2_values.temp = element.value

        }


    });
    if (form2_values.temp == null) {
        valid = false
    }


}
function testsize(taille) {
    form2_values.size = [null]
    taille.forEach(element => {
        if (element.checked) {
            form2_values.size.push(element.nextSibling.textContent.trim())

        }


    });

    if (form2_values.size == [null]) {
        document.getElementById('hsize').style.color = 'red'
        valid = false

    }



}
function testmilk(milk) {
    form2_values.milk = []
    milk.forEach(element => {
        if (element.checked) {
            form2_values.milk.push(element.value)

        }


    });
    if (form2_values.milk == [null]) {
        document.getElementById('hmilk').style.color = 'red'
        valid = false

    }


}
function testsupplements(supplé) {
    form2_values.supplements = []
    supplé.forEach(element => {
        if (element.checked) {
            form2_values.supplements.push(element.value)

        }


    });
    if (form2_values.supplements== [null]) {
        document.getElementById('hsupp').style.color = 'red'
        valid = false

    }


}
// const form1_values = {
//     name: null,
//     price: null,
//     description: null,
//     image: null


// };

// const form2_values = {
//     origin: null,
//     intensity: null,
//     temp: null,
//     size: [null],
//     milk: [],
//     supplements: [],

// };
function cardcreat(){
    const holder=document.createElement('div')
    holder.classList.add(`id-${cardid}`)
    document.querySelector('#cardholder').append(holder)
    const card=document.querySelector('.id-0')
    const img=document.createElement('img')
    img.src=`${form1_values.image}`
    const artname=document.createElement('h3')
    artname.textContent=`${form1_values.name}`
    const prixholde=document.createElement('div')
    const prixtext=document.createElement('div')
    const artprix=document.createElement('div')
    prixholde.classList.add('d-flex')
    prixholde.classList.add('justify-content-between')
    prixtext.textContent=`prix`
    artprix.textContent=`${form1_values.price},00DH`
    const artdiscri=document.createElement('p')
    artdiscri.innerHTML=`about the product: <br>${  form1_values.description}`
    
    card.append(artname)
    card.append(img)
    card.append(artdiscri)
    card.append(prixholde)
    card.querySelector('div').append(prixtext)
    card.querySelector('div').append(artprix)

cardid++
}

