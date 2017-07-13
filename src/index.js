import angular from 'angular';
import 'angular-ui-router';
import doctorList from './doctorList';

var findDoctorApp = angular.module('findDoctorApp', [ 'ui.router', doctorList.name]);

// 250f9787ed29c12f6e22efb1114020e8
// GET /specialties Retrieve a list of all specialties
export default findDoctorApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/doctorList");
});
