
function mostrar(op) {
    if (op === "if") calidadAire();
    if (op === "for") ruidoAmbiental();
    if (op === "while") focosCalor();
    if (op === "switch") tipoResiduo();
    if (op === "do") nivelesRio();
}

// 1. IF – Clasificación de calidad del aire (AQI)
function calidadAire() {
    let aqi = Number(prompt("Ingrese el valor AQI:"));
    let calidad = "";

    if (aqi <= 50) calidad = "Bueno";
    else if (aqi <= 100) calidad = "Moderado";
    else if (aqi <= 150) calidad = "Dañino para grupos sensibles";
    else if (aqi <= 200) calidad = "Dañino";
    else if (aqi <= 300) calidad = "Muy dañino";
    else calidad = "Peligroso";

    resultado.innerHTML = `
        <h2>Calidad del Aire</h2>
        <p>AQI ingresado: <b>${aqi}</b></p>
        <p>Clasificación: <b>${calidad}</b></p>
    `;
}

// 2. FOR – Registrar niveles de ruido ambiental
function ruidoAmbiental() {
    let n = Number(prompt("¿Cuántas mediciones de ruido registrarás?"));
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        let db = Number(prompt(`Medición ${i} en decibeles (dB):`));
        suma += db;
    }

    let promedio = (suma / n).toFixed(1);

    resultado.innerHTML = `
        <h2>Ruido Ambiental</h2>
        <p>Mediciones registradas: ${n}</p>
        <p>Promedio: <b>${promedio} dB</b></p>
    `;
}

// 3. WHILE – Contar focos de calor
function focosCalor() {
    let temp = Number(prompt("Ingrese temperatura (0 para terminar):"));
    let focos = 0;

    while (temp !== 0) {
        if (temp > 45) focos++;
        temp = Number(prompt("Ingrese temperatura (0 para terminar):"));
    }

    resultado.innerHTML = `
        <h2>Focos de Calor Detectados</h2>
        <p>Temperaturas mayores a 45°C: <b>${focos}</b></p>
    `;
}

// 4. SWITCH – Clasificación del tipo de residuo
function tipoResiduo() {
    let code = Number(prompt("Ingrese código del residuo (1-4):"));
    let tipo = "";

    switch (code) {
        case 1: tipo = "Orgánico"; break;
        case 2: tipo = "Plástico"; break;
        case 3: tipo = "Papel / Cartón"; break;
        case 4: tipo = "Vidrio"; break;
        default: tipo = "Código inválido";
    }

    resultado.innerHTML = `
        <h2>Clasificación de Residuo</h2>
        <p>Tipo: <b>${tipo}</b></p>
    `;
}

// 5. DO WHILE – Monitoreo del nivel del río
function nivelesRio() {
    let entrada;
    let niveles = [];
    let alerta = false;

    do {
        entrada = prompt("Ingrese nivel del río en metros o escriba 'no' para terminar:");

        if (entrada.toLowerCase() !== "no") {
            let nivel = Number(entrada);

            niveles.push(nivel);
            if (nivel > 3) alerta = true;
        }

    } while (entrada.toLowerCase() !== "no");

    resultado.innerHTML = `
        <h2>Niveles del Río</h2>
        <p>Valores: <b>${niveles.join(", ")}</b></p>
        <p>Estado: <b>${alerta ? "⚠ Nivel peligroso (> 3 m)" : "Nivel normal"}</b></p>
    `;
}
