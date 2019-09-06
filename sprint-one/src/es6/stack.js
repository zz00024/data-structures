class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.length = 0;
    this.index = 0;
    this.anInstance = {};
  }

  //build a helper function to get the number of properties in storage
  objLength (obj) {
    this.length = 0;
    for (var key in obj) {
      this.length += 1;
    }
    return this.length;
  }

  push (value) {
    var length = this.objLength(this.anInstance);
    if (length === 0) {
      this.anInstance[0] = value;
    } else {
      this.index += 1;
      this.anInstance[this.index] = value;
    }
  }

  pop () {
    var length = this.objLength(this.anInstance);
    if (length === 0) {
      return 0;
    } else {
      var theRemoved = this.anInstance[length - 1];
      delete this.anInstance[length - 1];
      return theRemoved;
    }
  }

  size () {
    var length = this.objLength(this.anInstance);
    return length;
  }

}

