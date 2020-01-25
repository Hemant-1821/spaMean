angular.module('AddCtrl',[]).controller('AddController',function($scope,$http){

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
          $scope.message = "Phone Number already exists!!";
        }
      });
  }
});
