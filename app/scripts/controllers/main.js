'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */
angular.module('ProfileWebsite')
    .controller('MainCtrl', function($scope) {
        $scope.technologies = [{
            name: 'C#',
            rating: '7'
        },{
            name: 'ASP.NET MVC',
            rating: '7'
        },{
            name: 'PHP',
            rating: '6'
        },{
            name: 'MSSQL',
            rating: '7'
        },{
            name: 'MySQL',
            rating: '5.5'
        },{
            name: 'AngularJS',
            rating: '7'
        },{
            name: 'JQuery',
            rating: '6'
        },{
            name: 'Javascript',
            rating: '7'
        },{
            name: 'HTML',
            rating: '7.5'
        },{
            name: 'CSS',
            rating: '6'
        },{
            name: 'JSON',
            rating: '8'
        },{
            name: 'XML',
            rating: '6.5'
        },{
            name: 'TFS',
            rating: '7'
        },{
            name: 'Git',
            rating: '7'
        },{
            name: 'IIS',
            rating: '8'
        },{
            name: 'Apache',
            rating: '5'
        }];
    });
