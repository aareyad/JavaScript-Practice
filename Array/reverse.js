/** 
  * Task description: Write a method that reverts input array 
  * Expected Result: [1, 2, 3] => [3, 2, 1]
  * @param {Array} array - Array of any elements 
  * @returns {Array} 
*/
const reverse = ( data ) => {
	const array = [];
	let length = data.length;
	while( length ) {
		array.push( data[--length] );
	}
	return array;
}
const data = [ 1, 2, 3, 1, 5, 6 ];
console.log( reverse( data ) );
