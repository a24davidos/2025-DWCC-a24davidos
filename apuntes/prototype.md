¡Perfecto! 😄 Vamos a crear un ejemplo completo, paso a paso, para que veas **cómo funciona un constructor, prototipo y métodos heredados**, y añadimos un método para calcular la edad.

---

### 1️⃣ Constructor con nombre y año de nacimiento

```js
function Person(name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
}
```

* `Person` → función constructora
* Cada vez que hacemos `new Person(...)` se crea un objeto con `name` y `birthYear`

---

### 2️⃣ Añadir métodos al prototipo

```js
// Método para saludar
Person.prototype.sayHello = function() {
  console.log(`Hola, me llamo ${this.name}`);
};

// Método para calcular edad
Person.prototype.calcAge = function(currentYear) {
  return currentYear - this.birthYear;
};
```

* Los métodos van en `Person.prototype` → **todas las instancias los comparten**
* No se crean copias para cada objeto → ahorro de memoria

---

### 3️⃣ Crear instancias

```js
const alice = new Person("Alice", 1990);
const bob = new Person("Bob", 1985);
```

* `alice` y `bob` son **objetos diferentes**
* Ambos heredan los métodos de `Person.prototype`

---

### 4️⃣ Usar los métodos

```js
alice.sayHello(); // Hola, me llamo Alice
bob.sayHello();   // Hola, me llamo Bob

console.log(alice.calcAge(2025)); // 35
console.log(bob.calcAge(2025));   // 40
```

---

### 🔍 Qué pasa internamente (cadena de prototipos)

```
alice
│
├─ name: "Alice"
├─ birthYear: 1990
└─ [[Prototype]] → Person.prototype
                     │ sayHello: f()
                     │ calcAge: f()
                     │ constructor: Person
                     │ [[Prototype]] → Object.prototype
                                         │ toString(), hasOwnProperty(), ...
```

* `alice` → no tiene `sayHello` directamente, lo busca en `Person.prototype`
* `Object.prototype` → método final donde están `toString()`, etc.

---

### ✅ Ventaja

* Puedes crear **cientos de personas** sin que cada una tenga su propia copia de los métodos
* Si cambias `Person.prototype.sayHello` más tarde, todas las instancias lo notan automáticamente.

