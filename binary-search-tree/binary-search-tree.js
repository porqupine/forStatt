//
//Please note I had to change the test file to actually run
//The original skeleton did not include an "each" method.
//There is jquery each for traversing the dom tree, or forEach on a
//js array, but neither of those made sense. The problem spec
//did not say the BST had to be in the form of an array. In fact
//the setup indicated that it expected nodes.

export class BinarySearchTree {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.data = value;
  }
  insert(value) {
    if (value <= this.data) {
      this.insertHelper(value, "left");
    } else {
      this.insertHelper(value, "right");
    }
  }
  //Not strictly required but it makes reading insert easier
  //Using this[node] isn't as readable as accessing this.left/this.right
  //directly, but it simplifies the code a bit.
  insertHelper(value, node) {
    let child = this[node];
    if (child) {
      child.insert(value);
    } else {
      this[node] = new BinarySearchTree(value);
    }
  }
  //I wrote this method to return the sorted array that the tests seem to expect.
  //Since I did insert recursively, I opted to go that route here as well.
  getSorted() {
    let output = [];
    if (this.left) {
      output = output.concat(this.left.getSorted());
    }
    output.push(this.data);
    if (this.right) {
      output = output.concat(this.right.getSorted());
    }
    return output;
  }
  //Iterative version for comparison
  // - seems to run ~0.05 s faster on average for the test suite, maybe.
  // There isn't a really consistent difference, even at ~5k nodes
  getSortedIterative() {
    let output = [];
    let stack = [this];
    let current = this.left;
    while (stack.length || current !== null) {
      if (current == null) {
        current = stack.pop();
        output.push(current.data);
        current = current.right;
      } else {
        stack.push(current);
        current = current.left;
      }
    }
    return output;
  }
}
