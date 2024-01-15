/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) {
      return 0;
    }
    let sum = this.root.val;

    function sumNodes(node) {
      for (let child of node.children) {
        sum += child.val;
        if (child.children.length > 0) {
          sumNodes(child);
        }
      }
    }
    sumNodes(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) {
      return 0;
    }
    let count = 0;
    if(this.root.val % 2 == 0) {
      count = 1;
    }

    function countEvenNodes(node) {
      for (let child of node.children) {
        if (child.val % 2 == 0) {
          count++;
        }
        if (child.children.length > 0) {
          countEvenNodes(child);
        }
      }
    }
    countEvenNodes(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) {
      return 0;
    }
    let count = 0;
    if(this.root.val > lowerBound) {
      count = 1;
    }

    function countGreaterNodes(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) {
          count++;
        }
        if (child.children.length > 0) {
          countGreaterNodes(child);
        }
      }
    }
    countGreaterNodes(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
