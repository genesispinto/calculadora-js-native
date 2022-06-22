let btn = document.getElementById('btn');
var currentDiv = document.getElementById("root");
let num1;
let num2;
let resultado = 0;
let btnResta;
let btnSuma;
let btnMult;
let btnDiv;
let operador;

creaBotones = () => {
    div1 = document.createElement("div");
    div1.setAttribute("id", "operadores")
    document.body.appendChild(div1);
    //------------------btn resta
    btnResta = document.createElement("input");
    btnResta.setAttribute("type", "button");
    btnResta.setAttribute("value", "-");
    btnResta.setAttribute("id", "menos");
    document.body.insertBefore(btnResta, btn);
    //-------------------btn suma
    btnSuma = document.createElement("input");
    btnSuma.setAttribute("type", "button");
    btnSuma.setAttribute("value", "+");
    btnSuma.setAttribute("id", "mas");
    document.body.insertBefore(btnSuma, btn);
    //-------------------btn multiplicacion
    btnMult = document.createElement("input");
    btnMult.setAttribute("type", "button");
    btnMult.setAttribute("value", "x");
    btnMult.setAttribute("id", "mult");
    document.body.insertBefore(btnMult, btn);
    //-------------------btn division
    btnDiv = document.createElement("input");
    btnDiv.setAttribute("type", "button");
    btnDiv.setAttribute("value", "/");
    btnDiv.setAttribute("id", "div");
    document.body.insertBefore(btnDiv, btn);
    //------------------------------
    div1.appendChild(btnResta);
    div1.appendChild(btnSuma);
    div1.appendChild(btnMult);
    div1.appendChild(btnDiv);
}

creaBotones();
resta = () => {
    console.log("prueba click resta");
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = parseInt(num1) - parseInt(num2);
    operador = "-";
}
suma = () => {
    console.log("prueba click suma");
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = parseInt(num1) + parseInt(num2);
    operador = "+";
}
mult = () => {
    console.log("prueba click *");
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = parseInt(num1) * parseInt(num2);
    operador = "*";
}
div = () => {
    console.log("prueba click /");
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = parseInt(num1) / parseInt(num2);
    operador = "/";
}

mostrarResultado = () => {
    console.log("prueba click resultado");
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "idPrueba");
    var newContent = document.createTextNode(num1 + operador + num2 + "= " + resultado);
    newDiv.appendChild(newContent);
    div1.insertAdjacentElement("afterend", newDiv);
}

btnResta.addEventListener("click", resta);
btnSuma.addEventListener("click", suma);
btnMult.addEventListener("click", mult);
btnDiv.addEventListener("click", div);
btn.addEventListener("click", mostrarResultado);