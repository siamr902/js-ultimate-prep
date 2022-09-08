const add = x => y => z => {
  console.log(x, y, z);
  return x + y + z;
};

add(9)(4)(6); // 9 4 6