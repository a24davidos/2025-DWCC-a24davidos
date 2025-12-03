/* Descarga o código fonte 01-accesoNodos01.html e indica, polo menos, unha forma
de acceder aos seguintes nodos, utilizando os métodos de acceso a nodos: */
console.log(document.getElementById("age-table"));

/* Todos os elementos label dentro da táboa (debería haber 3). */

const table = document.getElementById('age-table');
const labels2 = table.getElementsByTagName('label');

console.log(labels2);       // HTMLCollection de 3 labels
console.log(labels2.length); // 3

/* O primeiro td da táboa. */

const tds = table.getElementsByTagName('td');
const td1 = tds[0];

console.log(td1.textContent);

/* O formulario con name="search". */

const form = document.getElementsByName('search');
console.log(form[0]);


/* const form = document.querySelector('form[name="search"]');
console.log(form); // directamente el formulario*/

/* O primeiro input do formulario anterior. */

/* Como tengo varios elementos que cojo con el "search", puedo acceder con el []*/
console.log(form[1]);

/* O último input do formulario do apartado anterior.*/

const input = document.querySelector('input[value="Search!"]');
console.log(input);

//Otra forma
/* const form = document.querySelector('form[name="search"]');
const submitButton = form.querySelector('input[type="submit"]');
console.log(submitButton); */