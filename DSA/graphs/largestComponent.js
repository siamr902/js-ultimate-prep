const largestComponent = (graph) => {
  const visited = new Set();
  let longest = 0;
  for (const node in graph) {
    const size = getNodeSize(graph, node, visited);
    longest = Math.max(longest, size);
  }
  return longest;
};

const getNodeSize = (graph, node, visited) => {
  if (visited.has(node)) return 0;

  visited.add(node);

  let size = 1;
  for (const neighbor of graph[node]) {
    size += getNodeSize(grid, neighbor, visited);
  }
  return size;
};
