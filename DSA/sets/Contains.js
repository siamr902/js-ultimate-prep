const set = new Set();

set.add(1);
set.add(1);
set.add(2);
set.add(8);
set.add(4);
set.add(8);
console.log(set);
set.delete(8);
console.log(set);
console.log(set.has(8));
console.log(set.has(1));
