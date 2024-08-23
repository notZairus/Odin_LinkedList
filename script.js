const { Node, LinkedList } = require("./linkedlist");

let ll1 = new LinkedList();

let node1 = new Node('dog');
let node2 = new Node('cat');
let node3 = new Node('rat');

ll1.append(node1);
ll1.append(node2);
ll1.append(node3);

console.log(ll1.at(4));