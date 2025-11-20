// 1.- Dada a seguinte constante, fai as operacións necesarias para que o primeiro carácter estea en maiúscula:

const cadea = 'desenvolvemento web'

console.log(cadea.at(0).toUpperCase() + cadea.slice(1));

// 2.- Crea unha función denominada reverseString á que se lle pase unha cadea e devolva unha nova cadea cos caracteres da orixinal en sentido inverso

function reverso(cadea) {
    let resultado = "";
    for (let i = cadea.length - 1; i >= 0; i--) {
        resultado += cadea[i]
    }
    return resultado
}

console.log(reverso(cadea));

/* 3.- Crea unha función denominada enmascarar á que se lle pase unha cadea de números e devolva unha cadea da mesma lonxitude que a pasada como parámetro pero formada formada por * e as últimas 4 cifras do parámetro de entrada. */

let dni = "48110559X"


function enmascarar(entrada) {
    return entrada.slice(-4).padStart(entrada.length, "*")
}

console.log(enmascarar(dni));

/* 1.- ¿Como calcularías o número de cifras dun número enteiro positivo utilizando propiedades e métodos dos obxectos vistos ata agora? */

numero = 1000

console.log(String(numero).length);


/* 1. Números aleatorios: Xera un número enteiro aleatorio entre 0 e 3 (incluídos). */

console.log(Math.round((Math.random() * 3)));

/* Xera un número enteiro aleatorio entre 1 e 3 (incluídos). */

console.log(Math.ceil(Math.random() * 3));


/* Crea unha función que devolva un número enteiro aleatorio entre os dous valores pasados como parámetros. Así, por exemplo, a seguinte instrución 
debe mostrar un número aleatorio entre 5 e 10 (incluídos): */

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(numeroAleatorio(5, 10));

/* Crea unha función á que se lle pase como parámetro o número de minutos e
devolva un string indicando a súa equivalencia en horas e minutos. */

let minutos = 1440;

function horasMinutos(minutos) {
    return `Horas: ${Math.floor(minutos / 60)} Minutos: ${minutos % 60} `
}

console.log(horasMinutos(minutos));


//DATAS:

/* 1. Mostra o día da semana (en letra) do 25 de xullo do ano actual. */

const fecha = new Date(2025, 6, 25)

console.log(fecha.getMonth());


function mesString(fecha) {
    switch (fecha.getMonth()) {
        case 0:
            console.log("xaneiro");
            break;
        case 1:
            console.log("febreiro");
            break;
        case 2:
            console.log("marzo");
            break;
        case 3:
            console.log("abril");
            break;
        case 4:
            console.log("maio");
            break;
        case 5:
            console.log("xunio");
            break;
        case 6:
            console.log("xullo");
            break;
        case 7:
            console.log("agosto");
            break;
        case 8:
            console.log("setembro");
            break;
        case 9:
            console.log("outubro");
            break;
        case 10:
            console.log("novembro");
            break;
        case 11:
            console.log("decembro");

        default:
            break;
    }
}

mesString(fecha)

/* 2.- Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de días dese mes */

const nFecha = new Date(2025, 1, 0)


function diasDoMes(mes) {
    const fecha = new Date(2025, mes, 0)
    return fecha.getDate()
}

console.log(diasDoMes(1));

/* 4.-Crea unha función que reciba unha data como parámetro e devolva o número de días que pasaron dende que comezou o ano */

const newFecha = new Date(2025, 7, 26)

console.log(newFecha);


function diasPasados(data) {

    const mes = data.getMonth() + 1
    let dias = 0

    for (let i = 1; i < mes; i++) {
        dias += diasDoMes(i)

    }

    return dias + data.getDate()
}


console.log(diasPasados(newFecha));

// ARRAYS

/* 1. Crea unha función que reciba como parámetros un elemento e un array. A función debe devolver un novo array que conteña os índices onde aparece ese elemento no array. */

const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];

function indices(elemento, arrayElementos) {
    const array = [];
    for (let i = 0; i < arrayElementos.length; i++) {
        if (arrayElementos[i] == elemento) {
            array.push(i)
        }
    }
    return array;
}

console.log(indices(1, numeros));

/*2.- Dado o array froitas (const froitas = ['peras', 'mazás', 'kiwis', 'plátanos',
'mandarinas'];) , fai os seguintes apartados co método splice: */

const froitas = ['peras', 'mazás', 'kiwis', 'plátanos', 'mandarinas']

/* a. Elimina as mazás. */

froitas.splice(1, 1)
console.log(froitas);

/* b. Engade laranxas e sandía detrás dos plátanos,. */

froitas.splice(3, 0, "laranxas", "sandía")
console.log(froitas);


/* c. Quita os kiwis e pon no seu lugar cereixas e nésperas. */

froitas.splice(1, 1, "cereixas", "nesperas")
console.log(froitas);
console.log(froitas.join(", "));


/* 3.- Crea unha función á que se lle pase unha frase con varias palabras e devolva a mesma frase coa primeira letra de cada palabra en maiúsculas e o resto de letras en minúsculas. */

let frase = "ei tio que bien te veo cabron"

let nueva = frase.split(" ");

console.log(nueva);


function mayusculas(frase) {

    let palabras = frase.split(" ");
    let resultado = "";

    for (palabra of palabras) {
        resultado += (palabra[0].toUpperCase() + palabra.slice(1) + " ")

    }
    return resultado
}


console.log(mayusculas(frase));



