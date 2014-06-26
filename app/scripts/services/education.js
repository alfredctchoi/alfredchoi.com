'use strict';

angular
    .module('ProfileWebsite')
    .factory('EducationService', [
        function() {
            return {
                getEducation: function() {
                    return [{
                        period: '2011',
                        program: 'Database (Oracle/Java) Developer Certificate',
                        courses: ['Introduction to database design and SQL'],
                        institution: {
                            name: 'Seneca College',
                            location: 'Toronto, Ontario',
                            image: 'images/seneca_logo.png',
                            link: 'http://www.senecac.on.ca'
                        }
                    }, {
                        period: '2004 - 2008',
                        program: 'Bachelor of Technology',
                        courses: [],
                        institution: {
                            name: 'Ryerson University',
                            location: 'Toronto, Ontario',
                            image: 'images/ryerson_logo.png',
                            link: 'http://www.ryerson.ca'
                        }
                    }];
                }
            };
        }
    ]);
