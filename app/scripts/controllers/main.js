'use strict';

angular.module('myBookmarksApp')
    .controller('MainCtrl', function ($scope, $http) {

        $('img').error(function(e) {
            console.log(e);
        });

        $http.get('data.json')
            .then(function(res) {
                var uniqueCats = ['Comics', 'Dev', 'Entertainment', 'Misc', 'Music', 'News', 'Video'];

                $scope.bookmarks = res.data;
                $scope.categories = uniqueCats;
              });

      });
