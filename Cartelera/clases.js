let getJSONData = function (url) {
    let result = {};
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(function (response) {
            result.status = 'ok';
            result.data = response;
            return result;
        })
        .catch(function (error) {
            result.status = 'error';
            result.data = error;
            return result;
        });
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData("https://francopanfilo.github.io/pelis.json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            pelisArray = resultObj.data;
        }
        let nuevaFila = document.createElement("tr")
        nuevaFila.innerHTML = ` `
        for (let i = 0; i < pelisArray.movies.length; i++) {
            let mostrar = pelisArray.movies[i]
            let peli = document.createElement("td")
            peli.innerHTML = `
            <td>
            <article>
            <h5>${mostrar.title}</h5>
            <img src="${mostrar.posterUrl}">
            <p class="año">${mostrar.year}</p>
            </article></td>`

            nuevaFila.appendChild(peli)
        }
        let tabla= document.getElementById("cuerpo")
        tabla.appendChild(nuevaFila)
    });
});
