class Queue {
  constructor(arr = []) {
    this.arr = arr;
  }

  enqueue(element) {
    this.arr.push(element);
  }

  dequeue() {
    return this.arr.shift();
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  peek() {
    return !this.isEmpty() ? this.arr[0] : null;
  }

  size() {
    return this.arr.length;
  }

  print() {
    console.log(this.arr);
  }
}

const queue = new Queue([10]);
queue.enqueue(4);
console.log(queue.isEmpty());
queue.dequeue();
queue.print();
