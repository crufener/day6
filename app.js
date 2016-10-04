var App;
(function (App) {
    angular.module("MyApp", []);
    var HomeController = (function () {
        function HomeController() {
            this.message = "Welcome!";
            this.color = "green";
            this.answer = "The answer is...";
            this.friends = ["Bob", "Jen", "Theo", "Adeline", "Jurnee", "Joy"];
            this.cars = [
                { year: 1989, make: "VW", model: "Fox" },
                { year: 1988, make: "Nissan", model: "Sentra" },
                { year: 1996, make: "Ford", model: "Explorer" },
                { year: 2009, make: "BMW", model: "i325" },
                { year: 2016, make: "Tesla", model: "Model S" }
            ];
        }
        HomeController.prototype.pickColor = function (color) {
            this.color = color;
        };
        HomeController.prototype.addNumbers = function (a, b) {
            this.c = a + b;
            this.answer = this.a + " + " + this.b + " = " + this.c;
        };
        HomeController.prototype.subNumbers = function (a, b) {
            this.c = a - b;
            this.answer = a + " - " + b + " = " + this.c;
        };
        HomeController.prototype.multNumbers = function (a, b) {
            this.c = a * b;
            this.answer = a + " x " + b + " = " + this.c;
        };
        HomeController.prototype.divideNumbers = function (a, b) {
            this.c = a / b;
            this.answer = a + " / " + b + " = " + this.c;
        };
        HomeController.prototype.calcResult = function () {
        };
        return HomeController;
    }());
    angular.module("MyApp").controller("homeController", HomeController);
})(App || (App = {}));
