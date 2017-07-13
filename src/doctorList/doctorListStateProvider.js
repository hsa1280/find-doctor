const annotation = ['$stateProvider'];

function doctorListStateProvider($stateProvider) {
    $stateProvider.
        state('doctorList', {
            url: '/doctorList',
            views: {
                'content': {
                    templateUrl: '/doctorList/doctorListView.html',
                    controller: 'doctorListController as doctorListController'
                }
            }
        })
}

doctorListStateProvider.$inject = annotation;
export default doctorListStateProvider;
