const inputBox = document.getElementById("input");
const result = document.getElementById("risultato");

const nomi = [
    "Andrea",
    "ANDREA",
    "andrea",
    "Alice",
    "ALICE",
    "alice",
    "Alessia",
    "ALESSIA",
    "alessia",
    "Asya",
    "ASYA",
    "asya",
    "Luca",
    "LUCA", 
    "luca",
];

const lorenzo = [
    "lorenzo",
    "Lorenzo",
    "LORENZO"
];

function send() {
    if (nomi.includes(inputBox.value.trim())) {
        let numero = Math.floor(Math.random() * 100) + 1;

        result.innerHTML = numero + "%";
    }
    else if (lorenzo.includes(inputBox.value.trim())) {
        alert("Ci hai provato, coglione/a")
        inputBox.value = "";
    }
    else {
        alert("Scrivi il nome in modo corretto, coglione/a")
        inputBox.value = "";
    }
}

inputBox.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        send();
    }
})