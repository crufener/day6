namespace App {
    angular.module("MyApp", []);
    class HomeController {
        public message = "Welcome!";
        public friends;
        public cars;
        public color = "green";
        pickColor(color) {
            this.color = color;
        }
        public a: number;
        public b: number;
        public c: number;
        public answer: string = "The answer is...";

        addNumbers(a,b){
            this.c = a + b;
            this.answer = `${this.a} + ${this.b} = ${this.c}`;
        }
        subNumbers(a,b){
            this.c = a - b;
            this.answer = `${a} - ${b} = ${this.c}`;
        }
        multNumbers(a,b){
            this.c = a * b;
            this.answer = `${a} x ${b} = ${this.c}`;
        }
        divideNumbers(a,b){
            this.c = a / b;
            this.answer = `${a} / ${b} = ${this.c}`;
        }
        calcResult() {
            
        }
        constructor() {
            this.friends = ["Bob", "Jen", "Theo", "Adeline", "Jurnee", "Joy"];
            this.cars = [
                { year: 1989, make: "VW", model: "Fox" },
                { year: 1988, make: "Nissan", model: "Sentra" },
                { year: 1996, make: "Ford", model: "Explorer" },
                { year: 2009, make: "BMW", model: "i325" },
                { year: 2016, make: "Tesla", model: "Model S" }
            ];
        }

    }
    angular.module("MyApp").controller("homeController", HomeController);
}
