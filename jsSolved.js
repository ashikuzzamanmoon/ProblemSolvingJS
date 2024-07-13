//First Question :  Array Filtering And Mapping
// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.
const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Carol", age: 28, gender: "female" },
  { name: "David", age: 22, gender: "male" },
  { name: "Eve", age: 35, gender: "female" },
];

const names = people
  .filter((person) => person.gender !== "female")
  .map((person) => person.name);
// console.log("Names:", names);

//Second Question : Object Manipulation
// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
];

const bookTitles = books.map((book) => book.title);
// console.log("Book Title:", bookTitles);

//Third Question : Function Composition
// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.
const squareDoubleAddFive = (num) => {
  const square = (num) => num * num;
  const double = (num) => num * 2;
  const addFive = (num) => num + 5;
  return addFive(double(square(num)));
};
const result = squareDoubleAddFive(3);
// console.log(result);

//Four Question : Sorting Objects
// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.
const cars = [
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Honda", model: "Accord", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2015 },
  { make: "Chevrolet", model: "Malibu", year: 2019 },
  { make: "Tesla", model: "Model 3", year: 2021 },
];

const sortCars = cars.sort((a, b) => a.year - b.year);
// console.log(sortCars);

//Five Number Question : Find And Modify
// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumOfEvens = numbersArray.reduce((accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}, 0);

console.log("Sum of even numbers:", sumOfEvens);
