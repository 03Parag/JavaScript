class Employee {
    constructor(empId, salary, gender, joiningDate) {
        this.empId = empId;
        this.salary = salary;
        this.gender = gender;
        this.joiningDate = joiningDate;
    }

    validateEmployee() {
        try {
            // Validate Employee ID (Positive Non-Zero Integer)
            if (!/^[1-9]\d*$/.test(this.empId)) {
                throw new Error("Invalid Employee ID! It must be a positive non-zero number.");
            }

            // Validate Salary (Positive Non-Zero Number)
            if (!/^[1-9]\d*(\.\d+)?$/.test(this.salary)) {
                throw new Error("Invalid Salary! It must be a positive non-zero number.");
            }

            // Validate Gender (Only 'M' or 'F')
            if (!/^[MF]$/.test(this.gender)) {
                throw new Error("Invalid Gender! Must be 'M' or 'F'.");
            }

            // Validate Joining Date (Not a Future Date)
            let dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Format: YYYY-MM-DD
            if (!dateRegex.test(this.joiningDate)) {
                throw new Error("Invalid Date Format! Use YYYY-MM-DD.");
            }

            let inputDate = new Date(this.joiningDate);
            let currentDate = new Date();
            if (inputDate > currentDate) {
                throw new Error("Invalid Date! Joining date cannot be a future date.");
            }

            console.log("Employee validation successful! ");
        } catch (error) {
            console.error("Validation Error:", error.message);
        }
    }
}

// Example Test Cases
// Should Pass
let emp1 = new Employee("101", "50000", "M", "2023-05-10");
emp1.validateEmployee();  

// Invalid Employee ID
let emp2 = new Employee("0", "30000", "F", "2022-08-15");
emp2.validateEmployee();  

// Invalid Salary, Gender, and Future Date
let emp3 = new Employee("102", "-2000", "X", "2025-01-01");
emp3.validateEmployee();  
