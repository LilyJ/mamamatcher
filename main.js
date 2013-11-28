var mamamatcher = angular.module("mamamatcher", []);

mamamatcher.controller("MainCtrl", ['$scope', function($scope){
  $scope.shake = function(arr){
    return _.shuffle(arr)
  }

  $scope.init = function(){
    var rabbitsNum = 7;
    $scope.cards = [];
    for(var i = 0; i <= rabbitsNum; i += 1){
      $scope.cards.push({"id": i, "imageUrl": "images/rabbits/rabbit-" + i});
      $scope.cards.push({"id": i, "imageUrl": "images/rabbits/rabbit-" + i});
    };
    $scope.cards = $scope.shake($scope.cards);

  }; 
}]);


$(document).ready(function(){
  $(".table").hide();
  $(".start-bn").on('click', function(){
    $(this).hide();
    $(".table").show();
  })
  $(".card").on('click', function(){
    $(this).css("-webkit-transform", "rotateY(180deg)")
    $(this).css("display", "visible");
  })
})