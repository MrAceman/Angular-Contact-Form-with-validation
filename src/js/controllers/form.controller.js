function FormController ($scope, SERVER, $http) {

  $scope.formArray = [];

  init();

  function init () {
    $http.get(SERVER.URL).then( (res) => {
      $scope.formArray = res.data;
    });
  }

  $scope.submitForm = (formData) => {
    console.log(formData);
    // Post takes 3 parameters. Where posting to/What you are posting
    $http.post(SERVER.URL, formData).then( (res) => {
      // Adds form to form array
      $scope.formArray.push(res.data);
      $scope.formData = {};
    });
  }

  $scope.deleteMe = (id) => {
    $http.delete(SERVER.URL + id).then((res) => {
      $scope.formArray = $scope.formArray.filter( (formData) => {
        return formData._id !== id;
      });
    });
  }

}

FormController.$inject = ['$scope', 'SERVER', '$http'];
export {FormController};
