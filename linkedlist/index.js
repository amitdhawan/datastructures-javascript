const LinkedList = require('./list');
const Node = require('./node');

const list = new LinkedList();
const node1 = new Node(6);
list.insert(new Node(5))
list.insert(node1)
list.insert(new Node(7))

list.remove(node1)
console.log(list);
