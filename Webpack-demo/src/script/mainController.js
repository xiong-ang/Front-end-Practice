var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', '$http',
    function($scope, $http) {
        $scope.bHide=false;

        $scope.searchHub = function(){
            $scope.bHide=true;
        };

        $scope.closeHub=function()
        {
            $scope.bHide=false;
        };

        $scope.keyword="";
        $scope.repos=[];
        $scope.getRespo=function()
        {
            $http({
                method: 'GET',
                url: 'https://api.github.com/search/repositories?q='+$scope.keyword+' in:name&sort=stars'
            }).then(function successCallback(response) {

                for (let index = 0; index < 10; index++) {
                    //console.log(response);
                    $scope.repos.push(
                    {
                        name:response.data.items[index].full_name, 
                        starCount:response.data.items[index].stargazers_count
                    });    
                }

                }, function errorCallback(response) {
                    alert("Http request failed");
            });
        };

        

    }
]);