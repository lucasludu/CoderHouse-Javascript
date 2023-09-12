/*
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((resp) => resp.json())
    .then((data) => {
        console.table(data);
    })
    .catch(() => console.error("Exploto todoooo"));
*/


fetch("./productos.json")
    .then((resp) => resp.json())
    .then((data) => {
        const _frutas = data.frutas;
        const _frutasContainer = document.getElementById("frutas-container");

        _frutas.forEach((fr) => {
            const frutaElement = document.createElement("p");
            frutaElement.innerText = `
                Nombre: ${fr.nombre}, Color: ${fr.color}, Sabor: ${fr.sabor}
            `;
            _frutasContainer.appendChild(frutaElement);
        });

    })
    .catch(() => console.error("Ups, se rompio todo."));
