function superSet(setA, setB) {
  const superset = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) superset.add(elem);
  }
  return superset.size() === setB.size();
}

function simpleSuperSet(setA, setB) {
  for (const elem of setB) {
    if (!setA.has(elem)) return false;
  }

  return true;
}
