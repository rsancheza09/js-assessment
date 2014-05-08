if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return /\d/g.test(str);
    },

    containsRepeatingLetter : function(str) {
        return /[A-Za-z]\1+/i.test(str);
    },

    endsWithVowel : function(str) {
        return /[aeiou]$/i.test(str);
    },

    captureThreeNumbers : function(str) {
        return /\d{3}/.exec(str);
    },

    matchesPattern : function(str) {

    },
    isUSD : function(str) {

    }
  };
});
