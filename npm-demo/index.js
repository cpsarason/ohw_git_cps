var _ = require('underscore');

// order of finding requires
// core module
// file or folder
// node_modules

var result = _.contains([1,2,3],2);
console.log(result);