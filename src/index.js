import angular from 'angular';
import 'angular-ui-router';

var findDoctorApp = angular.module('findDoctorApp', [ 'ui.router', doctorList.name]);

export default findDoctorApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
});
