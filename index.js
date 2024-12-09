// TICKET 1
// 1a

let ticket1a = document.getElementById("title");

/* console.log(ticket1a); */

// 1b

let ticket1b = document.getElementsByClassName("content");

/* console.log(ticket1b); */

// 1c

let ticket1c = document.getElementsByTagName("ul");
/* 
console.log(ticket1c[0]); */

/* for (i = 0; i < ticket1c.length; i++) {
  console.log(ticket1c[i].innerHTML);
} */

// 1d

let ticket1d = document.querySelector(".highlight");
/* 
console.log(ticket1d); */

// 1e

let ticket1e = document.querySelectorAll(".highlight");
/* 
console.log(ticket1e); */

// TICKET 2
// 2a

let ticket2a = document.querySelector(".list-item").parentNode;

console.log(ticket2a);

// 2b

let ticket2b = document.getElementById("itemList").childNodes;

console.log(ticket2b);

// 2c

let ticket2c = document.getElementById("itemList").children;

console.log(ticket2c);

// 2d

let ticket2d_firstChild = document.getElementById("itemList").firstElementChild;
let ticket2d_lastChild = document.getElementById("itemList").lastElementChild;

console.log(ticket2d_firstChild.textContent);
console.log(ticket2d_lastChild.textContent);

// TICKET 3
// 3a

let ticket3a = (document.getElementById("title").style.cssText =
  "color: red; font-size: 30px");

// 3b

let newPara = document.createElement("p");
let newNode = document.createTextNode("This is a dynamically added paragraph.");
newPara.appendChild(newNode);

let newElement = document.querySelector("body");
newElement.appendChild(newPara);

// 3c

document.querySelector(".content").innerHTML =
  "This paragraph has been updated using JavaScript";

// 3d

let ticket3d = document.querySelector(".highlight");

ticket3d.setAttribute("title", "Hover over me!");

// 3e

let ticket3e = document.getElementById("itemList");

ticket3e.classList.add("styled-list");

let banana = document.querySelectorAll("li");

console.log(banana[1]);

banana[1].classList.remove("list-item");

// 3f

let date = document.querySelectorAll("li")[3];

console.log(date);

date.remove();
