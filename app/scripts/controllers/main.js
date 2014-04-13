'use strict';

angular.module('myBookmarksApp')
    .controller('MainCtrl', function ($scope, $http) {
        $http.get('data.json')
            .then(function(res) {
                var uniqueCats = ['Comics', 'Dev', 'Entertainment', 'Misc', 'Music', 'News', 'Video'];

                $scope.bookmarks = res.data;
                $scope.categories = uniqueCats;

                var indexed = [];

                $scope.bookmarksToFilter = function() {
                    indexed = [];
                    return $scope.bookmarks;
                };

                $scope.filterCats = function(bookmark) {
                    var newCat = indexed.indexOf(bookmark.category) === -1;

                    if (newCat) {
                        indexed.push(bookmark.category);
                    }
                    return newCat;
                };

              });

      });
