function generar() {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);

  if (isNaN(min) || isNaN(max) || min > max) {
    document.getElementById("resultado").textContent =
      "Introduce un rango válido";
    return;
  }

  const numero =
    Math.floor(Math.random() * (max - min + 1)) + min;

  document.getElementById("resultado").textContent =
    `Número generado: ${numero}`;
}
