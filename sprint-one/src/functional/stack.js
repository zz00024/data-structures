var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //add new value into someInstance object by using storage.
    //edge case if storage has nothing in it
    var theSize = Object.keys(storage);
    if(theSize.length===0){
      storage[0] = value;
      // console.log(storage[0]);
    }
    else{
      storage[theSize.length] = value;
      // console.log(storage[theSize.length-1]);
    }

  };

  someInstance.pop = function() {
    //declare a variable to represent the size of the storage
    var theSize = Object.keys(storage);
    //set a variable to represent the key/value that got deleted
    var theRemoved;
    //if the storage is empty when called pop, return 0
    if(theSize.length===0){
      return 0;
    }
    theRemoved = storage[theSize.length-1];
    delete storage[theSize.length-1];
    return theRemoved;
  };

  someInstance.size = function() {
    //return the size of the someInstance
    var theSize = Object.keys(storage);
    // console.log('the size');
    // console.log(theSize);
    return theSize.length;
  };

  return someInstance;
};
