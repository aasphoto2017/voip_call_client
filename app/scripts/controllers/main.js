'use strict';

/**
 * @ngdoc function
 * @name voipCallClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the voipCallClientApp
 */
angular.module('voipCallClientApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

 var self = this;
 self.callDivTexts = ['Call', 'Calling', 'End call' ];

 self.callDivCurr = self.callDivTexts[0];








  });
