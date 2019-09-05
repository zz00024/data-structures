var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  //build a helper function to get the number of properties in storage
  var objLength = function (obj) {
    var length = 0;

    for (var key in obj) {
      length += 1;
    }
    return length;
  };

  // Implement the methods below
  someInstance.push = function(value) {
    //add new value into someInstance object by using storage.
    //edge case if storage has nothing in it
    var theSize = objLength(storage);
    if (theSize === 0) {
      storage[0] = value;
      // console.log(storage[0]);
    } else {
      storage[theSize] = value;
      // console.log(storage[theSize.length-1]);
    }

  };

  someInstance.pop = function() {
    //declare a variable to represent the size of the storage
    var theSize = objLength(storage);
    //set a variable to represent the key/value that got deleted
    var theRemoved;
    //if the storage is empty when called pop, return 0
    if (theSize === 0) {
      return 0;
    }
    theRemoved = storage[theSize - 1];
    delete storage[theSize - 1];
    return theRemoved;
  };

  someInstance.size = function() {
    //return the size of the someInstance
    var theSize = objLength(storage);
    return theSize;
  };

  return someInstance;
};
