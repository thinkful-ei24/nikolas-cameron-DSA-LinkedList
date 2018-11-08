const LinkedList = require('./LinkedList');

function main() {
  const SLL = new LinkedList();
  SLL.insertFirst('Apollo');

  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');

  SLL.insertBefore('Athena', 'Boomer');
  SLL.find('Athena');
  SLL.insertAfter('Hotdog', 'Apollo');
  SLL.insertAt('Test', 1);
  SLL.remove('Tauhida');

  SLL.find('Tauhida');
  console.log(SLL);
}

const SLL = new LinkedList();
SLL.insertFirst('Apollo');

SLL.insertLast('Boomer');
SLL.insertLast('Helo');
SLL.insertLast('Husker');
SLL.insertLast('Starbuck');
SLL.insertLast('Tauhida');

// console.log(SLL);

function display(LinkedList) {
  let currentNode = LinkedList.head;
  while (currentNode.next !== null) {
    console.log(currentNode);
    currentNode = currentNode.next;
  }
}

// display(SLL);

function size(LinkedList) {
  let count = 0;
  let currentNode = LinkedList.head;
  if (!currentNode) {
    return count;
  }

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    count++;
  }
  if (currentNode.next === null) {
    return count + 1;
  }
}

function isEmpty(LinkedList) {
  if (!LinkedList.head) {
    return true;
  } else {
    return false;
  }
}

console.log(size(SLL));
console.log(isEmpty(SLL));

function findPrevious(LinkedList, value) {
  let currentNode = LinkedList.head;
  let previousNode = LinkedList.head;

  if (value === LinkedList.head) {
    return null;
  }

  while (currentNode.value !== value) {
    if (currentNode.next === null) {
      return null;
    } else {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  if (currentNode.value === value) {
    return previousNode;
  }
}

function findLast(LinkedList) {
  let currentNode = LinkedList.head;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }

  if (currentNode.next === null) {
    return currentNode;
  }
}

console.log(findPrevious(SLL, 'Boomer'));
console.log(findLast(SLL));
