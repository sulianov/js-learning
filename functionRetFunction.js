function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", can you please explain what's UX design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log(name + ", what subject do you teach?");
    };
  } else {
    return function(name) {
      console.log("Hello " + name + ", what do uo do?");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");
