var module = angular.module("myApp",[]);

module.controller("myCntrl",function($scope){
    $scope.editMode = "false";
    
    $scope.list=["Learn Gaming","Learn Coding"];
    $scope.add = function(){
       $scope.list.push($scope.input1);
        $scope.input1="";
    }
    
    $scope.edit = function(){
        $scope.editMode = !$scope.editMode;
    }
    
    
    
    $scope.del=function(index)
    {
        $scope.list.splice(index,1);
        
    }
});