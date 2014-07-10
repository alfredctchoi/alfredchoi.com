'use strict';

angular
	.module('ProfileWebsite')
	.directive('acRatingBar', [function () {
		return {
			restrict: 'E',
			templateUrl: 'views/directives/ac-rating-bar.html',
			replace: true,
			scope: {
				rating: '=',
				description: '=',
				animateRating: '='
			},
			link: function (scope) {
				scope.width = { width: scope.rating / 0.1 + '%' };
			}
		};
	}]);