const annotation = ['$stateProvider'];

function doctorDetailStateProvider($stateProvider) {
    $stateProvider.
        state('doctorDetail', {
            url: '/doctorDetail/:doctorId/:practiceUid',
            views: {
                'content': {
                    templateUrl: '/doctorDetail/doctorDetailView.html',
                    controller: 'DoctorDetailController as doctorDetailController'
                }
            }
        })
}

doctorDetailStateProvider.$inject = annotation;
export default doctorDetailStateProvider;
