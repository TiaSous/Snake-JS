let products = [
  {
    photo: "img/big-mac.png",
    name: "Big Mac",
    price: 5.99,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/mc-chicken.png",
    name: "Mc Chicken",
    price: 4.99,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/double-cb.png",
    name: "Double Cheese Burger",
    price: 2.99,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/fries.png",
    name: "Fries",
    price: 2.99,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/nuggets.png",
    name: "Mc Nuggets",
    price: 3.49,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/salad.png",
    name: "Salad",
    price: 2.79,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/cola.png",
    name: "Coke",
    price: 1.99,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/lipton.png",
    name: "Ice Tea",
    price: 1.99,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/water.png",
    name: "Water",
    price: 1.49,
    active: false,
    quantity: 0,
  },
];

let elements = document.getElementsByClassName("product");
let buttons = document.getElementsByTagName("button");
let isButton = false;


Array.from(buttons).forEach(function (button) {
  button.addEventListener('click', function () {
    isButton = true;
    addOrDel(button);
  });
});


Array.from(elements).forEach(function (element) {
  element.addEventListener('click', function () {
    myFunction(element);
  });
  element.querySelector(".description").querySelector(".quantity-area").style.display = "none";
});


function myFunction(ele) {
  if (!isButton) {
    ele.getAttribute("class") == "product" ?
      (ele.setAttribute("class", "product selected"), ele.querySelector(".description").querySelector(".quantity-area").style.display = "block")
      : (ele.setAttribute("class", "product"), ele.querySelector(".description").querySelector(".quantity-area").style.display = "none");

    (products.some((product) => (product.name == ele.querySelector(".description").querySelector(".name").innerHTML)))
    products.forEach((product) => {
      if (product.name == ele.querySelector(".description").querySelector(".name").innerHTML) {
        product.active == true ? (product.active = false, product.quantity = 0) : (product.active = true, product.quantity = 1);
      }
    });
  }
  isButton = false;
  update(ele);
};

function addOrDel(but) {
  if (but.innerHTML == "+") {
    products.forEach((product) => {
      if (product.name == but.parentElement.parentElement.querySelector(".name").innerHTML) {
        product.quantity += 1;
      }
    });
  }
  else {
    products.forEach((product) => {
      if (product.name == but.parentElement.parentElement.querySelector(".name").innerHTML) {
        product.quantity != 1 ? product.quantity -= 1 : product.quantity = 1;
      }
    });
  }

  update(but.parentElement.parentElement.parentElement);
}

function update(item) {
  let tbody = document.getElementById("total");
  removeAllChildNodes(tbody);
  products.forEach((product) => {
    if (product.name == item.querySelector(".description").querySelector(".name").innerHTML) {
      item.querySelector(".description").querySelector(".quantity-area").querySelector(".quantity").innerHTML = product.quantity;
    }
    if (product.active) {
      addProductInList(tbody, product);
      
    }
  });
  addTotal(tbody);
}


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function addProductInList(tbody, product) {
  let balise = document.createElement("tr");
  const name = document.createElement("td");
  let text = document.createTextNode(product.quantity + "x " + product.name);
  name.appendChild(text);
  const price = document.createElement("td");
  text = document.createTextNode((product.price * product.quantity).toFixed(2));
  price.appendChild(text);
  balise.appendChild(name);
  balise.appendChild(price);
  tbody.appendChild(balise);
}

function addTotal(tbody){
  let total = 0
  products.forEach((prod) => {
    total += prod.quantity * prod.price;
  })
  let balise = document.createElement("tr");
  const name = document.createElement("th");
  let text = document.createTextNode("Total");
  name.appendChild(text);
  const price = document.createElement("th");
  text = document.createTextNode(total.toFixed(2));
  price.appendChild(text);
  balise.appendChild(name);
  balise.appendChild(price);
  tbody.appendChild(balise);
}