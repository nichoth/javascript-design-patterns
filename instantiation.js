// Call a constructor function with or without the new keyword.
// These return the same thing:
//   var a = new Constr('bla');
//   var b = Constr('bla');

function Constr(param) {
  if (! (this instanceof Constr)) {
    return new Constr(param);
  }

  this.something = param;
}
