const _Node = require('./doublynode');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(value) {
    if (this.head === null) {
      this.head = new _Node(value, this.head, null);
      this.tail = this.head;
    } else {
      this.head = new _Node(value, this.head, null);
      this.head.next.previous = this.head;
    }
  }

  insertLast(value) {
    if (this.head === null) {
      this.insertFirst(value);
    } else {
      const newNode = new _Node(value, null, this.tail);
      if (this.head.next === null) {
        this.head.next = newNode;
      }
      this.tail = newNode;
      this.tail.previous.next = newNode;
    }
  }

  insertBefore(value, key) {
    if (this.head === null) {
      return null;
    } else {
      let currentNode = this.head;
      let previousNode = this.head;
      while (currentNode.value !== key) {
        if (currentNode.next === null) {
          return null;
        } else {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
      }
      if (currentNode.value === key) {
        const newNode = new _Node(value, currentNode, previousNode);
        currentNode.previous = newNode;
        previousNode.next = newNode;
        console.log('inserted');
      }
    }
  }
  insertAfter(value, key) {
    if (this.head === null) {
      return null;
    } else {
      let currentNode = this.head;

      while (currentNode.value !== key) {
        if (currentNode.next === null) {
          return null;
        } else {
          currentNode = currentNode.next;
        }
      }
      if (currentNode.value === key) {
        const newNode = new _Node(value, currentNode.next, currentNode);
        currentNode.next = newNode;
        newNode.next.previous = newNode;
        console.log(`Inserted new node after ${key}`);
      }
    }
  }

  insertAt(value, index) {
    if (this.head === null && index !== 0) {
      return null;
    } else {
      if (index === 0) {
        this.insertFirst(value);
        return;
      }

      let currentNode = this.head;
      let previousNode = this.head;
      let count = 0;
      while (count < index) {
        if (currentNode.next === null) {
          return null;
        } else {
          count++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
      }
      if (count === index) {
        const newNode = new _Node(value, currentNode, previousNode);
        currentNode.previous = newNode;
        previousNode.next = newNode;
      }
    }
  }

  remove(value) {
    if (this.head === null) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    } else {
      let currentNode = this.head;
      let previousNode = this.head;
      while (currentNode.value !== value && currentNode.next !== null) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      if (currentNode.value !== value) {
        console.log('Item not Found');
        return;
      } else {
        previousNode.next = currentNode.next;
        currentNode.next.previous = previousNode;
      }
    }
  }

  find(value) {
    if (this.head === null) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode.value !== value) {
      if (currentNode.next === null) {
        console.log('Not found!');
        return null;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
}

module.exports = DoublyLinkedList;
