(function() {
    'use strict';

    angular.module('People', [])
        .controller('PeopleController', function() {
            var vm = this;
            vm.people = [];

            vm.addPerson = function() {
                var people = {
                    name: vm.name, lastName: vm.lastName, profile: vm.profile
                };
                vm.people.push(people);
            };

            vm.deletePerson = function(index) {
                vm.people.splice(index, 1);
            };
            function init() {
                vm.people.push(
                    {name: 'Maryon', lastName: 'Jose', profile: 'Desarrollo'},
                    {name: 'Juan', lastName: 'Rodri', profile: 'Redes'},
                    {name: 'Luis', lastName: 'Rosario', profile: 'Sistemas'}
                );
            }
            init();
        })
        .component('peopleForm', {
            controller: 'PeopleController',
            controllerAs: 'vm',
            bindings: {
                name: '<',
                lastName: '<',
                profile: '<',
                addPerson: '&'
            },
            templateUrl: 'src/views/people-form.html'
        })
        .component('peopleList', {
            controller: 'PeopleController',
            controllerAs: 'vm',
            templateUrl: 'src/views/people-list.html',
            bindings: {
                people: '<',
                search: '<',
                onDelete: '&'
            }
        });
}());
