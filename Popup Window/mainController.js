var app = angular.module('myApp', []);

app.controller('mainController', ['$scope',
    function($scope) {
        $scope.bHide=false;

        $scope.searchHub = function(){
            $scope.bHide=true;
        };

        $scope.closeHub=function()
        {
            $scope.bHide=false;
        };

        $scope.keyword="";
        $scope.repos=["tet1","test12"];
        $scope.getRespo=function()
        {
            $scope.repos=["HTML5","Javascript","AngularJS","Angular2","BootStrap","Restful API"];
        };

    }
]);