// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var res = [];
  var body = document.body;
  //helper function
  var traverse = function (node) {
    if (node.classList && node.classList.contains(className) ) {
      res.push(node);
    }
    if (node.childNodes) {
      node.childNodes.forEach (function(node) {
        traverse(node);
      });
    }
  };

  traverse(body);
  return res;


};
