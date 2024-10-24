const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    let newEl = new Node(data);
    if (this.tree === null) {
      this.tree = newEl;
    } else { 
      let currentEl = this.tree;
      let prevEl = {};
      let indNewEl = 0;
      while (currentEl) {
        prevEl = currentEl;
        if (currentEl.data > data) {
          currentEl = currentEl.left;
          indNewEl = 0;
        } else {
          currentEl = currentEl.right;
          indNewEl = 1;
        }
      }
      if (indNewEl === 1) {
        prevEl.right = newEl;
      } else {
        prevEl.left = newEl;
      }
    }
  }

  has(data) {
    let currentEl = this.tree;
    let elementExists = false;
    while (currentEl && (elementExists === false)) {
      if (data === currentEl.data) {
        elementExists = true;
      } else {
        if (data < currentEl.data) {
          currentEl = currentEl.left;
        } else {
          currentEl = currentEl.right;
        }
      }
    }
    return elementExists;
  }

  find(data) {
    let currentEl = this.tree;
    let elementExists = false;
    while (currentEl && (elementExists === false)) {
      if (data === currentEl.data) {
        return currentEl;
      } else {
        if (data < currentEl.data) {
          currentEl = currentEl.left;
        } else {
          currentEl = currentEl.right;
        }
      }
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};