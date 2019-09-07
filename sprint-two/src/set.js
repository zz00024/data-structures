var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage[item] = item;
  }
};
//Time complexity: O(n)

setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};
//Time complexity: O(n)

setPrototype.remove = function(item) {
  delete this._storage[item];
};
//Time complexity: Constant time

/*
 * Complexity: What is the time complexity of the above functions?
 */
