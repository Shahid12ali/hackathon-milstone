// Get reference to the form and display area
var form = document.getElementById('user-info');
var resumeDisplay = document.getElementById('dynamic-resume');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect User Input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate Resume
    var generateResume = "\n    <h1><b>Resume</b></h1>\n    <h2>Personal Information</h2>\n    <p><b>Name</b>".concat(name, "</p>\n    <p><b>Email</b>").concat(email, "</p>\n    <p><b>Phone</b>").concat(phone, "</p>\n    \n    <h2>Education</h2>\n    <p>").concat(education, "</p>\n    \n     <h2>Experience</h2>\n    <p>").concat(experience, "</p>\n    \n     <h2>Skills</h2>\n    <p>").concat(skills, "</p>");
    // Display Generated Resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = generateResume;
    }
    else {
        console.error("The Resume Display Element Is Missing.");
    }
});
