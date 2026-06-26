let courses = [];

function gradeToPoint(grade) {
    grade = grade.toUpperCase();

    if (grade === "A") return 5;
    else if (grade === "B") return 4;
    else if (grade === "C") return 3;
    else if (grade === "D") return 2;
    else if (grade === "E") return 1;
    else return 0; // F
}

function addCourse() {
    let course = document.getElementById("course").value;
    let unit = parseFloat(document.getElementById("unit").value);
    // let unit = document.getElementById("unit").value
    let grade = document.getElementById("grade").value;

    if (!course || !unit || !grade) {
        alert("Please fill all fields");
        return;
    }

    courses.push({ course, unit, grade });

    document.getElementById("courseList").innerHTML += 
        `<li>${course} - ${unit} units - ${grade}</li>`;

    // Clear inputs
    document.getElementById("course").value = "";
    document.getElementById("unit").value = "";
    document.getElementById("grade").value = "";
}

function calculateGPA() {
    let totalPoints = 0;
    let totalUnits = 0;

    for (let i = 0; i < courses.length; i++) {
        let point = gradeToPoint(courses[i].grade);
        totalPoints += point * courses[i].unit;
        totalUnits += courses[i].unit;
    }

    let gpa = totalPoints / totalUnits;

    document.getElementById("result").innerText = 
        "Your GPA is: " + gpa.toFixed(2);
}