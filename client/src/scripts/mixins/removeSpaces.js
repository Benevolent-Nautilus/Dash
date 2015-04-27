'use strict';

module.exports = {
    removeSpaces: function(path) {
          return path.replace(/\s/g, '%20');
    },
};