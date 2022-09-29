/*
The big O of queue methods is the following:

Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(n)
*/
const getQueue = () => {
	let queue = [];

	return {
		push(value) {
			queue = !queue.length
				? [value]
				: [value, ...queue];
		},
		pop() {
			const value = queue[queue.length - 1];
			queue = queue.slice(0, queue.length -1);
			return value;
		},
		size: () => queue.length
	}
}
