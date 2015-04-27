'use strict';

module.exports = {
    formatNumber: function(value) {
        // Abbreviates numbers >= 1K
        // 100050 => 100K
           return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
};