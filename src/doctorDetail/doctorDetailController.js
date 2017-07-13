const annotation = ['$state', '$http', '$stateParams'];

class DoctorDetailController {
  constructor($state, $http, $stateParams) {
    this.$stateParams = $stateParams;
    this.doctorId = $stateParams.doctorId;
    this.practiceUid = $stateParams.practiceUid;
    this.name = 'shian';
    this.searchSimilarDoctors = false;
    this.$http = $http;
    this.doctorList = [];
    this.getDoctorDetail();
    // this.getSimilarDoctors();
  }

  getDoctorDetail() {
    this.$http({
      url: '/doctorDetail', 
      method: "GET",
      params: {doctorId: this.doctorId}
    }).then( response => {
      console.log(response.data);
      this.doctorDetail = response.data.data;
    });
  }

  getSimilarDoctors() {
    this.searchSimilarDoctors = true;
    this.$http({
      url: '/similarDoctorList', 
      method: "GET",
      params: {practiceUid: this.practiceUid}
    }).then( response => {
      console.log(response.data);
      this.similarDoctorList = response.data.data;
      this.similarDoctorList = this.similarDoctorList.filter( doctor => doctor.uid != this.doctorId);
    });
  }
}

DoctorDetailController.$inject = annotation;
export default DoctorDetailController;
