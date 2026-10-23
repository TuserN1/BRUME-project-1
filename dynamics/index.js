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
const addativ =',00 DH' ;
const labels=document.querySelectorAll('label span');
console.log(labels)
let i=0;
const selected = [
  base=null,
  taille=null,
  lait=null,
  suplement=null,
];

for (let count in config ){
    
    for(let elmnt in config[count] ){
         labels[i].innerHTML = config[count][elmnt].name;
         labels[++i].innerHTML = config[count][elmnt].price+addativ;
        
          i++
         
    }

}

console.log(selected)
function verifcheck(click){
  for (i in selected){
    // if (){}
  }

}

function funselect(test){
  const click = test.target.parentElement.querySelectorAll('div>*');
  const clickname=click[0];
  console.log(clickname)



}
const test = document.querySelectorAll('input');
test.forEach(element => {
  element.addEventListener("click", funselect )
});
