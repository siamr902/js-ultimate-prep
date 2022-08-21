var length = 4;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method() { // [callback, 2, 3]
    arguments[0]();
  },
};

object.method(callback, 2, 3); // 3
