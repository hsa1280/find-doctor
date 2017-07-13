import angular from 'angular';
import doctorListController from './doctorListController';
import doctorListStateProvider from './doctorListStateProvider';

export default angular.
    module('doctorListModule', []).
    config(doctorListStateProvider).
    controller('doctorListController', doctorListController);
