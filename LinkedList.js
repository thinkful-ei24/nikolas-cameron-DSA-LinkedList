const _Node = require('./Node');

class LinkedList{
  constructor(){
    this.head = null;
  }

  insertFirst(value){
    this.head = new _Node(value, this.head);
  }

  insertLast(value){
    if(this.head === null){
      this.insertFirst(value);
    }
    else{
      let currentNode = this.head;
      while(currentNode.next !== null){
        currentNode = currentNode.next;
      }
      currentNode.next = new _Node(value, null);
    }
  }

  remove(value){
    if(this.head === null){
      return null;
    }
    if(this.head.value === value){
      this.head = this.head.next;
      return;
    }
    else {
      let currentNode = this.head;
      let previousNode = this.head;
      while(currentNode.value !== value || currentNode.next !== null){
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      if(currentNode.value === value){
        previousNode.next = currentNode.next;
      }
      else{
        return 'Item not found';
      }

    }
  }

  find(value){
    if(this.head === null){
      return null;
    }
    let currentNode = this.head;
    while(currentNode.value !== value){
      if(currentNode.next === null){
        return null;
      } else{
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
}