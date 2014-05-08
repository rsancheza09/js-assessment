if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var result = 0,
          i = start;

      for (i; i <= end; i++) {
        result++;
      }

      return result;
    }
  };
});
