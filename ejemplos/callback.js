function uno (dos) {
    console.log("uno");
    setTimeout(dos, 2000)
}

function dos (tres) {
    console.log("dos");
    setTimeout(tres, 1000)
}

function tres (cuatro) {
    console.log("tres");
    setTimeout(cuatro, 1000)
}

function cuatro (cinco) {
    console.log("cuatro");
    setTimeout(cinco, 1000)
}

function cinco () {
    console.log("cinco");
}

setTimeout(() => uno(dos), 3000)

//callback hell
setTimeout(() => uno(() => dos(() => tres(() => cuatro(() => cinco())))), 3000)
//mas de 3 callbacks es un callback hell

//Las promesas son una forma de evitar el callback hell
