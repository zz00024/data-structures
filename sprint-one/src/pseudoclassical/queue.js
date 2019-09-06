var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.first = 0;
  this.index = 0;
  this.anInstance = {};
};

//build a helper function to get the number of properties in storage
var objLength = function (obj) {
  var length = 0;
  for (var key in obj) {
    length += 1;
  }
  return length;
};


Queue.prototype.enqueue = function (value) {
  var length = objLength(this.anInstance);
  if (length === 0) {
    this.first = 0;
    this.anInstance[this.index] = value;
  } else {
    this.index += 1;
    this.anInstance[this.index] = value;
  }
};

Queue.prototype.dequeue = function () {
  var theRemoved = this.anInstance[this.first];
  delete this.anInstance[this.first];
  this.first += 1;
  return theRemoved;
};

Queue.prototype.size = function () {
  var length = objLength(this.anInstance);
  return length;
};
