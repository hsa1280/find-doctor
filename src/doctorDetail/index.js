import angular from 'angular';
import doctorDetailController from './doctorDetailController';
import doctorDetailStateProvider from './doctorDetailStateProvider';

export default angular.
    module('doctorDetailModule', []).
    config(doctorDetailStateProvider).
    controller('DoctorDetailController', doctorDetailController);
