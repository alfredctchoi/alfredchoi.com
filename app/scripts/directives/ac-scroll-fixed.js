'use strict';

angular
    .module('ProfileWebsite')
    .directive('acScrollFixed', ['$window',
        function($window) {
            return {
                restrict: 'A',
                link: function(scope) {
                    angular
                        .element($window)
                        .bind('scroll', function() {
                            if (this.pageYOffset >= 200) {
                                scope.booleanChange = true;
                            } else {
                                scope.booleanChange = false;
                            }
                            scope.$apply();
                        });
                }
            };
        }
    ]);
