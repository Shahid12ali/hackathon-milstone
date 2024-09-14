// Get reference to the form and display area
var form = document.getElementById('user-info');
var resumeDisplay = document.getElementById('dynamic-resume');
var shareableLink = document.getElementById('shareable-link');
var shareableLinks = document.getElementById('shareable-links');
var downloadButton = document.getElementById('download-button');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect User Input
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // save data in local storage with the username key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Generate Resume
    var generateResume = "\n    <h1><b>Editable Resume</b></h1>\n    <h2>Personal Information</h2>\n    <p><b>Name</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n    \n    <h2>Education</h2>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    \n     <h2>Experience</h2>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    \n     <h2>Skills</h2>\n    <p contenteditable=\"true\">").concat(skills, "</p>");
    // Display Generated Resume
    resumeDisplay.innerHTML = generateResume;
    // Generate a Shareable URL with the user name only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLink.style.display = 'block';
    shareableLinks.href = shareableURL;
    shareableLinks.textContent = shareableURL;
});
// PDF Download
downloadButton.addEventListener('click', function () {
    window.print();
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
