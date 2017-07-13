const annotation = ['$state', '$http'];

class DoctorListController {
  constructor($state, $http) {
    this.name = 'shian';
    this.$http = $http;
    this.doctorList = [];
    this.categorySelect = '';
    this.categoryList = [];
    this.getDoctorList();
  }

  getDoctorList() {
    this.$http.get('/doctorList').then((response) => {
      console.log(response.data.data);
      this.doctorList = response.data.data;
      this.doctorList.forEach(doctor => {
        if (doctor && doctor.specialties && this.categoryList.indexOf(doctor.specialties[0].category) === -1) {
          this.categoryList.push(doctor.specialties[0].category);
        }
      });
    })
  }
}

DoctorListController.$inject = annotation;
export default DoctorListController;
