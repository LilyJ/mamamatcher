function Matcher($scope){
  $scope.all = [
    {
      "id": "1",
      "imageUrl": "images/rabbits/rabbit-1"
    }];

  $scope.init = function(){
    var rabbitsNum = 8;
    for(var i = 1; i <= rabbitsNum; i += 1){
      $scope.all.push({"id": i, "imageUrl": "images/rabbits/rabbit-" + i})
    }
    
  }; 
}