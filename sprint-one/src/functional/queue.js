var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  //variable tracks down the index of the object
  var index = 0;

  var first = 0;

  //build a helper function to get the number of properties in storage
  var objLength = function (obj) {
    var length = 0;
    for (var key in obj) {
      length += 1;
    }
    return length;
  }

  // Implement the methods below
  someInstance.enqueue = function(value) {
    //declare a variable for the number of keys in storage
    var keys = objLength(storage);
    //Object.keys(storage);
    //add new value into storage
    if (keys === 0) {
      first = 0;
      storage[index] = value;
    } else {
      index += 1;
      storage[index] = value;
    }
  };

  someInstance.dequeue = function() {
    //declare a variable for the number of keys in storage
    var theRemoved = storage[first];
    delete storage[first];

    //update the index of the first element of sotrage object everytime you dequeue
    first += 1;
    return theRemoved;
  };

  someInstance.size = function() {
    //declare a variable for the number of keys in storage
    var keys = objLength(storage);
    //Object.keys(storage);
    return keys;
  };

  return someInstance;
};
