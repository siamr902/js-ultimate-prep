var length = 4;

function callback() {
    console.log(this.length)
}

const object = {
    length: 5,
    method(fn) {
        fn()
    }
}

object.method(callback); // 4
