module.exports = class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // method to insert node
    insert(node) {
        // check if head is null
        let currentNode = this.head;
        if (!currentNode) {
            currentNode = node;
            this.head = currentNode;
        } else {
            // iterate over linked list and update current node
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            // append the node in the last
            currentNode.next = node;
        }
    }

    remove(node) {
        // if node to be removed is head node
        if(node.data === this.head.data) {
            this.head = this.head.next;
            node.next = null;
            return;
        }
        // if node is somewhere in between other nodes
        let currentNode = this.head;
        let previousNode =  this.head;
        while(currentNode) {
            if (currentNode.data === node.data) {
                previousNode.next = currentNode.next;
                currentNode = null;
            } else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }
}

