const url = "https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image"

async function listaImagenes(){
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

        const card = document.querySelector("[data-ul]")

        data.collection.items.forEach( element => {
            const content = `
            <li class="card">
            <img class="card__image" src="${element.links[0].href}" alt="imagen">
            <h3 class="card__title">${element.data[0].photographer}</h3>
        </li>`
        card.innerHTML += content
        })
    } catch (error) {
        console.log(error)
    }

}

// function listaImagenes(){
//     fetch(url)
//     .then( response => response.json())
//     .then( data => {
//         console.log(data)

//         const card = document.querySelector("[data-ul]")

//         data.collection.items.forEach( element => {
//             const content = `
//             <li class="card">
//             <img class="card__image" src="${element.links[0].href}" alt="imagen">
//             <h3 class="card__title">${element.data[0].photographer}</h3>
//         </li>`
//         card.innerHTML += content
//         })
//     })
//     .catch( error => console.log(error))
// }

listaImagenes()
