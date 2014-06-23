'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */
angular.module('ProfileWebsite')
    .controller('MainCtrl', function($scope, ExperienceService, TechnologyService) {
    	$scope.experiences = ExperienceService.getExperiences();
        $scope.technologies = TechnologyService.getTechnologies();
    });
