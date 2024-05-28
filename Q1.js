// Sample Employee Records
let employees = [
    { id: 101, name: 'John', salary: 50000 },
    { id: 102, name: 'Alice', salary: 60000 },
    { id: 103, name: 'Bob', salary: 55000 },
    { id: 104, name: 'Eve', salary: 70000 }
];

// a) Print an array of all employee ids
let employeeIds = employees.map(employee => employee.id);
console.log("Employee IDs:", employeeIds);

// b) Print count of employees
let employeeCount = employees.length;
console.log("Employee Count:", employeeCount);

// c) Print the name of the employee according to their id { key: value }
let employeeNamesById = {};
employees.forEach(employee => {
    employeeNamesById[employee.id] = employee.name;
});
console.log("Employee Names by ID:", employeeNamesById);

// d) Store the salaries of all employees in an array
let salaries = employees.map(employee => employee.salary);
console.log("Salaries of all Employees:", salaries);

// e) Calculate the average salary the company is paying to its employees
let totalSalary = salaries.reduce((acc, curr) => acc + curr, 0);
let averageSalary = totalSalary / employeeCount;
console.log("Average Salary:", averageSalary.toFixed(2));
