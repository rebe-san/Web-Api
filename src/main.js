const container = document.getElementById("container-cards");  //Esta es la sección donde se van a pintar las tarjetas
const url = 'https://ghibliapi.herokuapp.com/films';

const printData = (element) => {
    return `
    <div class="card">
        <div class="card-body">
                <h2 class="card-title">Title:${element.title}</h2>
                <p>Director: ${element.director}</p>
                <p>Release Date :${element.release_date}</p>
                <p class="card-text">Description: ${element.description}</p>
        </div>
    </div>`;
};


fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        let movies = '';
        data.forEach(element => {
            movies +=
                printData(element);
        });
        container.innerHTML = movies;
    })
    .catch(function(error) {
        console.log(error);
    });       


