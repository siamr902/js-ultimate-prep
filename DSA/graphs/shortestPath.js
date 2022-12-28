// shorted path in an undirected graph, if none return -1
// we use a queue to group distances from a node, bfs where each neighbor is distance + 1

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = contructGraph(edges);
  const visited = new Set([nodeA]);
  const queue = [[nodeA, 0]];

  while (queue.length) {
    const [node, distance] = queue.shift();

    if (node === nodeB) return distance;
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
};

const contructGraph = (edges) => {
  const graph = {};

  //   getting neighbors
  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];
