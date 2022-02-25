// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number') {
    return result + obj;
  } else if (typeof obj === 'boolean') {
    return result + obj;
  } else if ( obj === null) {
    return result + 'null';
  } else if (typeof obj === 'function') {
    result += '';
  } else if ( obj === undefined) {
    result += '';
  } else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {
      result += '[';
      for (var i = 0; i < obj.length; i++) {
        if (i < obj.length - 1) {
          result += stringifyJSON(obj[i]) + ',';
        } else {
          result += stringifyJSON(obj[i]) + ']';
        }
      }
    }
  } else if (typeof obj === 'object' && obj !== null) {
    var keys = Object.keys(obj);
    if (keys.length === 0) {
      return '{}';
    } else {
      result += '{';
      for (var i = 0; i < keys.length; i++) {
        var value = obj[keys[i]];
        if (i < keys.length - 1) {

          if (typeof value === 'function' || value === undefined) {
            return '{}';
          }
          result += '"' + keys[i] + '"' + ':' + stringifyJSON(value) + ',';
        } else {
          result += '"' + keys[i] + '"' + ':' + stringifyJSON(value);
        }
      } result += '}';
    }
  } return result;
};
