const Node = require('./node');

module.exports = class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        
        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
        console.log(this.root);
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
           if (node.left == null ) {
               node.left = newNode;
           } else {
               this.insertNode(node.left, newNode);
           }
           
        } else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    deleteNodeHelper(root, key) {
        if (root === null) {
           // Empty tree return false;
        }
        if (key < root.data) {
           root.left = this.deleteNodeHelper(root.left, key);
           return root;
        } else if (key > root.data) {
           root.right = this.deleteNodeHelper(root.right, key);
           return root;
        } else {
           // No children
           //case 1 - a leaf node
           if (root.left === null && root.right === null) {
              root = null; 
              return root;
           }
           // Single Child cases
           if (root.left === null) return root.right;
           if (root.right === null) return root.left;
     
           // Both children, so need to find successor 
           let currNode = root.right;
           while (currNode.left !== null) {
              currNode = currNode.left;
           }
           root.data = currNode.data;
           // Delete the value from right subtree.
           root.right = deleteNodeHelper(root.right, currNode.data);
           return root;
        }
     }
}

