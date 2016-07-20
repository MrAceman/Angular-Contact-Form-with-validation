function FormController ($scope, SERVER, $http) {

  $scope.formArray = [];

  init();

  function init () {
    $http.get(SERVER.URL).then( (res) => {
      $scope.formArray = res.data;
    });
  }
// *******************************
   
    $scope.checkForWeb = (event)=>{
      var pattern = /^https?:\/\//i;
    }


  $scope.submitForm = (form) => {
    // Post takes 3 parameters. Where posting to/What you are posting
    $http.post(SERVER.URL, form).then( (res) => {
      // Adds form to form array
      $scope.formArray.push(res.data);
      $scope.form = {};
    });
  }

  $scope.deleteMe = (id) => {
    $http.delete(SERVER.URL + id).then((res) => {
      $scope.formArray = $scope.formArray.filter( (form) => {
        return form._id !== id;
      });
    });
  }

}

FormController.$inject = ['$scope', 'SERVER', '$http'];
export {FormController};
