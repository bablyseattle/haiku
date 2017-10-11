// Karma configuration
// Generated on Wed Oct 11 2017 11:47:40 GMT-0700 (PDT)

var istanbul = require("browserify-istanbul");

module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jquery-3.2.1', 'jasmine', 'browserify'],
    files: [
      'js/*.js',
      'spec/*-spec.js',
    ],
    exclude: [
    ],
    preprocessors: {
      'js/*.js': [ 'browserify'],
      'spec/*.js': ['browserify'],
      './build/js/*.js': ['coverage']
    },
    plugins: [
      'karma-jquery',
      'karma-browserify',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-coverage'
    ],
    browserify: {
      transform: [ [ 'babelify', {presets: ["es2015"]} ] ]
    },
    reporters: ['progress', 'kjhtml', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
