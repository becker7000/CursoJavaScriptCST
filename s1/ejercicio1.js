
let sinIVA=prompt("Escribe un monto sin I.V.A. => ");
let conIVA=1.16*parseFloat(sinIVA);
document.write("<br> El monto con IVA es: $"+conIVA.toPrecision(6));