;(function () {
    'use strict';

    angular.module('app')
        .controller('HomepageController', HomepageController);


    HomepageController.$inject = ['data', 'contact'];

    function HomepageController(data, contact) {
        let vm = this;
        vm.contacts = data;
        vm.openContact = openContact;
        vm.add = add;

        /**
         *
         * @param item
         */
        function openContact(item) {
            contact.setContact(item);
            console.log(item);
        }

        function add() {
            contact.editable = false;
        }
    }
})();