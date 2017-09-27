;(function () {
    'use strict';

    angular.module('app')
        .controller('AddContactController', AddContactController);

    AddContactController.$inject = ['contact', 'currentContact'];

    function AddContactController(contact, currentContact) {
        const vm = this;
        vm.save = save;
        vm.user = currentContact;


        function save() {
            contact.saveContact(vm.user);
        }
    }
})();