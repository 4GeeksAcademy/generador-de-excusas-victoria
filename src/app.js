window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function obtenerElementoAleatorio(array) {
    let indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
  }

  function excusaRandom() {
    let randomWho = obtenerElementoAleatorio(who);
    let randomAction = obtenerElementoAleatorio(action);
    let randomWhat = obtenerElementoAleatorio(what);
    let randomWhen = obtenerElementoAleatorio(when);
    return randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
  }

  let elemento = document.getElementById("excusa");
  let randomExcusa = excusaRandom();
  elemento.innerHTML = randomExcusa;
};
