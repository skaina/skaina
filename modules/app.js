const names = require ('./names') //assign the modile.exports variables from the ./names file to the variable name
const sayHy = require('./function_utils')
const data = require('./alternative-flavor')



//console.log(names)

sayHy(names.souka)
sayHy('soukaina')
sayHy(names.peter)
sayHy(data.items1[0])

require('./mind-grenade') //executing a funnction rather than exporting the all file!
