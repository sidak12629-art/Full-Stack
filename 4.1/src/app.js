// employeeManager.js

const readline = require("readline");

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Employee data stored in an array
let employees = [];

// Display the main menu
function showMenu() {
  console.log("\n=== Employee Management System ===");
  console.log("1. Add Employee");
  console.log("2. List All Employees");
  console.log("3. Remove Employee by ID");
  console.log("4. Exit");
  rl.question("Choose an option (1-4): ", handleMenu);
}

// Handle menu options
function handleMenu(option) {
  switch (option.trim()) {
    case "1":
      addEmployee();
      break;
    case "2":
      listEmployees();
      break;
    case "3":
      removeEmployee();
      break;
    case "4":
      console.log("Exiting program. Goodbye!");
      rl.close();
      break;
    default:
      console.log("Invalid choice. Please try again.");
      showMenu();
  }
}

// Add a new employee
function addEmployee() {
  rl.question("Enter Employee Name: ", (name) => {
    rl.question("Enter Employee ID: ", (id) => {
      // Check for duplicate ID
      if (employees.some((emp) => emp.id === id)) {
        console.log("❌ Employee with this ID already exists!");
      } else {
        employees.push({ name, id });
        console.log(`✅ Employee '${name}' added successfully!`);
      }
      showMenu();
    });
  });
}

// List all employees
function listEmployees() {
  console.log("\n=== Employee List ===");
  if (employees.length === 0) {
    console.log("No employees found.");
  } else {
    employees.forEach((emp, index) => {
      console.log(`${index + 1}. ID: ${emp.id}, Name: ${emp.name}`);
    });
  }
  showMenu();
}

// Remove employee by ID
function removeEmployee() {
  rl.question("Enter Employee ID to remove: ", (id) => {
    const index = employees.findIndex((emp) => emp.id === id);
    if (index === -1) {
      console.log("❌ Employee not found!");
    } else {
      const removed = employees.splice(index, 1);
      console.log(`✅ Removed Employee: ${removed[0].name}`);
    }
    showMenu();
  });
}

// Start the app
showMenu();
