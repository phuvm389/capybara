/* eslint-disable */
Drupal.behaviors.myBehavior = {
  attach: function (context, settings) {
    once('blockExampleBehavior', '.block-example').forEach(function (element) {
      console.log(element);
    });
  },
};
