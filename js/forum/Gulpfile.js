const gulp = require('flarum-gulp');

gulp({
  modules: {
    'flarum/recaptcha': 'src/**/*.js',
  },
});
