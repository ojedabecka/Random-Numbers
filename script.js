(() => {
  let quantity;
  let numbers = [];

  window.addEventListener("load", () => {
    document.getElementById("upperMessage").innerHTML = "QUANTAS DEZENAS?";
    document.getElementById("numbers").appendChild(createInput("quantity"));
  });

  document.getElementById("start").addEventListener("click", () => {
    start();
  });

  function start() {
    if (numbers.length > 0) {
      setTimeout(refresh, 1500);
    } else {
      document.getElementById("upperMessage").innerHTML = "AGUARDE . . .";
      quantity = Number(document.getElementById("quantity").value);
      setTimeout(() => {
        deleteElementById("quantity");
        generate();
      }, 1500);
    }
  }

  function generate() {
    document.getElementById("upperMessage").innerHTML = "GERANDO PALPITES";
    let num = Math.floor(Math.random() * 60) + 1;
    num = num < 10 ? `0${num}` : String(num);
    let i = numbers.length + 1;
    if (numbers.indexOf(num) === -1) {
      numbers.push(num);
      document
        .getElementById("numbers")
        .appendChild(createDiv(`result-${i}`, "results", numbers[i - 1]));
      document.getElementById("bottomMessage").innerHTML = `${i}ª DEZENA`;
    }
    if (i < quantity) {
      setTimeout(generate, 750);
    } else {
      setTimeout(end, 1000);
    }
  }

  function end() {
    document.getElementById("upperMessage").innerHTML = "BOA SORTE!";
    document.getElementById("bottomMessage").innerHTML =
      "Se Ganhar, não esqueça de nós :)";
    document.getElementById("btn-text").innerHTML = "REINICIAR";
  }

  function refresh() {
    window.location.reload(true);
  }

  function createInput(id) {
    let elem = document.createElement("input");
    elem.setAttribute("id", id);
    elem.setAttribute("min", "1");
    elem.setAttribute("max", "20");
    elem.setAttribute("step", "1");
    elem.setAttribute("value", "10");
    elem.setAttribute("type", "number");
    return elem;
  }

  function deleteElementById(id) {
    let elem = document.getElementById(String(id));
    return elem.parentNode.removeChild(elem);
  }

  function createDiv(id, classe, value) {
    let elem = document.createElement("div");
    elem.setAttribute("id", id);
    elem.setAttribute("class", classe);
    elem.innerHTML = value;
    return elem;
  }
})();
