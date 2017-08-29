var testConfig = require('../../build/webpack.test.conf')

console.log('testConf: ' + JSON.stringify(testConfig))

module.exports = function(config) {
  config.set({
    basePath: '../..',
    browsers: ['ChromeHeadless'],
    // frameworks: ['mocha', 'chai', 'karma-typescript'],
    frameworks: ['mocha', 'chai'],
    // this is the entry file for all our tests.
    files: [
      // {pattern: 'src/test/**/*.ktest0.ts', watch: false},
      // {pattern: 'src/main/**/*.ts', watch: false},
      // {pattern: 'src/test/**/*.js', watch: false},
      // {pattern: 'src/main/vue-setup.d.ts', watch: false},
      // {pattern: 'src/main/**/*.vue', watch: false},
      {pattern: './config/karma/index.js', watched: false}
    ],
    preprocessors: {
        // '*.js': ['coverage', 'webpack', 'sourcemap'],
        //  './src/**/*.vue': ['webpack', 'webpack', 'sourcemap'],
        './config/karma/index.js': ['webpack', 'sourcemap'],
        //  './src/**/*.ts': ['coverage', 'webpack', 'sourcemap']
        //'./src/**/*.ts': ['coverage', 'webpack', 'sourcemap']
        //  './src/**/*.ts': ['webpack', 'sourcemap'],
        //  './src/test/**/*.ts': ['webpack', 'sourcemap'],
        //  './src/**/*.vue': ['webpack', 'sourcemap']
      //  '*.ts': ['webpack']
    },
    webpack: testConfig,
    // {
    //   module: testConfig.module,
    //   resolve: testConfig.resolve
    // },
    webpackMiddleware: {
      noInfo: false
    },
    singleRun: true,
    // logLevel: 'debug',
    reporters: ['progress'],
    colors: true,
    port: 9090
  })
}
