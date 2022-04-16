elenco = {
    1: "Bonato",
    2: "Brazzale",
    3: "Cantaro",
    4: "Contrafatto",
    5: "Fongaro",
    6: "Guglielmi",
    7: "Kaneda",
    8: "Losco",
    9: "Marchese",
    10: "Marchioro",
    11: "Milicic",
    12: "Miraglia",
    13: "Pesavento",
    14: "Riato",
    15: "Schirato",
    16: "Valmorbida",
    17: "Velo",
    18: "Zonta"
}

liste = {
    Elenco: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
    Sistemi: [12,11,15,9,8,1,7,17,14,4,5,6,3,13,18,10,16,2],
    Informatica: [14,9,8,1,12,7,2,16,3,15,13,11,5,4,18,17,6,10]
}


function loadLists(numero=0) {
    let table = document.getElementById("table");
    table.innerHTML = "";
    let materie = document.createElement("tr");
    table.appendChild(materie);
    
    for (let materia in liste) {
        let titoloMateria = document.createElement("th");
        titoloMateria.innerText = materia;
        materie.appendChild(titoloMateria);
    }

    for (let i=0; i<18; i++) {
        let row = document.createElement("tr");

        for (let materia in liste) {
            let td = document.createElement("td");
            let estratto = liste[materia][i];
            td.innerText = `${estratto} - ${elenco[estratto]}`;
            if (numero == estratto) {
                td.classList.add("selected");
            }
            row.appendChild(td);
        }

        table.appendChild(row);
    }
}


function select() {
    let numero = document.getElementById("numero").value;
    loadLists(numero);
}


window.onload = loadLists();
