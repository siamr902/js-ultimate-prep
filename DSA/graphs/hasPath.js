// return true if there is a way to reach the destination from the source

function hasPath(graph, src, destination) {
  if (src === destination) return true;
  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, destination)) return true;
  }
  return false;
}

function hasPathBFS(graph, src, destination) {
  const queue = [src];
  while (queue.length) {
    const current = queue.shift();

    if (current === destination) return true;

    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
}
