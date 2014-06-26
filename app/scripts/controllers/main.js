'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */
angular.module('ProfileWebsite')
    .controller('MainCtrl', function($scope, ExperienceService, TechnologyService, EducationService) {
        $scope.experiences = ExperienceService.getExperiences();
        $scope.technologies = TechnologyService.getTechnologies();
        $scope.education = EducationService.getEducation();
        $scope.achievements = [{
            company: {
                image: 'images/vitalinsights_logo.png',
                link: 'http://www.vitalinsights.com'
            },
            achievements: [
                'Architected and developed new survey platform from ground up',
                'Led the implementation of an international web-based survey system',
                'Developed intuitive dashboards providing summarized and trending views of survey responses',
                'Implemented Short Messaging Service (SMS) integration allowing users to receive surveys via text message',
                'Developed a call center queue web application allowing third parties to complete surveys with the end users over the phone',
                'Increased efficiency by developing report processor to automate daily operational reports'
            ]
        }, {
            company: {
                image: 'images/avanti_logo.png',
                link: 'http://www.avantisystems.com'
            },
            achievements: [
                'Developed an integrated online ticketing system that provids real time status updates on their support tickets',
                'Reduced the number of support calls by implemented an online knowledge base that provides solutions to common software issues',
                'Streamlined software installation process and reduced install times by 50%'
            ]
        }];
    });
