angular.module('app', [])
    .controller('myCtrl', function ($scope) {

        // ex. 1
        $scope.mySimpleVal = "Here";
        // ex. 2
        $scope.list = [
            { id: 1, title: 'ttl_1' },
            { id: 2, title: 'ttl_2' },
            { id: 3, title: 'ttl_3' },
            { id: 4, title: 'ttl_4' },
            { id: 5, title: 'ttl_5' }
        ];
        // ex. 3
        $scope.clickTest = function () {
            alert('Date: ' + new Date());
        }
        // ex. 4
        $scope.persons = [];
        $scope.text = "";
        $scope.add = function () {
            $scope.persons.push($scope.text);
            $scope.text = "";
        };
        $scope.remove = function (i) {
            $scope.persons.splice(i, 1);
        }

    });