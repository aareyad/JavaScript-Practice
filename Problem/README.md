# JavaScript Problem

Solutions and explanation of JS problem.

---

# Table Of Contents

- [The parameter of accum is a string which includes only letters from a..z and A..Z.](#pattern-matching)
- [There is an array with some numbers. All numbers are equal except for one. Try to find it! It's guaranteed that array contains at least 3 numbers](#unique-number)
- [Write a program that takes an array and moves all of the zeros to the end, preserving the order of the other elements](#moves-all-of-the-zeros-to-the-end)

---

## [Pattern Matching](#parameter-sorted)

_Function that will return sorted string following the pattern_

**Example:**

```javascript
> console.log(accum("abcd"));
> console.log(accum("RqaEzty"));
> "A-Bb-Ccc-Dddd"
> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
```

**Solution:**

```javascript
function accum( data ) {
	let str = '';
		for ( let i = 0; i < data.length; i++ ) {
			for ( let j = 0; j < i+1; j++ ) {
				if ( j === 0 ) {
					str += data[i].toUpperCase();
				} else {
					str += data[i].toLowerCase();
				}
			}
			if ( i !== data.length - 1 ) {
				str += '-';
			}
	}
	return str;
}
```

**Reference:**

- [String.toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

* [String.toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

* [String.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)

---

## [Unique Number](#number-unique)

_Create a function that will return unique number._

**Example:**

```javascript
> console.log(FindUniq([1, 1, 1, 2, 1, 1])) => 2
> console.log(FindUniq([0, 1, 1, 1, 1, 1])) => 0
> console.log(FindUniq([1, 1, 1, 1, 1, 6])) => 6
> console.log(FindUniq([0, 0, 0.55, 0, 0])) => 0.55
```

**Solution:**

```javascript
function FindUniq( data ) {
	for ( let i = 2; i <= data.length; i++ ) {
		let temp = data[i-2];
		if ( data[i-1] !== temp ) {
			if ( data[i-1] !== data[i]) {
				return data[i-1];
			} else {
				return temp;
			}
		}
	}
	return temp;
}
```

**Reference:**

- [Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

## [Moves all of the zeros to the end](#zeros-to-the-end)

_Create a function that will move all of the zeros to the end._

**Example:**

```javascript
> console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
> console.log(moveZeros([1, 0, 'ss', false, 0, false, 'd', 1, 0]));
> [false, 1, 1, 2, 1, 3, "a", 0, 0]
> [1, 'ss', false, false, 'd', 1, 0, 0, 0]
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
