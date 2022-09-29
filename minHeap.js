
getMinHeap = () => {
	const heap = [];

	const getChildIndexes = (parentIndex) => ({
		left: 2 * parentIndex +1,
		right: 2 * parentIndex + 2
	})
	const getParentIndex = childIndex => Math.floor((childIndex - 1) / 2);

	const bubbleUp = () => {
		let i = heap.length - 1;
		let value = heap[i];
		while (i > 0) {
			const parentIndex = getParentIndex(i);
			const parent = heap[parentIndex];
			
			if (!parent || value > parent) break;
			
			heap[parentIndex] = value;
			heap[i] = parent;
			i = parentIndex;
		}
	}

	const sinkDown = () => {
		let i = 0;
		const length = heap.length;
		const root = heap[0];
		let leftChild, rightChild;

		while(true) {
			const childIndexes = getChildIndexes(i);
			let swap = null;

			if (childIndexes.left < length) {
				leftChild = heap[childIndexes.left]
				if (leftChild < root) {
					swap = childIndexes.left;
				}
			}

			if (childIndexes.right < length) {
				rightChild = heap[childIndexes.right];
				if (
					   swap === null && rightChild < root
					|| swap !== null && rightChild < leftChild
				) {
					swap = childIndexes.right;
				}
			}

			if (!swap) break;

			heap[i] = heap[swap];
			heap[swap] = root;
			i = swap;
		}

	}

	return {
		enqueue(value) {
			heap.push(value);
			bubbleUp();
			return heap;
		},
		dequeue() {
			const min = heap[0];
			const last = heap.pop();
			if (heap.length > 0) {
				heap[0] = last;
				sinkDown();
			}
			return min;
		}
	}


}