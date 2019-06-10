const BinarySearchTree = require('./bst')
const BST = new BinarySearchTree();
BST.insert(15);
BST.insert(10);
BST.insert(25);
BST.insert(7);
BST.insert(13);
BST.insert(5);
BST.insert(9);

BST.deleteNodeHelper(BST.root, 7);
