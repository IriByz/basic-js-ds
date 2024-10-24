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
    while (currentEl) {
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
    return currentEl;
  }

  remove(data) {
    let currentEl = this.tree;
    let nextEl = this.tree;
  
    while (nextEl) {
      if (nextEl.data === data) { 
        if ((nextEl.left === null) && (nextEl.right === null)) {
          if (currentEl.left?.data === data) {
            currentEl.left = null;
          } else {
            currentEl.right = null;
          }
        } 
        if ((nextEl.left === null) && (nextEl.right !== null)) {
          if (currentEl.left?.data === data) {
            currentEl.left = nextEl.right;
          } else {
            currentEl.right = nextEl.right;
          }
        } 
        if ((nextEl.left !== null) && (nextEl.right === null)) {
          if (currentEl.left?.data === data) {
            currentEl.left = nextEl.left;
          } else {
            currentEl.right = nextEl.left;
          }
        } 
        //////////////////////
        if ((nextEl.left !== null) && (nextEl.right !== null)) {
          //find min element from right side
          let el1 = nextEl.right;
          let el2 = el1.left;
          if (el2 === null) {
            el1.left = nextEl.left;
            nextEl = el1;
          } else {
            while (el2.left) {
              el1 = el2;
              el2 = el2.left;
            }
            nextEl.data = el2.data;
            el1.left = el2.right;
          }
        } 
        ///////////////////
        break;
      } else { 
        currentEl = nextEl;
        if (data < nextEl.data) {
          nextEl = nextEl.left;
        } else {
          nextEl = nextEl.right;
        }      
      }
    }
  }

  min() {
    let currentEl = this.tree;
    let minEl;
    while (currentEl) {
      minEl = currentEl.data; 
      currentEl = currentEl.left;
    }
    return minEl;
  }

  max() {
    let currentEl = this.tree
    let maxEl;
    while (currentEl) {
      maxEl = currentEl.data; 
      currentEl = currentEl.right;
    }
    return maxEl;
  }
}

module.exports = {
  BinarySearchTree
};