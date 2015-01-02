var Bits= require('./index.js')
var mask= 0
console.log('\nBits.set(mask, position)')
mask= Bits.set(mask, 0)
console.log((mask).toString(2)) // 1
mask= Bits.set(mask, 3)
console.log((mask).toString(2)) // 1001

console.log('\nBits.unset(mask, position)')
mask= Bits.unset(mask, 3)
console.log((mask).toString(2)) // 1

console.log('\nBits.get(mask, position)')
console.log( Bits.get(mask, 3) ) // 0
console.log( Bits.get(mask, 0) ) // 1

console.log('\nBits.toggle(mask, position)')
mask= Bits.toggle(mask, 3)
console.log((mask).toString(2)) // 1001
mask= Bits.toggle(mask, 0)
console.log((mask).toString(2)) // 1000

console.log('\nBits.setMany(mask, [position1, pos2, ...])')
mask= Bits.setMany(mask, [0, 1, 2])
console.log((mask).toString(2)) // 1111

console.log('\nBits.unsetMany(mask, [position1, pos2, ...])')
mask= Bits.unsetMany(mask, [1, 2])
console.log((mask).toString(2)) // 1001

console.log('\nBits.toArray(mask, arraySize)')
var arr= Bits.toArray(mask, 4)
console.log( arr ) // [1, 0, 0, 1]

console.log('\nBits.fromArray(array)')
console.log( (Bits.fromArray(arr)).toString(2) ) // [1, 0, 0, 1]
