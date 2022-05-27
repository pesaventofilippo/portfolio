let numero = 0;
let showCompleted = false;

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
    "Elenco": [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
                false],
    "Sistemi": [[12,11,15,9,8,1,7,17,14,4,5,6,3,13,18,10,16,2],
                [11,15,9,8,1,7,5,17,14,6,3,13,4],
                false],
    "Informatica": [[14,9,8,1,12,7,2,16,3,15,13,11,5,4,18,17,6,10],
                [13,14,8,1,7,2],
                false],
    "Motoria": [[1,5,15,6,11,8,14,7,12,17,18,16,3,9,2,13,10,4],
                [1,5,15,6,11,8,14,7,17,18,16,3,9],
                false],
    "Inglese": [[18,10,11,9,13,8,4,15,3,14,12,16,6,7,17,1,5,2],
                [18,10,9,11,8,4,15,3,13,14,6,16,7,1,17,5,2],
                true],
    "GPOI": [[12,7,16,10,8,18,15,9,13,17,14,4,1,6,3,11,2,5],
                [8,15,13,5,3,9,7,12,16,10,18],
                false],
    "Educazione Civica": [[7,16,15,14,2,17,9,13,8,5,4,6,18,12,10,3,1,11],
                [7,16,15,14,2,9,13,8,5,10,11,18,17,6,4,1,3],
                true],
}


function loadLists() {
    let table = document.getElementById("table");
    table.innerHTML = "";
    let materie = document.createElement("tr");
    table.appendChild(materie);
    
    for (let materia in liste) {
        if (showCompleted || !liste[materia][2]) {
            let titoloMateria = document.createElement("th");
            titoloMateria.innerText = materia;
            materie.appendChild(titoloMateria);
        }
    }

    for (let i=0; i<18; i++) {
        let row = document.createElement("tr");

        for (let materia in liste) {
            if (showCompleted || !liste[materia][2]) {
                let td = document.createElement("td");
                let estratto = liste[materia][0][i];
                td.innerText = `${estratto} - ${elenco[estratto]}`;
                if (numero == estratto)
                    td.classList.add("selected");
                if (liste[materia][1].includes(estratto))
                    td.classList.add("done");
                row.appendChild(td);
            }
        }

        table.appendChild(row);
    }
}


function select() {
    numero = document.getElementById("numero").value;
    loadLists();
}

function toggle() {
    showCompleted = !showCompleted;
    loadLists();
}

window.onload = loadLists();
