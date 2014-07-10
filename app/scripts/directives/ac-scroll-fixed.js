'use strict';

angular
    .module('ProfileWebsite')
    .directive('acScrollFixed', ['$window', '$rootScope',
        function($window, $rootScope) {
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
                            if(this.pageYOffset > 764 && !$rootScope.animateRatingBars)
                            {
                                $rootScope.animateRatingBars = true;
                            }
                            scope.$apply();
                        });
                }
            };
        }
    ]);
