(() => {
  let quantity;
  let numbers = [];

  window.addEventListener("load", () => {
    document.getElementById("XX00").innerHTML = "QUANTAS DEZENAS?";
    document.getElementById("00").appendChild(createInput("quantity"));
  });

  document.getElementById("start").addEventListener("click", () => {
    start();
  });

  function start() {
    if (numbers.length > 0) {
      setTimeout(refresh, 1500);
    } else {
      document.getElementById("XX00").innerHTML = "AGUARDE . . .";
      quantity = Number(document.getElementById("quantity").value);
      setTimeout(generate, 1500);
    }
  }

  function generate() {
    document.getElementById("00").innerHTML = "GERANDO PALPITES";
    let num = Math.floor(Math.random() * 60) + 1;
    if (numbers.indexOf(num) === -1) numbers.push(num);
    document.getElementById("XX00").innerHTML = `${numbers.length}ª DEZENA`;
    if (numbers.length < quantity) {
      setTimeout(generate, 750);
    } else {
      setTimeout(end, 1000);
    }
  }

  function end() {
    console.log(numbers);
    document.getElementById("H01").innerHTML += "   ";
    document.getElementById("XX00").innerHTML = "BOA SORTE!";
    document.getElementById("XX01").innerHTML =
      "Se Ganhar, não esqueça de mim :)";
    document.getElementById("00").innerHTML = "";
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
})();
