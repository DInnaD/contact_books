;(function () {
    'use strict';

    angular.module('app')
        .controller('ViewContactController', ViewContactController);

    ViewContactController.$inject = ['currentContact', 'contact'];

    function ViewContactController(currentContact, contact) {
        const vm = this;
        vm.contact = currentContact;
        vm.edit = edit;
        vm.deleteContact = deleteContact;

        /**
         *
         */
        function edit() {
            contact.editable = true;
        }

        function deleteContact() {
            contact.deleteContact();
        }
    }
})();