/** 
  * Task description: Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a']
  * @param {number} arraySize - size of array 
  * @param {?} value - value to fill 
  * @returns {Array} 
*/
var data = [];
const fill = ( size, value ) => {
	while(size) {
		data.push( value );
		size--;
	}
}
fill(3, 'abac');
console.log( data );