  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


//Filtering always returns an Array

// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
//console.log(oldEnough)

const byName = people.filter(person => person.name === "Michael")[0];
//console.log(byName)

// Best practice for complex filtering, is to define callback function externally, and pass it into the .filter() method
// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

//callback function(s) defined externally
const fiveYearsExperience = skill => skill.yrsExperience >= 5;
const checkExperience = student =>student.skills.filter(fiveYearsExperience).length > 0;

//callback function passed into .filter() method
const candidates = students.filter(checkExperience).map(student => student.name)
console.log(`The following students have the right experience:
 ${candidates}`)



