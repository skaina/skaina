//code 1

const amount = 50


if(amount < 10){
    console.log('small number')
} else {
    console.log('big number')
}

console.log('hey !')


//in node there is no window object
//global objects : we can access to them in any way of the project:
// process   - info about environnement where the program is being executed

// _dirname  - path to current directory

console.log(__dirname)

setInterval(() => {
    console.log('hello word')
}, 1000)

/*
//functions
function nom([param[, param[, ... param]]]) {  nom : Le nom de la fonction
   instructions
}

//fonction fléchée : 

const funcName = (param1, ..) =>{
    console.log(param1)
}
 
to call the function : 
funcName(valeurParam1)

const sayHi = (name) => {
    console.log('hello there ${name}')
}

sayHi('soukaina')
*/


// Modules -> to split the code in modules