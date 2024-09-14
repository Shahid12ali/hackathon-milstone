// Get reference to the form and display area
const form = document.getElementById('user-info') as HTMLFormElement;
const resumeDisplay = document.getElementById('dynamic-resume') as HTMLDivElement;
const shareableLink = document.getElementById('shareable-link') as HTMLDivElement;
const shareableLinks = document.getElementById('shareable-links') as HTMLAnchorElement;
const downloadButton = document.getElementById('download-button') as HTMLButtonElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

 // Collect User Input
 const username = (document.getElementById('username') as HTMLInputElement).value;
 const name = (document.getElementById('name') as HTMLInputElement).value
 const email = (document.getElementById('email') as HTMLInputElement).value
 const phone = (document.getElementById('phone') as HTMLInputElement).value
 const education = (document.getElementById('education') as HTMLInputElement).value
 const experience = (document.getElementById('experience') as HTMLInputElement).value
 const skills = (document.getElementById('skills') as HTMLInputElement).value

 // save data in local storage with the username key
 const resumeData = {
    name,
    email,
    phone,
    education,
    experience,
    skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));

 // Generate Resume
 const generateResume = `
    <h1><b>Editable Resume</b></h1>
    <h2>Personal Information</h2>
    <p><b>Name</b><span contenteditable="true">${name}</span></p>
    <p><b>Email</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone</b><span contenteditable="true">${phone}</span></p>
    
    <h2>Education</h2>
    <p contenteditable="true">${education}</p>
    
     <h2>Experience</h2>
    <p contenteditable="true">${experience}</p>
    
     <h2>Skills</h2>
    <p contenteditable="true">${skills}</p>`;




    // Display Generated Resume
    resumeDisplay.innerHTML = generateResume

    // Generate a Shareable URL with the user name only
    const shareableURL =
    `${window.location.origin}?username=${encodeURIComponent(username)}`;

    // Display the shareable link
    shareableLink.style.display = 'block';
    shareableLinks.href = shareableURL;
    shareableLinks.textContent = shareableURL;
});

// PDF Download
downloadButton.addEventListener('click', () => {
window.print();
});

// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
    const resumeData = JSON.parse(savedResumeData);
    (document.getElementById('username') as HTMLInputElement).value =
   username;
   (document.getElementById('name') as HTMLInputElement).value =
   resumeData.name;
    (document.getElementById('email') as HTMLInputElement).value =
   resumeData.email;
    (document.getElementById('phone') as HTMLInputElement).value =
   resumeData.phone;
    (document.getElementById('education') as HTMLTextAreaElement).value =
   resumeData.education;
    (document.getElementById('experience') as HTMLTextAreaElement).value
   = resumeData.experience;
    (document.getElementById('skills') as HTMLTextAreaElement).value =
   resumeData.skills;
    }
    }
   });