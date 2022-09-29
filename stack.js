
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
		size: () => size
	}
}