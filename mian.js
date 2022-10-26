// // // // // const person = {
// // // // //     firstName: "John",
// // // // //     lastName: "Doe",
// // // // //     id: 5566,
// // // // //     fullName : function() {
// // // // //       return this.firstName + " " + this.lastName;
// // // // //     }
// // // // // };
  
// // // // // // console.log(person.fullName());

// // // // // let x = this;

// // // // // document.getElementById("demo").innerHTML = x

// // // // // function myFunction() {
// // // // //     return this;
// // // // // }
  
// // // // // myFunction()

// // // // let workshop = {
// // // //     teacher: "Ihtiyor",
// // // //     ask(question) {
// // // //         console.log(this.teacher, question);
// // // //     }
// // // // }

// // // // workshop.ask("What is the use of this keyword ")


// // // function ask(question) {
// // //     console.log(this.teacher, question);
// // // };

// // // function otherClass() {
// // //     let myContext = {
// // //         teacher: "Suzy"
// // //     };
// // //     ask.call(myContext, "Why")
// // // }

// // // otherClass()

// // function workshop(teacher) {
// //     this.teacher = teacher
// // }

// // workshop.prototype.ask = function (question) {
// //     console.log(this.teacher, question);
// // }

// // let deepJS = new workshop("Abdulloh");
// // let web = new workshop("Qodirjon");
// // deepJS.ask("Why are sleeping");
// // web.ask("Why are you asking");



// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//   }
  
//   const myCar = new Car("Ford", 2014);
//   document.getElementById("demo").innerHTML =
//   myCar.name + " " + myCar.year;

