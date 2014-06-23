/**
* ProfileWebsite Module
*
* Description
*/
angular.module('ProfileWebsite')
.factory('ExperienceService', [function () {
	

	return {
		getExperiences: function () {
			return [{
				title: 'Senior Web Developer',
				period: '2011 - Present',
				company: {
					name: 'Vital Insights',
					location: 'Mississauga, Ontario',
					description: 'Vital Insights is a leading provider of Customer Experience Management software solutions for the automotive industry with clients including BMW, Mini, Volkswagen and Mercedes-Benz'
				},
				responsibilities: {
					
				}

			}];
		}
	};
}])