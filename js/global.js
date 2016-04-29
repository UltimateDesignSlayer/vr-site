//Set up require
requirejs.config({
    baseUrl: '/js',
    paths: {
        app: '../'
    }
});

requirejs(['modules/elem-effects'], function(elemEffects) {

  elemEffects.elementEffectsController();
  elemEffects.init();

});
