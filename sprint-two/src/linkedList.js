var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var current = new Node(value);

    if (list.tail === null) {
      list.head = current;
      list.tail = current;
    } else {
      list.tail.next = current;
      list.tail = current;
    }
  };

  list.removeHead = function() {
    //check if the list is empty
    if (list.head === null) {
      return;
    }
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;
  };

  list.contains = function(target) {
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
