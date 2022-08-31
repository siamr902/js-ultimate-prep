class Stack {
  constructor(arr = []) {
    this.arr = arr;
  }

  push(element) {
    this.arr.push(element);
  }

  pop() {
    this.arr.pop()
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  size() {
    return this.arr.length;
  }

  print() {
    console.log(this.arr);
  }
}

const stack = new Stack([2])
stack.push(5)
stack.push(3)
stack.push(2)
stack.pop()
stack.print()