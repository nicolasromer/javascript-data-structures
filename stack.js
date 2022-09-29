
/*
The big O of stack methods is the following:

Insertion - O(1)
Removal - O(1)
Searching - O(n)
Access - O(n)
*/

const getStack = () => {
	
	const getNode = (value = null, linkedNode = null) => ({ value,linkedNode });

	let topNode = null;
	let size = 0;

	return {
		push(value) {
			topNode = getNode(value, topNode);
			size += 1;
			return true;
		},
		pop() {
			if (!topNode) return null;
			const value = topNode.value;
			topNode = topNode.linkedNode;
			size -= 1;
			return value;
		},
		search(term, node = topNode) {
			if (!node) return false;
			if (node.value === term) return true;
			return this.search(term, node.linkedNode);
		},
		size: () => size
	}
}
