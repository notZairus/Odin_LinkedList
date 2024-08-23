class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(node) {
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  prepend(node) {
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  size() {
    let size = 0;
    let currentNode = this.head;

    while (currentNode != null) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }

  sizeRec(node = this.head) {
    if (node == null) {
      return 0;
    }
    return this.sizeRec(node.next) + 1;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    let neededNode = this.head;
    for (let i = 0; i < index; i++) {
      if (neededNode == null) return null;
      neededNode = neededNode.next;
    }
    return neededNode;
  }

  pop() {
    this.tail = null
  }

  toString() {
    let currentNode = this.head;
    let values = [];

    while (currentNode != null) {
      values.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return values;
  }

  toStringRec(node = this.head) {
    if (node.next == null) {
      return [node.data];
    }
    let result = this.toStringRec(node.next);
    result.unshift(node.data);
    return result;
  }
}

module.exports = { Node, LinkedList };