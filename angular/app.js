/*
*	Author:	Jacqueline Walsh
*	Assignment:	WE4 Mobile	Web	Applications,	Digital	Skills	Academy
*	Date	:	2016/06/25
*	Ref:	http://www.w3schools.com/angular/tryit.asp?filename=try_ng_todo_app (adapted for assignment)
*/

// creating a module for the app with no dependancies  
var myApp = angular.module('myApp', []);

// creating a controller for the app - [$scope has been included so that if the code is minified it will not lose scope
myApp.controller('todoCtrl', ['$scope', function($scope) {

	// data bind title to view
	$scope.title = "To Do List";
	// todoList array to hold tasks
    $scope.todoList = [];

	// function to add tasks to list
    $scope.todoAdd = function() {
	    // adds a new task to the end of the task list from input field
        $scope.todoList.push({ todoText : $scope.todoInput, done : false });
        // clears input field for next task to be added
        $scope.todoInput = "";
    }; // end of add function

	// function to remove task from list
    $scope.remove = function() {
	    // stores todoList in oldList variable
        var oldList = $scope.todoList;
        // todoList array to hold tasks
        $scope.todoList = [];
        // loops through oldList and deletes any task with a true checkbox input, ie tick 
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        }); // end of remove function
    }; // end of controller
    
}]);  // end of myApp module