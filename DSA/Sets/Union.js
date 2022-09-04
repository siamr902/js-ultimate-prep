function unionSet(setA, setB) {
  const union = new Set(setA);
  for (const elem of setB) {
    union.add(elem);
  }
  return union;
}
