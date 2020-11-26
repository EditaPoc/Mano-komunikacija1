let currentName;

const UI = {
    date: document.querySelector(".date"),
    names: document.querySelector(".names"),
    revealButton: document.querySelector(".revealButton"),
};

// UI.revealButton.addEventListener("click", () => {
//     console.log("Mygtukas paspaustas");

    fetchName();
// });

function fetchName() {
    fetch("https://api.abalin.net/today?country=lt&timezone=Europe%2FPrague").then((response) => {
        console.log("Vardas iš serverio gautas", response);

        response.json().then((data) => {
            console.log("Vardas paverstas į JSON", data);
            currentName = data;

            console.log(currentName);
            renderName();
        });
    });
}

function renderName(){
    UI.date.innerHTML = currentName.date;
    UI.names.innerHTML = currentName.names;

}


