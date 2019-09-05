var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // build a empty object to store data
  var storage = {};

  storage.first = 0;
  storage.index = 0;
  storage.anInstance = {};

  storage.push = stackMethods.push;
  storage.pop = stackMethods.pop;
  storage.size = stackMethods.size;

  return storage;
};

var stackMethods = {};
//build a helper function to get the number of properties in storage
var objLength = function (obj) {
  var length = 0;
  for (var key in obj) {
    length += 1;
  }
  return length;
};

//add method(size, push, pop) as properties into the object:stackMethods
stackMethods.push = function (value) {
  var length = objLength(this.anInstance);
  if (length === 0) {
    // this.first = 0;
    // this.index = 0;
    this.anInstance[0] = value;
  } else {
    this.index += 1;
    this.anInstance[this.index] = value;
  }
};

stackMethods.pop = function () {
  var length = objLength(this.anInstance);
  if (length === 0) {
    return 0;
  } else {
    var theRemoved = this.anInstance[length - 1];
    delete this.anInstance[length - 1];
    return theRemoved;
  }
};

stackMethods.size = function () {
  var length = objLength(this.anInstance);
  return length;
};

