document.addEventListener('DOMContentLoaded', () => {
    // call functions here
    fetchDogs()

})

function fetchDogs() {
    fetch(`http://localhost:3000/pups`)
        .then(res => res.json())
        .then(json => {
            json.forEach(addPups)
            // console.log(json)

        })
}


//Add Pups to dog bar, need to make a loop to fetch all the pup objects, so go back to fetchDogs function to forEach
function addPups(pup) {
    //creating elements
    let span = document.createElement('span')

    //give context
    span.textContent = pup.name

    //append 
    document.querySelector("#dog-bar").append(span)

    span.addEventListener('click', () => {
        renderPups(pup) //calling a function inside here instead of writing it out

    })
}

//Rendering Cards in a way for the pups to go in.
function renderPups(pup) {
    //making elements
    let img = document.createElement('img')
    let h2 = document.createElement('h2')
    let btn = document.createElement('button')

    //give context
    img.src = pup.image
    h2.textContent = pup.name
    btn.textContent = "Good Dog"

    //clear the doginfo container right before the container!!!
    document.querySelector("#dog-info").innerHTML = ""
    //append
    document.querySelector("#dog-info").append(img, h2, btn)


    btn.addEventListener('click', () => {
        changeDog(btn) //calling a new function in here to re-use btn and also not to write nested nested functions

    })

}

function changeDog(btn) {
    //if btn said Good Dog then change to bad dog, else btn will say goddog!
    if (btn.textContent === 'Good Dog') {
        btn.textContent = 'Bad Dog'
    } else {
       btn.textContent = "Good Dog"
    }


}