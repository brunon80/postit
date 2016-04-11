var postitController = angular.module('postitController', []);
postitController.controller('postItCtrl', function($scope, postits, login) {

        $scope.isAuthenticaded = false;
        $scope.userName = 'Post It!'
        $scope.postIts = [];
        $('#loginModal').modal();

        $scope.getPostIts = function() {

            postits.list(function(postits) {
                $scope.postIts = postits;
            });
        }

        $scope.getPostIts();

        $scope.choosedColor = function(postItColor) {

            switch (postItColor) {
                case "blue":
                    $scope.colorSelected = "blue";
                    break;
                case "green":
                    $scope.colorSelected = "green";
                    break;
                case "red":
                    $scope.colorSelected = "red";
                    break;
                default:
                    $scope.colorSelected = "gray"
            }
        }

        $scope.loginAttepmt = function(email, password) {

            if ($scope.login.email.$valid != false && $scope.login.password.$valid != false) {

                login.requestLogin(email, password, function(user) {
                    $scope.isAuthenticaded = true;
                    $scope.userName = user.email;
                    $('#loginModal').modal("hide");
                });
            }
        }

        $scope.addPostIt = function(enteredTitle, enteredText) {

            if ($scope.isAuthenticaded) {
                var color = $scope.colorSelected;
                postits.add(enteredTitle, enteredText, color, function(postits) {
                    $scope.getPostIts();
                });

            } else {
                console.log("voce nao esta logado");
                console.log($scope.isAuthenticaded);
            }
        };

        $scope.removePostIt = function(postIt) {
            if ($scope.isAuthenticaded) {

                postits.delete(postIt.id, function(postit) {
                    $scope.getPostIts();
                });
            }

        };

        $scope.getEditableData = function(postit) {

            $scope.editTitle = postit.title;
            $scope.editText = postit.text;
            $scope.editIndex = postit.id;

        }

        $scope.editPostIt = function(enteredTitle, enteredText) {

            if ($scope.isAuthenticaded) {

                postits.edit(enteredTitle, enteredText, $scope.colorSelected, $scope.editIndex, function(postits) {

                    $scope.getPostIts();

                });
            } else {
                console.log("voce nao esta logado");
                console.log($scope.isAuthenticaded);
            }
        }



    });