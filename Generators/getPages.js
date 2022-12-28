function* getPages(list, pageSize = 1) {
  for (let i = 0; i < list.length; i += pageSize) {
    yield list.slice(i, i + pageSize);
  }
}

const list = [];

(function generateList() {
  list.push.apply(
    list,
    Array.from({ length: 9 }, (_, i) => i + 1)
  );
})();

const pages = getPages(list, 3);
console.log(pages.next().value)
console.log(pages.next().value)
console.log(pages.next().value)
console.log(pages.next().value) // undefined


