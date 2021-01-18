class Graph {
    constructor() {
      this.vertices = [];
      this.edges = [];
      this.numberOfEdges = 0;
    }
  
    addVertex(vertex) {
      this.vertices.push(vertex);
      this.edges[vertex] = [];
    }
  
    removeVertex(vertex) {
      const index = this.vertices.indexOf(vertex);
      if(~index) {
        this.vertices.splice(index, 1);
      }
      while(this.edges[vertex].length) {
        const adjacentVertex = this.edges[vertex].pop();
        this.removeEdge(adjacentVertex, vertex);
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.edges[vertex1].push(vertex2);
      this.edges[vertex2].push(vertex1);
      this.numberOfEdges++;
    }
  
    removeEdge(vertex1, vertex2) {
      const index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
      const index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;
      if(~index1) {
        this.edges[vertex1].splice(index1, 1);
        this.numberOfEdges--;
      }
      if(~index2) {
        this.edges[vertex2].splice(index2, 1);
      }
    }
  
    size() {
      return this.vertices.length;
    }
  
  
    traverseBFS(vertex, fn) {
      if(!~this.vertices.indexOf(vertex)) {
        return console.log('Vertex not found');
      }
      const queue = [];
      queue.push(vertex);
      const visited = [];
      visited[vertex] = true;
  
      while(queue.length) {
        vertex = queue.shift();
        fn(vertex);
        for(let i = 0; i < this.edges[vertex].length; i++) {
          if(!visited[this.edges[vertex][i]]) {
            visited[this.edges[vertex][i]] = true;
            queue.push(this.edges[vertex][i]);
          }
        }
      }
    }
  
    print() {
      console.log(this.vertices.map(function(vertex) {
        return (`${vertex} -> ${this.edges[vertex].join(', ')}`).trim();
      }, this).join(' | '));
    }
  }
  
  const graph = new Graph();
  graph.addVertex(1);
  graph.addVertex(2);
  graph.addVertex(3);
  graph.addVertex(4);
  graph.addVertex(5);
  graph.addVertex(6);
  graph.print(); // 1 -> | 2 -> | 3 -> | 4 -> | 5 -> | 6 ->
  graph.addEdge(1, 2);
  graph.addEdge(1, 5);
  graph.addEdge(2, 3);
  graph.addEdge(2, 5);
  graph.addEdge(3, 4);
  graph.addEdge(4, 5);
  graph.addEdge(4, 6);
  graph.print(); // 1 -> 2, 5 | 2 -> 1, 3, 5 | 3 -> 2, 4 | 4 -> 3, 5, 6 | 5 -> 1, 2, 4 | 6 -> 4

  console.log("Borramos unas aristas");
  graph.removeEdge(1, 2);
  graph.removeEdge(4, 5);
  graph.removeEdge(10, 11);
  graph.print();
  
