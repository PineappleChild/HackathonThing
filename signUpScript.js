//import { Random } from "random-js";
//const random = new Random();

  function btnSubmit() {
    str = "";
    c = String.fromCharCode(Math.floor(Math.random() * 24 + 65));
    str += c;
    var int  = Math.floor(Math.random() * 99) + 900;
    c2= String.fromCharCode(Math.floor(Math.random() * 24 + 65));
    c3 = String.fromCharCode(Math.floor(Math.random() * 24 + 65));
    str += int;
    str += c2;
    str += c3;
    var int2 = Math.floor(Math.random() * 999) + 9000;
    str += int2;
    console.log(str);
    return str;
  }

  var loadToken = window.onload = btnSubmit();
  const tokenSpot = document.querySelector("h1")
  tokenSpot.innerHTML = loadToken;

  
 