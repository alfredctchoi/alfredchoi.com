'use strict';

angular
    .module('ProfileWebsite')
    .factory('TechnologyService', [
        function() {


            return {
                getTechnologies: function() {
                    return [{
                        section: 'Front End',
                        technologies: [{
                            name: 'AngularJS',
                            rating: '8'
                        }, {
                          name: 'ReactJS',
                          rating: '7'
                        }, {
                            name: 'JQuery',
                            rating: '7'
                        }, {
                            name: 'Javascript',
                            rating: '8'
                        }, {
                            name: 'HTML',
                            rating: '8.5'
                        }, {
                            name: 'CSS',
                            rating: '7'
                        }, {
                            name: 'JSON',
                            rating: '9'
                        }]
                    }, {
                        section: 'Back End',
                        technologies: [{
                            name: 'C#',
                            rating: '8'
                        }, {
                          name: 'NodeJS',
                          rating: '7'
                        }, {
                            name: 'ASP.NET MVC',
                            rating: '8'
                        }, {
                            name: 'PHP',
                            rating: '7'
                        }]
                    }, {
                        section: 'Database',
                        technologies: [{
                            name: 'MSSQL',
                            rating: '8'
                        }, {
                          name: 'Redis',
                          rating: '7'
                        }, {
                            name: 'MySQL',
                            rating: '6.5'
                        }]
                    }, {
                        section: 'Source Control',
                        technologies: [{
                            name: 'TFS',
                            rating: '8'
                        }, {
                            name: 'Git',
                            rating: '8'
                        }]
                    }, {
                        section: 'Server',
                        technologies: [{
                            name: 'IIS',
                            rating: '9'
                        }, {
                            name: 'Apache',
                            rating: '6'
                        }]
                    }];
                }
            };
        }
    ]);
