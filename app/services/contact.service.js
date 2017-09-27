;(function () {
    'use strict';

    angular.module('service.contact', [])
        .service('contact', contact);

    contact.$inject = ['$localStorage', '$sessionStorage', '$state', 'toastr', '$mdDialog'];

    function contact($localStorage, $sessionStorage, $state, toastr, $mdDialog) {
        let model = {};
        model.getContacts = getContacts;
        model.saveContacts = saveContacts;
        model.saveContact = saveContact;
        model.currentContact = {};
        model.setContact = setContact;
        model.getContact = getContact;
        model.deleteContact = deleteContact;
        model.list = [];
        model.editable = false;
        return model;

        /**
         *
         * @returns {Array|*}
         */
        function getContacts() {
            model.list = $localStorage['contacts'] || [];
            return model.list;
        }

        /**
         *
         */
        function saveContacts() {
            $localStorage['contacts'] = model.list;
        }

        /**
         *
         * @param contact
         */
        function saveContact(contact) {
            debugger;
            if (!model.editable) {
                model.list.push(contact);
            } else {
                model.list.forEach(function (el) {
                    if (el.$$hashKey === contact.$$hashKey) {
                        el = contact;
                    }
                });
                $state.go('view-contact');
            }
            toastr.success('Контакт успешно сохранен');

            model.saveContacts();
        }

        /**
         *
         * @param contact
         */
        function setContact(contact) {
            model.currentContact = contact;
            $sessionStorage['currentContact'] = model.currentContact;
        }

        /**
         *
         * @returns {*}
         */
        function getContact() {
            return $sessionStorage['currentContact'];
        }


        function deleteContact() {

            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Are you sure?')
                .ok('Yes')
                .cancel('No');

            $mdDialog.show(confirm).then(function () {
                model.list.forEach(function (el, index) {
                    if (el.$$hashKey === model.currentContact.$$hashKey) {
                        model.list.splice(1, index);
                        model.saveContacts();
                    }
                });
            }, function () {
                console.log("no");
            });

        }


    }
})();