
getBinarySearchTree = (rootValue) => {
	const getNode = (value) => ({
		value,
		left: null,
		right: null
	});
	
	const root = getNode(rootValue);
	let size = 1;

	const subtreeInsert = (value, root) => {
		if (value > root.value) {
			if (root.right) {
				return subtreeInsert(value, root.right);
			} else {
				root.right = getNode(value);
			}
		} else {
			if (root.left) {
				return subtreeInsert(value, root.left);
			} else {
				root.left = getNode(value);
			}
		}
	}

	const subTreeFind = (value, node = root) => {
			if (value === node.value) return true;
			if (value < node.value && node.left) {
				return subTreeFind(value, node.left);
			} else if (value > node.value && node.right) {
				return subTreeFind(value, node.right);
			}
			return false
		}

	return {
		insert(value) {
			subtreeInsert(value, root);
			return root;
		},
		find(value) {
			return subTreeFind(value, root);
		}

	}
}
