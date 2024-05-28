// Student Records
let students = new Map();

// a) Add data for 3 students
students.set(101, { name: 'Alice', score: 85 });
students.set(102, { name: 'Bob', score: 75 });
students.set(103, { name: 'Charlie', score: 90 });

// b) Get Student Names using map functions
let studentNames = Array.from(students.values()).map(student => student.name);
console.log("Student Names:", studentNames);

// c) Delete Student Scores using map functions
let studentsWithoutScores = new Map(Array.from(students).map(([id, student]) => [id, { name: student.name }]));
console.log("Students without Scores:", studentsWithoutScores);

// d) Display 1 parameter (only value), 2 parameters (value + key), and 3 parameters (value + key + map) for the student
students.forEach((student, id, map) => {
    console.log("Student Name (Value Only):", student.name);
    console.log("Student ID and Name (Value + Key):", id, student.name);
    console.log("Student Details (Value + Key + Map):", student, id, map);
});
