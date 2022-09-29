/*
Singly linked lists methods have the following complexities:

Insertion - O(1)
Removal - O(n)
Search - O(n)
Access - O(n)
*/
singlyLinkedList = () => {
	let head = null;
	let tail = null;
	let length = 0;

	const getNode = (value, next) => ({value, next});

	return {
		unshift(value) {
			const node = getNode(value, null);
			if (!head) {
				tail = node;
				head = node;
			} else {
				node.next = head;
				head = node;
			}
			
			++length;
		},

		push(value) {
			const node = getNode(value, null);
			if (!head) {
				head = node;
				tail = node;
			} else {
				tail.next = node;
				tail = node;
			}
			++length;
		},

		pop() {
			if (!length) return null;
			const node = tail;
			tail = this.get(length -1);
			if (!tail) {
				head = null;
			} else {
				tail.next = null;
			}
			--length;
			return node.value;
		},

		// 1 indexed
		get(index = 1) {
			if (!head || index > length || !index) return null;
			if (index === length) return tail;

			let i = 1;
			let pointer = head;
			while (i < index) {
				pointer = pointer.next
				++i
			}
			return pointer;
		}

	}

	//todo: reverse, shift, insert, update
}



/*
The big O of doubly linked lists methods is the following:

Insertion - O(1)
Removal - O(1)
Search - O(n)
Access - O(n)
*/
doublyLinkedList = () => {
	let head = null;
	let tail = null;
	let length = 0;

	const getNode = (value) => ({
		value,
		next: null,
		prev: null
	});

	return {
		unshift(value) {
			const node = getNode(value);
			if (!head) {
				tail = node;
				head = node;
			} else {
				node.next = head;
				head.prev = node;
				head = node;
			}
			
			++length;
		},

		push(value) {
			const node = getNode(value);
			if (!head) {
				head = node;
				tail = node;
			} else {
				tail.next = node;
				node.prev = tail;
				tail = node;
			}
			++length;
		},

		pop() {
			if (!length) return null;
			const node = tail;

			newTail = tail.prev;

			if (!newTail) {
				head = null;
				tail = null;
			} else {
				tail = newTail;
				tail.next = null;
			}
			--length;
			return node.value;
		},

		// 1 indexed
		get(index = 1) {
			if (!head || index > length || !index) return null;
			if (index === length) return tail;

			let i = 1;
			let pointer = head;
			while (i < index) {
				pointer = pointer.next
				++i
			}
			return pointer;
		}

	}

	//todo: reverse, shift, insert, update
}
