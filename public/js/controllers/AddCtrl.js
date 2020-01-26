angular.module('AddCtrl',[]).controller('AddController',function($scope,$http){
  $scope.check_name="/^[a-zA-Z]*$/";
  $scope.check_number="/^[6-9]{1}[0-9]{9}$/";
  if($scope.first_name.match($scope.check_name) && $scope.last_name.match($scope.check_name) && $scope.phone.match(check_number)){
  $scope.check_data = function(){
      $http.get('/api/abouts').then(function(res){
        $scope.check_data = res.data;
        for (let value of $scope.check_data) {
          if(value.phone==$scope.form_data.phone){
            $scope.found = 1;
          }
        }
        if($scope.found!=1){
            $http.post('/api/abouts',$scope.form_data).then(function(respo){
              console.log(respo);
              $scope.message = "User added";
            })
          }
        else{
          alert("Phone Number already exists!!");
          $scope.form_data.phone = "";
        }
      });
  }
}
});
