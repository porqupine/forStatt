//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BinarySearchTree {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.data = value;
  }
  insert(value) {
    if (value <= this.data) {
      this.left = this.insertHelper(value, this.left);
    } else {
      this.right = this.insertHelper(value, this.right);
    }
  }
  insertHelper(value, node) {
    if (node) {
      node.insert(value);
    } else {
      node = new BinarySearchTree(value);
    }
    return node;
  }
  getSorted(){
    let output = []
    let stack = [this]
    let current = this.left
    while(stack.length || current !== null) {
      if(current == null){
        current = stack.pop()
        output.push(current.data)
        current = current.right
      }
      else{
        stack.push(current)
        current = current.left
      }
    }
    return output
  }
}
