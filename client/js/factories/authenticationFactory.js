angular.module('authenticationFactory', [])
    .factory('login', function($http) {
        return {
            requestLogin: function(email, password, callback) {
                $http.get('http://localhost:3000/users').success(function(users) {
                    for (i = 0; i < users.length; i++) {
                        if (email === users[i].email && password === users[i].password) {
                            callback(users[i]);
                            console.log("logado");
                        } else {
                            console.log("falhou");
                        }
                    }
                });

            }
        };
    });