const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

bar();
foo();
baz();
// First, third, second -> callback fn goes in the queue, which is pushed after the stack is empty