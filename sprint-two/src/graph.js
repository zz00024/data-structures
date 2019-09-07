

// Instantiate a new graph
var Graph = function() {
  //two arrays: one for nodes and one for edges
  this.edges = [];
  this.nodes = [];

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //add the parameter node into this.nodes
  this.nodes.push(node);
};
// Time Complexity: constant time

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      return true;
    }
  }
  return false;
};
// Time Complexity: O(n)

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      this.nodes[i] = null;
    }
  }
};
// Time Complexity: O(n)

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var num1 = this.nodes.indexOf(fromNode);
  var num2 = this.nodes.indexOf(toNode);
  //check if this.edges contains/includes num1&num2
  for (var i = 0; i < this.edges.length; i++ ) {
    if (this.edges[i].includes(num1) && this.edges[i].includes(num2)) {
      return true;
    }
  }
  return false;

};
// Time Complexity: O(n)

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var num1 = this.nodes.indexOf(fromNode);
  var num2 = this.nodes.indexOf(toNode);
  var addition = [num1, num2];
  this.edges.push(addition);
};
// Time Complexity: O(n)

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var num1 = this.nodes.indexOf(fromNode);
  var num2 = this.nodes.indexOf(toNode);
  // var removed = [num1, num2];
  for (var i = 0; i < this.edges.length; i++ ) {
    if (this.edges[i].includes(num1) && this.edges[i].includes(num2)) {
      this.edges[i] = [null];//[null] === []
    }
  }
};
// Time Complexity: O(n)

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //apply cb to each node in nodes
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};
// Time Complexity: O(n)



/*
 * Complexity: What is the time complexity of the above functions?
 */


