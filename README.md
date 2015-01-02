# js-bits
Tiny library for manipulating bits in JavaScript (Nodejs and broswer). Below is the `example.js` file:
```
var Bits= require('js-bits')
var mask= 0
```
## Bits.set(mask, position)
```
mask= Bits.set(mask, 0)
console.log((mask).toString(2)) // 1
mask= Bits.set(mask, 3)
console.log((mask).toString(2)) // 1001
```
## Bits.unset(mask, position)
```
mask= Bits.unset(mask, 3)
console.log((mask).toString(2)) // 1
```
## Bits.get(mask, position)
```
console.log( Bits.get(mask, 3) ) // 0
console.log( Bits.get(mask, 0) ) // 1
```
## Bits.toggle(mask, position)
```
mask= Bits.toggle(mask, 3)
console.log((mask).toString(2)) // 1001
mask= Bits.toggle(mask, 0)
console.log((mask).toString(2)) // 1000
```
## Bits.setMany(mask, [position1, pos2, ...])
```
mask= Bits.setMany(mask, [0, 1, 2])
console.log((mask).toString(2)) // 1111
```
## Bits.unsetMany(mask, [position1, pos2, ...])
```
mask= Bits.unsetMany(mask, [1, 2])
console.log((mask).toString(2)) // 1001
```
## Bits.toArray(mask, arraySize)
```
var arr= Bits.toArray(mask, 4)
console.log( arr ) // [1, 0, 0, 1]
```
## Bits.fromArray(array)
```
console.log( (Bits.fromArray(arr)).toString(2) ) // [1, 0, 0, 1]
```

## Installation
```
npm install js-bits
```

## Browser 
```
<script src='js-bits.js'></script>
<script>
var mask= 0;
window.Bits.set(mask, 0);
</script>
```
---
MIT License (MIT)