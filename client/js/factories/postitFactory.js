angular.module('postitFactory', [])
    .factory('postits', function($http) {
        return {
            list: function(callback) {
                $http.get('http://localhost:3000/postits').success(callback);
            },
            add: function(enteredTitle, enteredText, colorSelected, callback) {
                $http.post('http://localhost:3000/postits', {
                    title: enteredTitle,
                    text: enteredText,
                    color: colorSelected
                }).success(callback);
            },
            delete: function(id, callback) {
                $http.delete('http://localhost:3000/postit/' + id).success(callback);
            },
            edit: function(enteredTitle, enteredText, colorSelected, editIndex, callback) {
                $http.put('http://localhost:3000/postit/' + editIndex, {
                    title: enteredTitle,
                    text: enteredText,
                    color: colorSelected
                }).success(callback);
            },
        };
    });