let user = { // user object 
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('ahhhhh!');
    }
}

console.log(user.age) // 0(1)
console.log(user.spell = 'abra kadabra') // 0(1)
console.log(user.scream()) // 0(1)


//Map --> Gives you some order
const a = new Map()
//Set --> No duplicate keys
const b = new Set()