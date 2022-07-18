const heroesInfo = document.querySelector(".heroesInfo")
const planets = document.querySelector(".planets")
const getInf = document.querySelector(".info")
const getPlanet = document.querySelector(".getPlanets")
const nextPagebtn = document.querySelector(".nextPage")
const previousPagebtn = document.querySelector(".previousPage")
const select = document.getElementById("film");

let nextPage
let previousPage

let image = [{
  name : "Darth Vader",
  cartoon : "img/DarthVader.jpg"
}, 
{
  name : "Darth Vader",
  cartoon : "img/Bossk.jpg"
}
]

async function getInfo () {
  await fetch(`https://swapi.dev/api/films/${select.value}/`)
  .then(
      (response) => response.json())
  .then((response) => {
      heroesInfo.innerHTML = ""
      response.characters.forEach(el => {
         fetch(el)
        .then((res) => res.json())
        .then((res) => {
        heroesInfo.insertAdjacentHTML( 
          "beforeend",
          `<div class="container">
            <p>${res.name}</p>
            <p>${res.gender}</p> 
            <p>${res.birth_year}</p>
          </div>`
        )
        });
      })
    })
}

getInf.addEventListener("click", getInfo)
getPlanet.addEventListener("click", getPlanets)
nextPagebtn.addEventListener("click", listNextPage)
previousPagebtn.addEventListener("click",  listPreviousPage)

async function getPlanets () {
  await fetch("https://swapi.dev/api/planets/?page=1")
  .then(
    (response) => response.json())
  .then(
    (res) => {
      let plans = []
      nextPage = res.next
      previousPage = res.previous
      res.results.forEach(el => plans.push(el.name))
      planets.insertAdjacentHTML( 
        "beforeend",
        `<div>
        <p>${plans}</p>
        </div>`
      )
    } )
}

async function listNextPage () {
  await fetch(`${nextPage}`)
  .then(
    (response) => response.json())
  .then(
    (res) => {
      planets.innerHTML = ""
      let plans = []
      nextPage = res.next
      previousPage = res.previous
      res.results.forEach(el => plans.push(el.name))
      planets.insertAdjacentHTML( 
        "beforeend",
        `<div>
        <p>${plans}</p>
        </div>`
      )
    }
  )
}

async function listPreviousPage () {
  await fetch(`${previousPage}`)
  .then(
    (response) => response.json())
  .then(
    (res) => {
      planets.innerHTML = ""
      let plans = []
      nextPage = res.next
      previousPage = res.previous
      res.results.forEach(el => plans.push(el.name))
      planets.insertAdjacentHTML( 
        "beforeend",
        `<div>
        <p>${plans}</p>
        </div>`
      )
    }
  )
}

