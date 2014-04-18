'use strict';

angular.module('myBookmarksApp')
    .controller('MainCtrl', function ($scope, $http) {

        $http.get('data.json')
            .then(function(res) {
                var uniqueCats = ['Comics', 'Dev', 'Entertainment', 'Misc', 'Music', 'News', 'Video'];

                $scope.bookmarks = res.data;
                $scope.categories = uniqueCats;
            });

        $scope.showItem = function(deleted, allowDeleted) {
            console.log(deleted, allowDeleted);
            if (!deleted) {
                return true;
            } else if (deleted && allowDeleted) {
                return true;
            } else {
                return true;
            }
            return !!(!deleted || allowDeleted);
        };


    });
