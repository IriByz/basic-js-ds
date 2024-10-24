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
    this.queue = {};
    this.tail = this.queue;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    const newEl = new ListNode(value);

    if (this.queue.value) {
      this.tail.next = newEl;
      this.tail = newEl;
    } else {
      this.queue.value = newEl.value;
      this.queue.next = newEl.next;
    }
  }

  dequeue() {
    let top = this.queue?.value;
    this.queue = this.queue?.next;
    return top ? top : 1;
  }
}

module.exports = {
  Queue
};
