console.log(document.documentElement); // elemento raíz
console.log(document.head); // head
console.log(document.body); // body
// HTMLCollection (obxecto similar a array) de elementos fillos
console.log(document.head.children);
console.log(document.doctype);
console.log(document.URL);
console.log(document.characterSet);
console.log(document.contentType); // MIME type
// acceso a formularios
console.log(document.forms); // HTMLCollection
console.log(document.forms[0]);
console.log(document.forms[0].method);
// ligazóns
console.log(document.links); // HTMLCollection
console.log(document.links[0]);
