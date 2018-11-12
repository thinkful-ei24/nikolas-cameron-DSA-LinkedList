const DoublyLinkedList = require('./DoublyLinkedList');

function main() {
  const SLL = new DoublyLinkedList();
  SLL.insertFirst('Aquaria');
  SLL.insertLast('Caprica');
  SLL.insertLast('Gemenon');
  SLL.insertLast('Picon');
  SLL.insertLast('Saggitarion');
  SLL.insertLast('Tauron');
  SLL.remove('Picon');
}

main();

const SLL = new DoublyLinkedList();
SLL.insertFirst('Aquaria');
SLL.insertLast('Caprica');
SLL.insertLast('Gemenon');
SLL.insertLast('Picon');
SLL.insertLast('Saggitarion');
SLL.insertLast('Tauron');

function reverseDLL(SLL) {
  if (!SLL.head) {
    return null;
  }
  let currentNode = SLL.head;
  let nextNode;
  while (currentNode !== null) {
    nextNode = currentNode.next;
    currentNode.next = currentNode.previous;
    currentNode.previous = nextNode;
    currentNode = nextNode;
  }
  nextNode = SLL.head;
  SLL.head = SLL.tail;
  SLL.tail = nextNode;
  return SLL;
}

// reverseDLL(SLL);
console.log(reverseDLL(SLL));

