const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = new Node(null);
  }

  root() {
    return this.rootNode.data;
  }

  add(data) {
    const iter = (data, node) => {
      if (node.data == null) {
        node.data = data;
      } else if (data >= node.data) {
        if (data === node.data) return;
        let parentNodeData = node.data;
        node.data = data;
        if (node.right === null) {
          node.right = new Node(parentNodeData);
        } else if (node.left === null) {
          node.left = new Node(node.right.data);
          node.right.data = parentNodeData;
        } else if (parentNodeData > node.right.data) {
          let rightNodeData = node.right.data;
          node.right.data = parentNodeData;
          iter(rightNodeData, node.right);
        } else if (parentNodeData > node.left.data) {
          iter(parentNodeData, node.right);
        } else {
          iter(parentNodeData, node.left);
        }
      } else {
        if (node.right === null) {
          node.right = new Node(data);
        } else if (node.left === null) {
          node.left = new Node(node.right.data);
          node.right.data = data;
        } else if (data > node.right.data) {
          let rightNodeData = node.right.data;
          node.right.data = data;
          iter(rightNodeData, node.right);
        } else if (data > node.left.data) {
          iter(data, node.right);
        } else {
          iter(data, node.left);
        }
      }
    }
    iter(data, this.rootNode);
  }

  has(data) {
    const iter = (data, node) => {
      if (node.data === null || data > node.data) {
        return false;
      } if (node.data === data) {
        return true;
      }
      return iter(data, node.right) || iter(data, node.right); 
    }
    return iter(data, this.rootNode);
  }

  find(data) {
    const iter = (data, node) => {
      if (node.data === null || data > node.data) {
        return null;
      } if (node.data === data) {
        return node;
      }
      let foundRightNode = iter(data, node.right);
      if (foundRightNode === null) {
        let foundLeftNode = iter(data, node.left);
        if (foundLeftNode === null) {
          return null
        }
        return foundLeftNode;
      }
      return foundRightNode;
    }
    return iter(data, this.rootNode);
  }

  remove(data) {
    const iter = (data, node) => {
      if (node.data === null || data > node.data) {
        return;
      } if (node.data === data) {

        return true;
      }
      return iter(data, node.right) || iter(data, node.right); 
    }
    return iter(data, this.rootNode);
  }

  min() {
    const iter = (node) => {
      if (node.data === null) {
        return null;
      } if (node.left.data === null) {
        return node.data;
      }
      return iter(node.left);
    }
    return iter(this.rootNode);
  }

  max() {
    return this.rootNode.data;
  }
}
const a = new BinarySearchTree();
a.add(1)
a.add(3)
a.add(2)
a.add(4)
a.add(1)
a.add(10)

module.exports = {
  BinarySearchTree
};