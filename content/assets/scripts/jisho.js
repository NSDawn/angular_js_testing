const RESPONSEDIV = document.getElementsByClassName("search_response")[0]; 
const QUERYDIV = document.getElementsByClassName("search_query")[0];
let query_last_value = "";


angular.module("jishoApp", []) 
    .controller("jishoController", ["$scope", "$q", function jishoController($scope, $q) {
        $scope.search_query = "";
        //$scope.data = {};
        //$scope.data = JSON.parse($scope._data);
        
        function lookup(search_query) {
            return fetch("https://jotoba.de/api/search/words", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "query": search_query,
                    "language": "English",
                    "no_english": true,
                }),
            }).then ((res) => {
                if (!res.ok) {
                    console.error('Network response was not ok');
                    return {};
                }
                return res.json();
            });
        }
        
        $scope.update = function () {
            $scope.msg = "fetching...";
            $scope.data = {}; 

            lookup($scope.search_query).then((result) => {
                $scope.$apply( () => { 
                    $scope.data = result;
                    $scope.msg = "";

                    if (result.words == null) {$scope.msg = "no entries found."}
                });
            }).catch(function(error) {
                console.error('Error:', error);
                $scope.data = 'Error fetching data';
            });
        }
    }]);


