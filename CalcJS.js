function CalcularTip() {
  var Monto = document.getElementById("Monto").value;
  var Servicio = document.getElementById("Servicio").value;
  var numPer = document.getElementById("numPer").value;

  if (Monto === "" || Servicio == 0 || numPer == "") {
    alert("Ingrese valores");
    return;
  }
  
  var total = (Monto * Servicio) / numPer;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  document.getElementById("Total").style.display = "block";
  document.getElementById("tip").innerHTML = "$" + total;
  document.getElementById("body").style.background = "#00CDB4";

}

document.getElementById("Total").style.display = "none";

