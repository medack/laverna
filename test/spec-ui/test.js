'use strict';

// Test files
var tests = [
        './load.js',
        './apps/notes/form.js',
        './apps/notebooks/form.js',
    ];

// Load all test files
tests.forEach(function(val) {
    require(val);
});
