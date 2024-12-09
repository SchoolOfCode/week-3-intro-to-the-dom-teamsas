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
