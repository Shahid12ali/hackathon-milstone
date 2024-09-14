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
    var generateResume = "\n    <h1><b>Editable Resume</b></h1>\n    <h2>Personal Information</h2>\n    <p><b>Name</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    \n    <h2>Education</h2>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    \n     <h2>Experience</h2>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    \n     <h2>Skills</h2>\n    <p contenteditable=\"true\">").concat(skills, "</p>");
    // Display Generated Resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = generateResume;
    }
    else {
        console.error("The Resume Display Element Is Missing.");
    }
});
