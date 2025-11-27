const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json"
);

xhr.send();

let copy = "";

xhr.addEventListener("load", function () {
  const obxeto = xhr.response;
  obxetoJSON = JSON.parse(xhr.response);

  console.log(obxetoJSON);

  console.log(obxetoJSON[0]["kittens"].length);

  /* printear los nombres */

  let textoNombres = "Os nomes das gatas son ";

  for (let i = 0; i < obxetoJSON.length; i++) {
    if (i == obxetoJSON.length - 1) {
      textoNombres = textoNombres.slice(0, -2) + ` e ${obxetoJSON[i]["name"]}.`;
    } else {
      textoNombres += `${obxetoJSON[i]["name"]}, `;
    }
  }

  /* Probando de otra manera */
  let nombres = obxetoJSON.map((o) => o.name);
  let ultimo = nombres.pop();
  console.log(
    nombres.length > 0 ? nombres.join(", ") + " e " + ultimo : ultimo + "."
  );

  /* Gatiños  de la primera forma*/
  let gatiños = 0;
  let machos = 0;
  let femias = 0;

  function gatos() {
    for (let gato of obxetoJSON) {
      for (let gatiño of gato["kittens"]) {
        gatiños += 1;
        if (gatiño["gender"] == "f") {
          femias += 1;
        } else {
          machos += 1;
        }
      }
    }
  }

  gatos();
  console.log(`Hai ${gatiños} gatiños: ${femias} femias e ${machos} machos`);

  /* Gato de la segunda forma */
  const gatiñosMap = obxetoJSON.flatMap((gato) => gato.kittens);
  console.log(gatiñosMap);

  console.log(
    `Hai ${gatiñosMap.length} gatiños: ${
      gatiñosMap.filter((x) => x.gender === "f").length
    } feminas e ${
      gatiñosMap.length - gatiñosMap.filter((x) => x.gender === "f").length
    } machos`
  );
});
