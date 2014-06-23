'use strict';

angular
    .module('ProfileWebsite')
    .factory('ExperienceService', [
        function() {
            return {
                getExperiences: function() {
                    return [{
                        title: 'Senior Web Developer',
                        period: '2011 - Present',
                        company: {
                            name: 'Vital Insights',
                            location: 'Mississauga, Ontario',
                            description: 'Vital Insights is a leading provider of Customer Experience Management software solutions for the automotive industry with clients including BMW, Mini, Volkswagen and Mercedes-Benz'
                        },
                        responsibilities: ['Developed new survey platform using C#, ASP.NET MVC, MSSQL, Entity Framework, AngularJS, JQuery, HTML, CSS',
                            'Developed feature enhancements for existing web application in C#, Web Forms ASP.NET 2.0, JQuery, Javascript, HTML, CSS',
                            'Developed sales demos for CEO under tight deadlines',
                            'Updated existing iOS applications and deploy to Apple’s App Store',
                            'Maintained source code using SourceGear Vault, Team Foundation, and GitHub',
                            'Deploy software changes to production servers',
                            'Write T-SQL to generate reports that provided Account Managers, Analytics Team and Business Owners with detailed summaries of survey results',
                            'Manage support case queue to ensure software issues are resolved in accordance to the company’s Service Level Agreement',
                            'Provide training and leadership support on system infrastructure to team members'
                        ]
                    }, {
                        title: 'Freelance Developer',
                        period: '2004 - Present',
                        company: {
                            name: 'Self Employed',
                            location: 'Toronto, Ontario',
                            description: 'Provide IT services to individuals and small businesses in Toronto.'
                        },
                        responsibilities: ['Gathered business requirements and drafted software proposals and estimates', 'Developed database driven web applications using C# (ASP.NET, MVC), PHP (Zend Framework), MSSQL, MySQL, AngularJS, JQuery, Javascript, HTML and CSS', 'Maintained software source code with Git ', 'Determined business challenges and propose IT solutions to clients and prospects ', 'Designed website mock-ups using Adobe Photoshop ', 'Installed and configured websites on IIS, Apache, and various web domain control panels', 'Provide onsite and remote technical support ', 'Perform on site network cable installation and configuration']
                    }, {
                        title: 'Technical Support Representative/Junior Developer',
                        period: '2008 - 2011',
                        company: {
                            name: 'Avanti Computer Systems',
                            location: 'North York, Ontario',
                            description: 'Avanti is the leading provider of print management software to commercial and inplant printing plants. The software provides real time data on print jobs currently in production.'
                        },
                        responsibilities: ['Developed an integrated support ticketing website in PHP, MySQL, XML, HTML and CSS, allowing customers to submit and manage support tickets', 'Reduced customer response time by integrating knowledge base and online chat with ticketing website, which enabled instant solutions to commonly reported issues', 'Provided World Class Customer Service to clients within agreed Service Level Agreement', 'Troubleshoot software, hardware and network issues remotely using Citrix GoToMeeting, and Cisco Webex', 'Provided remote and on-site Management Information System software consultation', 'Conducted integration quality control testing to ensure software stability ', 'Shortened response time by providing internal troubleshooting training to Customer Support Representatives', 'Configured and utilized Microsoft SQL Server to restore, backup and modify databases']
                    }];
                }
            };
        }
    ]);