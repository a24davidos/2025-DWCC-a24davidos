// const createApp = Vue.createApp;
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Ola mundo!",
      numero: 8,
      boolenano: true,
      array: [0, 1, 2, 3],
      obxecto: { nome: "david" },
    };
  },
}).mount("#app");

//Mi duda: Porque de la manera anterior me funciona, y de la siguiente no?

// // const createApp = Vue.createApp;
// import { createApp } from "vue";

// const app = createApp({
//   data() {
//     return {
//       message: "Ola mundo!",
//       numero: 8,
//       boolenano: true,
//       array: [0, 1, 2, 3],
//       obxecto: { nome: "david" },
//     };
//   },
// }).mount("#app");
