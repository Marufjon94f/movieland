const elFilmsList = document.querySelector(".js-film-list");
const elLoader = document.querySelector(".loader");
const elFilmPrev = document.querySelector(".js-button_prev");
const elFilmNext = document.querySelector(".js-button_next");

let page = 1;


function getData (page){
    fetch(`http://www.omdbapi.com/?apikey=9fcd4d84&i=tt3896198&s=home&page=${page}`)
.then((response)=>response.json())
.then((data)=> {

    elLoader.style.display= "none";
    working(data.Search);

});

function working (array){
    array.forEach(element =>{
        renderFilms(element);
    });
}
}

function renderFilms (object){
    const newLi = document.createElement("li");
    const newTitle = document.createElement("h4");
    const newPic = document.createElement("img");
    const newP = document.createElement("p");
    const newP1 = document.createElement("p");

    newTitle.textContent = object.Title;
    newPic.src = object.Poster;
    newP.textContent = object.Type;
    newP1.textContent = object.Year;

    newLi.setAttribute ("class", "js-item");
    newPic.setAttribute ("class", "js-pic");

    elFilmsList.appendChild(newLi);
    newLi.appendChild(newTitle);
    newLi.appendChild(newPic);
    newLi.appendChild(newP);
    newLi.appendChild(newP1);

}
elFilmNext.addEventListener("cilck", nextPage);
function nextPage(){
    elFilmsList.innerHTML = null;
    page = page + 1;
    getData(page)
};

getData(page);

elPrev.addEventListener("click", prevPage)
function prevPage() {
  elFilmsList.innerHTML = "";
  page = page - 1;
  getData(page);
};  

getData(page);