// Get reference to the form and display area
const form = document.getElementById('user-info') as HTMLFormElement;
const resumeDisplay = document.getElementById('dynamic-resume') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

 // Collect User Input
 const name = (document.getElementById('name') as HTMLInputElement).value
 const email = (document.getElementById('email') as HTMLInputElement).value
 const phone = (document.getElementById('phone') as HTMLInputElement).value
 const education = (document.getElementById('education') as HTMLInputElement).value
 const experience = (document.getElementById('experience') as HTMLInputElement).value
 const skills = (document.getElementById('skills') as HTMLInputElement).value

 // Generate Resume
 const generateResume = `
    <h1><b>Resume</b></h1>
    <h2>Personal Information</h2>
    <p><b>Name</b>${name}</p>
    <p><b>Email</b>${email}</p>
    <p><b>Phone</b>${phone}</p>
    
    <h2>Education</h2>
    <p>${education}</p>
    
     <h2>Experience</h2>
    <p>${experience}</p>
    
     <h2>Skills</h2>
    <p>${skills}</p>`;


    // Display Generated Resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = generateResume;
    } else {
        console.error("The Resume Display Element Is Missing.");
    }
});