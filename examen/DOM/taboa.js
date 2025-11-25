'use strict'


const tbody = document.querySelector("tbody")

console.log(tbody);

const trs = Array.from(document.getElementsByTagName("tr"))

/* let i = 0;
for (let td of trs){
    const actual = td.children[i];
    actual.style.backgroundColor = "red"
    i++
} */
// EL i, funciona coomo indice
trs.forEach((tr, i) => {
    let td = tr.children[i];
    td.style.backgroundColor="red";
})

console.log(trs[1].children[1])