const annotation = ['$state', '$http'];

class doctorListController {
  constructor($state, $http) {
    this.name = 'shian';
    this.$http = $http;
  }

  getDoctorList() {
    this.$http.get('/doctorList').then((response) => {
      console.log(response.data);
    })
  }
}

doctorListController.$inject = annotation;
export default doctorListController;
