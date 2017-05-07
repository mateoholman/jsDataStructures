//Coding a linked list in JavaScript

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, prev, next) {
  this.value = value;
  this.prev = prev;
  this.next = next;
}

LinkedList.prototype.addToHead = function () {
  const newNode = new Node(value, this.head, null);
  if(this.head) {
    this.head.prev = newNode;
  }
  else {
    this.tail = newNode;
  }
  this.head = newNode;
};
