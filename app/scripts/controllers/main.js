'use strict';

angular.module('myBookmarksApp')
    .controller('MainCtrl', function ($scope, $http) {

        $http.get('data.json')
            .then(function(res) {
                var uniqueCats = ['Comics', 'Dev', 'Entertainment', 'Misc', 'Music', 'News', 'Video'];

                $scope.bookmarks = res.data;
                $scope.categories = uniqueCats;
            });

    })
    .filter('showDel', function() {

        return function(bm, showDeleted) {
            var list = [];

            angular.forEach(bm, function(v, k) {
                if (bm[k].deleted === "0"
                    || (bm[k].deleted === "1" && showDeleted) ) {
                    list.push(bm[k]);
                }
            });

            return list;
        };

    });
