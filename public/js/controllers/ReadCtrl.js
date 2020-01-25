angular.module('ReadCtrl',[]).controller('ReadController',function($scope,$http){
  $scope.rec_data=function(){
    $http.get('/api/abouts').then(function(res){
      $scope.con_data = res.data;
    });
}
});
