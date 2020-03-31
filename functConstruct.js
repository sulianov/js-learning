// Function Constructor

var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.age = this.calculateAge();
};

Person.prototype.calculateAge = function() {
  return 2020 - this.yearOfBirth;
};
// instantiation
var john = new Person("John", 1990, "teacher");

var jane = new Person("Jane", 1991, "designer");

var mark = new Person("Mark", 1948, "retired");
/*
john.calculateAge();
jane.calculateAge();
mark.calculateAge();*/
