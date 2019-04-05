// CODE here for your Lambda Classes
/* 
  * First we need a Person class. This will be our `base-class`
  * Person receives `name` `age` `location` `gender` all as props
  * Person receives `speak` as a method.
  * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
*/
class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
    this.gender = obj.gender;
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

/* 
  * Now that we have a Person as our base class, we'll build our Instructor class.
  * Instructor uses the same attributes that have been set up by Person
  * Instructor has the following unique props:
    * `specialty` what the Instructor is good at i.e. 'redux'
    * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
    * `catchPhrase` i.e. `Don't forget the homies`
  * Instructor has the following methods:
    * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
    * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Person {
  constructor(obj) {
    super(obj);
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}!`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

/* 
  * Now we need some students!
  * Student uses the same attributes that have been set up by Person
  * Student has the following unique props:
    * `previousBackground` i.e. what the Student used to do before Lambda School
    * `className` i.e. CS132
    * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
  * Student has the following methods:
    * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
    * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
    * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
*/
class Student extends Person {
  constructor(obj) {
    super(obj);
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
  }
  listSubjects() {
    console.log(`My favorite subjects are: `);
    this.favSubjects.forEach(element => { console.log(`${element}`); });
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun the Sprint Challenge on ${subject}!`);
  }
}

/* 
  * Now that we have instructors and students, we'd be nowhere without our PM's
  * ProjectManagers are extensions of Instructors
  * ProjectManagers have the following unique props:
    * `gradClassName`: i.e. CS1
    * `favInstructor`: i.e. Sean
  * ProjectManagers have the following Methods:
    * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
    * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Instructor {
  constructor(obj) {
    super(obj);
    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to @${channel}, @channel stand-up times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}

const eric = new Student({
  name: 'Eric', age: 29, gender: 'male', location: 'Pennsylvania',
  previousBackground: `Customer Service/Tech Support`,
  className: `WebPT5`, favSubjects: [`Applied JavaScript`, `SPA's`],
});
console.log(`[${eric.age}/${eric.gender}]`);
eric.listSubjects();
eric.PRAssignment(`Applied JavaScript`);
eric.sprintChallenge(`JavaScript Fundamentals`);

const ruben = new Student({
  name: 'Ruben', age: 27, gender: 'male', location: 'Connecticut',
  previousBackground: `Development`,
  className: `WebPT5`, favSubjects: [`Data Persistence`, `Testing`],
});
console.log(`[${ruben.age}/${ruben.gender}]`);
ruben.listSubjects();
ruben.PRAssignment(`Applied JavaScript`);
ruben.sprintChallenge(`JavaScript Fundamentals`);

const arthur = new Student({
  name: 'Arthur', age: 35, gender: 'male', location: 'East Coast',
  previousBackground: `Backend Systems Development`,
  className: `WebPT5`, favSubjects: [`Authentication`, `Redux`],
});
console.log(`[${arthur.age}/${arthur.gender}]`);
arthur.listSubjects();
arthur.PRAssignment(`Applied JavaScript`);
arthur.sprintChallenge(`JavaScript Fundamentals`);

const fred = new Instructor({
  name: 'Fred', age: 37, gender: 'male', location: 'Bedrock',
  favLanguage: 'JavaScript', specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
});
console.log(`[${fred.age}/${fred.gender}]`);
console.log(`My favorite programming language is ${fred.favLanguage} and my specialty is ${fred.specialty}. ${fred.catchPhrase}`);
fred.demo(`Front-End Development`);
fred.grade(eric, `JavaScript Fundamentals`);

const cam = new Instructor({
  name: 'Cam', age: 30, gender: 'male', location: 'US',
  favLanguage: 'Assembly', specialty: 'Data Structuring',
  catchPhrase: `Time to play "A Link to the Past"`,
});
console.log(`[${cam.age}/${cam.gender}]`);
console.log(`My favorite programming language is ${cam.favLanguage} and my specialty is ${cam.specialty}. ${cam.catchPhrase}`);
cam.demo(`Database Planning`);
cam.grade(ruben, `JavaScript Fundamentals`);

const josh = new Instructor({
  name: 'Josh', age: 35, gender: 'male', location: 'USA',
  favLanguage: 'Ruby', specialty: 'Project Management/Mentoring',
  catchPhrase: `Let's Learn!`,
});
console.log(`[${josh.age}/${josh.gender}]`);
console.log(`My favorite programming language is ${josh.favLanguage} and my specialty is ${josh.specialty}. ${josh.catchPhrase}`);
josh.demo(`Single Page Applications`);
josh.grade(arthur, `JavaScript Fundamentals`);

const nate = new ProjectManager({
  name: 'Nate', age: 29, gender: 'male', location: 'Somewhere',
  favLanguage: 'Javascript', specialty: 'Microservice Creation',
  catchPhrase: `Gotta find dat J.O.B!!!`,
  gradClassName: `AwesomeClass`, favInstructor: `Knell`,
});
console.log(`[${nate.age}/${nate.gender}]`)
console.log(`I graduated as a part of ${nate.gradClassName} and my favorite Instructor is ${nate.favInstructor}.`);
console.log(`My favorite programming language is ${nate.favLanguage} and my specialty is ${nate.specialty}. ${nate.catchPhrase}`);
nate.demo(`Build Week`);
nate.grade(arthur, `JavaScript Fundamentals`);
nate.standUp(`WebPT5`);
nate.debugsCode(eric, `Applied JavaScript`);

const danica = new ProjectManager({
  name: 'Danica', age: 40, gender: 'female', location: 'Nowhere',
  favLanguage: 'Schema', specialty: 'CMS Creation',
  catchPhrase: `Gotta make it right the first time!`,
  gradClassName: `Something`, favInstructor: `Someone`,
});
console.log(`[${danica.age}/${danica.gender}]`)
console.log(`I graduated as a part of ${danica.gradClassName} and my favorite Instructor is ${danica.favInstructor}.`);
console.log(`My favorite programming language is ${danica.favLanguage} and my specialty is ${danica.specialty}. ${danica.catchPhrase}`);
danica.demo(`React`);
danica.grade(ruben, `JavaScript Fundamentals`);
danica.standUp(`WebPT5`);
danica.debugsCode(eric, `Applied JavaScript`);