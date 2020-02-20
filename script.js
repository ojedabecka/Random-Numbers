//Declaração de variaveis
var NUM = [],
  stt,
  NEA,
  NN,
  str,
  STATUS,
  X = 6;

function INICIO() {
  if (NEA) {
    document.getElementById("XX00").innerHTML = "AGUARDE . . .";
    setTimeout(RELOAD, 1500);
  } else {
    MEGA();
  }
}
function GeraDez() {
  var W;
  var txt = " ";
  var NMR = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  for (W = 0; W < NMR.length; W++) {
    if (NMR[W] < 10) {
      NMR[W] = "0" + NMR[W];
    }
    txt +=
      "<div class='mod'>" +
      "<a href=javascript:pegadez(" +
      NMR[W] +
      ")>" +
      NMR[W] +
      "</a>" +
      "</div>";
  }
  document.getElementById("00").innerHTML = txt;
  document.getElementById("XX00").innerHTML = " QUANTAS DEZENAS? ";
}

function pegadez(dez) {
  X = dez;
}

//INICIO MEGA
function MEGA() {
  NN = Math.floor(Math.random() * 30) + 1;
  if (NN < 10) {
    NN = "0" + NN;
  }
  //CONVERTE ARRAY P/ STRING => se não usar o get, da erro...
  str = document.getElementById("H00").innerHTML = NUM.toString();
  //LIMPA H00
  document.getElementById("H00").innerHTML = "";

  //VERIFICA SE NN JÁ FOI SORTEADO => pos É A POSIÇÃO DA STRING NA ARRAY, -1 É QDO NÃO ENCONTRA
  var pos = str.search(NN);
  if (pos == -1) {
    //ARMAZENA EM "ARRAY NUM"
    NUM.push(NN);
    //ENVIA PRA TELA
    document.getElementById("H01").innerHTML += " " + NN;
    //Nº de ARRAYS
    NEA = NUM.length;
  }
  if (NEA < X) {
    STATUS = "ON";
    var LOOPING = setTimeout(MEGA, 750);
  } else {
    STATUS = "OFF";
    var FIM = setTimeout(LHORIZ, 1000);
  }
  document.getElementById("00").innerHTML = " GERANDO PALPITES ";
  document.getElementById("XX00").innerHTML = " " + NEA + "ª " + "DEZENA";
}
//FIM MEGA

function RELOAD() {
  window.location.reload(true);
}

function LHORIZ() {
  document.getElementById("H01").innerHTML += "   ";
  document.getElementById("XX00").innerHTML = "BOA SORTE!";
  document.getElementById("XX01").innerHTML =
    "Se Ganhar, não esqueça de mim :)";
  document.getElementById("00").innerHTML = "";
}
