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
// SLL.find('Helo').next = SLL.find('Boomer');
// SLL.insertLast('Starbuck');
// SLL.insertLast('Tauhida');

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

// console.log(size(SLL));
// console.log(isEmpty(SLL));

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

// console.log(findPrevious(SLL, 'Boomer'));
// console.log(findLast(SLL));

function reverseList(sll){
  // for head, next should go to null
  // make the end the head
  // previous and current, current.next = previous
  // nextNode = currentNode.next 
  // current.next = previous
  // previous = 

  let currentNode = sll.head;
  let previousNode = null;
  if(!sll.head){
    return null;
  }else if(sll.head.next === null){
    return sll;
  }else{
    
    while(currentNode !== null){
      let nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    sll.head = previousNode;
    return sll;

  }
}


function thirdFromEnd(sll){
  if(sll.head === null){
    return null;
  }
  if(sll.head.next === null){
    return;
  }
  if(sll.head.next.next === null){
    return null;
  }
  let currentNode = sll.head;
  while (currentNode.next.next.next !== null){
    currentNode = currentNode.next;
  }
  return currentNode;
}

function middleOfList(sll){
  let size = size(sll);
  let counter = 1;
  let index;
  if(size === 0){
    return null;
  }
  if(size === 1){
    return null;
  }
  if(size % 2 === 1){
    index = Math.ceil(size/2);
  }else{
    index = size/2;
  }
  let currentNode = sll.head;
  while (counter < index){
    currentNode = currentNode.next;
    counter ++;
  }
  return currentNode;
}

function cycle(sll){
  const copy = Object.assign({}, sll);
  if(sll.head === null){
    return false;
  }
  let currentNode = sll.head;
  while(currentNode.next !== null){
    if(currentNode.cycle){
      return true;
    }
    currentNode.cycle = true;
    currentNode = currentNode.next;
  }
  return false;
}






