const _Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    this.head = new _Node(value, this.head);
  }

  insertLast(value) {
    if (this.head === null) {
      this.insertFirst(value);
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new _Node(value, null);
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
        const newNode = new _Node(value, currentNode);
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
        const newNode = new _Node(value, currentNode.next);
        currentNode.next = newNode;
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
        const newNode = new _Node(value, currentNode);
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

module.exports = LinkedList;
