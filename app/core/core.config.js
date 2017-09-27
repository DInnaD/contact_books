;(function () {
    angular
        .module('app')
        .config(mainConfig)
    // .config(['$mdIconProvider', function ($mdIconProvider) {
    //     $mdIconProvider
    //         .iconSet('social', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg', 24)
    //         .defaultIconSet('bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content-symbol.svg', 24);
    // }]);

    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function mainConfig($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'templates/homepage/homepage.html',
                controller: 'HomepageController',
                controllerAs: 'vm',
                resolve: {
                    data: function (contact) {
                        return contact.getContacts();
                    }
                }
            })
            .state('add-contact', {
                url: '/add-contact',
                templateUrl: 'templates/contact/add.html',
                controller: 'AddContactController',
                controllerAs: 'vm',
                resolve: {
                    currentContact: function (contact) {
                        if (contact.editable) {
                            return contact.getContact();
                        }
                    }
                }
            })
            .state('view-contact', {
                url: '/view-contact/',
                templateUrl: 'templates/contact/view.html',
                controller: 'ViewContactController',
                controllerAs: 'vm',
                resolve: {
                    currentContact: function (contact) {
                        return contact.getContact();
                    }
                }
            })


    }


})();

