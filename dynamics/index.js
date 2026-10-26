const config = {
  base: {
    espresso: { name: "Espresso", price: 18 },
    filtre: { name: "Filtre", price: 16 }
  },
  taille: {
    s: { name: "S · 150 ml", price: 0 },
    m: { name: "M · 250 ml", price: 4 },
    l: { name: "L · 350 ml", price: 8 }
  },
  lait: {
    vache: { name: "vache", price: 0 },
    avoine: { name: "avoine", price: 4 },
    amande: { name: "amande", price: 5 }
  },
  supplements: {
    caramel: { name: "Caramel", price: 3 },
    vanille: { name: "Vanille", price: 3 }
  }
};
const addativ = ',00 DH';
const labels = document.querySelectorAll('label span');
let i = 0;
const selected = {
  base: null,
  taille: null,
  lait: null,
  supplements: null
};

for (let count in config) {

  for (let elmnt in config[count]) {
    labels[i].innerHTML = config[count][elmnt].name;
    labels[i].dataset.price = config[count][elmnt].price
    labels[i].dataset.name = count;
    labels[++i].innerHTML = config[count][elmnt].price + addativ;
    i++

  }


}



function funselect(test) {
  const click = test.target.parentElement.querySelectorAll('div>span')[0];
  const nameclicked = click.dataset.name;
  selected[nameclicked] = click.dataset.price

}
const test = document.querySelectorAll('input');
test.forEach(element => {
  element.addEventListener("click", funselect)
}

);


function total() {
  let totalcalc = 0;
  Object.values(selected).forEach(element => {
    if (element !== null) {
      totalcalc += Number(element);
      console.log(totalcalc)

      
      
    } else {
      // console.log("your choix est unvalide")
      totalcalc = 0
    }
    return totalcalc

  }
  
);
return totalcalc

}

document.querySelector('.testTotal').textContent=total();
console.log(document.getElementsByClassName('testTotal'))
if (document.querySelector('.btnadd').addEventListener('click', total)) {
  console.log(selected)
  
}