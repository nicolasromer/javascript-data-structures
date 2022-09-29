const myArray = ['a', 'b', 'c', 'd'];

const mirrorIndex = (arr, index) => arr.length - index - 1;
const lastItemIndex = arr => arr.length - 1;
const headSlice = (arr, withMiddle = false) => {
	const even = arr.length % 2 === 0;
	const endIndex = even 
		? array.length / 2 - 1
		: (array.length + 1) / 2 - (withMiddle ? 0 : 1);
	return arr.slice(0, endIndex);
}
const tailSlice = (arr, withMiddle = false) => {
	const even = arr.length % 2 === 0;
	const startIndex = even 
		? array.length / 2 - 1
		: (array.length + 1) / 2 - (withMiddle ? 1 : 0);
	return arr.slice(startIndex, array.length - 1);
}


