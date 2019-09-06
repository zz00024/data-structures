var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  storage.index = 0;
  storage.first = 0;
  storage.anInstance = {};

  return storage;
};

var queueMethods = {};

//build a helper function to get the number of properties in storage
var objLength = function (obj) {
  var length = 0;
  for (var key in obj) {
    length += 1;
  }
  return length;
};



queueMethods.enqueue = function (value) {
  var length = objLength(this.anInstance);
  if (length === 0) {
    this.first = 0;
    this.anInstance[this.index] = value;
  } else {
    this.index += 1;
    this.anInstance[this.index] = value;
  }
};


queueMethods.dequeue = function () {

  var theRemoved = this.anInstance[this.first];
  delete this.anInstance[this.first];
  this.first += 1;
  return theRemoved;

};

queueMethods.size = function () {
  var lengths = objLength(this.anInstance);
  return lengths;
};


