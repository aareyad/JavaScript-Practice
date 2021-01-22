# JavaScript Problem

Solutions and explanation of JS problem.

---

# Table Of Contents

- [Write a program that takes an array and moves all of the zeros to the end, preserving the order of the other elements](#moves-all-of-the-zeros-to-the-end)

---

## [Move all of the zeros to the end](#zeros-to-the-end)

_Create a function that will move all of the zeros to the end._

**Example:**

```javascript
> console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
> [false, 1, 1, 2, 1, 3, "a", 0, 0]
```

**Solution:**

```javascript
function moveZeros( data ) {
	let zero = [];
	for ( let i = 0; i < data.length; i++ ) {
		if ( data[i].toString() == 0 ) {
			let removed = data.splice( i, 1 );
			zero.push( removed[0] );
		} 
	}
	return data.concat( zero );
}
```

**Reference:**

- [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

* [Array.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

* [Array.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

* [Array.toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)

* [Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

---
