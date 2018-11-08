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
  while (currentNode !== null) {
    let nextNode = currentNode;
    currentNode.next = currentNode.previous;
    currentNode.previous = nextNode.next;
    currentNode = nextNode.next;
  }
  let tail = SLL.tail.value;
  let head = SLL.head.value;
  console.log(SLL.tail, SLL.head);
  let previous = Object.assign({}, SLL.tail.previous);
  let next = SLL.head.next;
  SLL.tail.value = head;
  SLL.head.value = tail;
  SLL.tail.previous = next;
  SLL.head.next = previous;

  return SLL;
}

console.log(reverseDLL(SLL));
