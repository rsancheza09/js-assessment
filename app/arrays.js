if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        var index = -1,
            i = 0;

        for (i; i < arr.length; i++) {
            if (item === arr[i]) {
                index = i;
            }
        }

        return index;
    },

    sum : function(arr) {
        var result = 0,
            i = 0;

        for (i;  i < arr.length; i++) {
            result += arr[i];
        }

        return result;
    },

    remove : function(arr, item) {
        var newArray = []
            i = 0;

        for (i; i<arr.length; i++) {
            if (arr[i] !== item) {
                newArray.push(arr[i]);
            }
        }

        return newArray;
    },

    removeWithoutCopy : function(arr, item) {
        var i = 0;
        for (i; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return  arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        var arr = arr1.concat(arr2);
        return arr;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var result = 0,
            i = 0;

        for (i; i < arr.length; i++) {
            if (arr[i] === item) {
                result++;
            }
        }

        return result;
    },

    duplicates : function(arr) {

    },

    square : function(arr) {
        var result = [],
            i = 0,
            value = 0;

        for (i; i < arr.length; i++) {
            value = arr[i]*arr[i];
            result.push(value);
        }

        return result;
    },

    findAllOccurrences : function(arr, target) {
        var result = [],
            i = 0;

        for (i; i < arr.length; i++) {
            if (arr[i] === target) {
                result.push(i);
            }
        }

        return result;
    }
  };
});
