class Binary {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right - null;
  }
}

Binary.prototype.insert = function(value) {
  const newBtree = new Binary(value)
  if(value < this.value) {
      if(!this.left) this.left = newBtree;
      else this.left.insert(value)
  } else if(value > this.value){
      if(!this.right) this.right = newBtree;
      else this.right.insert(value)
  }
}

Binary.prototype.contains = function(value) {
  if(value === this.value) return true;
  else if (value < this.value) {
      if (!this.left) return false;
      else return this.left.contains(value)
  } else if (value > this.value) {
      if (!this.right) return false;
      else return this.right.contains(value)
  }
}

Binary.prototype.depthFirstTraversal = function(iterateFunction, order) {
  if(order === 'pre-order') iterateFunction(this.value)
  if(this.left) this.left.depthFirstTree(iterateFunction, order)
  if(order === 'in-order') iterateFunction(this.value)
  if(this.right) this.right.depthFirstTree(iterateFunction, order)
  if(order === 'post-order') iterateFunction(this.value)
}

Binary.prototype.breathFirstTraversal = function(iterateFunction) {
  const queue = [this];
  while(queue.length) {
      let treeNode = queue.shift();
      iterateFunction(treeNode);
      if(treeNode.left) queue.push(treeNode.left);
      if(treeNode.right) queue.push(treeNode.right);
  }
}

Binary.prototype.getMinVal = function() {
  if(this.left) return this.left.getMinVal()
  else return this.value;
}

Binary.prototype.getMaxVal = function() {
  if(this.right) return this.right.getMaxVal()
  else return this.value;
}

let bst = new Binary(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst.getMinVal())