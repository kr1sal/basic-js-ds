const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.rootListNode = new ListNode(null);
  }

  getUnderlyingList() {
    return this.rootListNode;
  }

  enqueue(value) {
    if (this.rootListNode.value === null) {
      this.rootListNode.value = value;
    } else {
      const iter = (value, listNode) => {
        if (listNode.next === null) {
          listNode.next = new ListNode(value);
        } else {
          iter(value, listNode.next);
        }
      }
      iter(value, this.rootListNode);
    }

  }

  dequeue() {
    if (this.rootListNode.next === null) {
      const foundValue = this.rootListNode.value;
      this.rootListNode.value = null;
      return foundValue;
    }
    const foundValue = this.rootListNode.value;
    this.rootListNode = this.rootListNode.next;
    return foundValue;
  }
}

module.exports = {
  Queue
};
