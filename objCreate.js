// Object.create

/*var personProto = {
  calculateAge: function() {
    return 2020 - this.yearOfBirth;
  }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" },
  age: { value: jane.calculateAge() }
});
*/

var mildred = {
  name: "Mildred",
  yearOfBirth: 1987,
  job: "physician"
};

var margo = Object.create(mildred, {
  name: { value: "Margareth" },
  yearOfBirth: { value: 1990 },
  job: { value: "musician" }
});

mildred.calculateAge = function() {
  return 2020 - this.yearOfBirth;
};

mildred.age = mildred.calculateAge();

margo.age = margo.calculateAge();
