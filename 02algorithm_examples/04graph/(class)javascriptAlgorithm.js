class Graph {
  constructor() {
    this.edges = {};
  }
  addVertex(vertex) {
    this.edges[vertex] = {};
  }
  addEdge(vertex1, vertex2, weight) {
    if (weight == undefined) {
      weight = 0;
    }
    this.edges[vertex1][vertex2] = weight;
    this.edges[vertex2][vertex1] = weight;
  }
}

let graph1 = new Graph();
console.log(graph1);
graph1.addVertex(1);
console.log(graph1);
graph1.addVertex(2);
graph1.addEdge(1, 2, 1);
graph1.edges; // 1: {2: 1},  2: {1: 1}
graph1.addVertex(3);
graph1.addVertex(4);
graph1.addVertex(5);
graph1.addEdge(2, 3, 8);
console.log(graph1);
graph1.addEdge(3, 4, 10);
graph1.addEdge(4, 5, 100);

