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
    vache: { name: "Lait de vache", price: 0 },
    avoine: { name: "Lait d'avoine", price: 4 },
    amande: { name: "Lait d'amande", price: 5 }
  },
  supplements: {
    caramel: { name: "Caramel", price: 3 },
    vanille: { name: "Vanille", price: 3 }
  }
};
const bases= document.getElementsByClassName('base-choix')
const base1 = bases[0].querySelectorAll('span')
const base2 = bases[1].querySelectorAll('span')

base1[0].innerHTML = config.base.espresso.name;
base1[1].innerHTML = config.base.espresso.price;
base2[0].innerHTML = config.base.filtre.name;
base2[1].innerHTML = config.base.filtre.price;



