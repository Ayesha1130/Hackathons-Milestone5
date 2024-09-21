"use strict";
//GET reference to the html element
const form = document.getElementById("resume-form");
const resumeContent = document.getElementById("resume-content");
const downloadPdfButton = document.getElementById("download-pdf");
const resumeLink = document.getElementById("resume-link");
// Event listener for form submission
form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent default submit 
    // Get form data
    const username = document.getElementById("username")
        .value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const workExperience = document.getElementById("work-experience").value;
    const skills = document.getElementById("skills").value;
    // Validate form data
    if (!name || !email || !phone || !education || !workExperience || !skills) {
        alert("Please fill out all fields.");
        return;
    }
    // Create HTML for the resume
    const resumeHTML = `
    
     <form>
     <fieldset>
     <legend>Shareable Resume</legend>
     <label for="name">Name:</label>
     <input type="text" id="name" value="${name}">
     <label for="email">Email:</label>
     <input type="text" id="email" value="${email}">
     <label for="phone">Phone:</label>
     <input type="text" id="phone" value="${phone}">
     <label for="education">Education:</label>
     <input type="text" id="education" value="${education}">
     <label for="experience">Experience:</label>
     <input type="text" id="work-experience" value="${workExperience}">
     <label for="skills">Skills:</label>
     <input type="text" id="skills" value="${skills}">
     </fieldset>

     </form>    
    
    `;
    resumeContent.innerHTML = resumeHTML;
    const shareablelink = document.getElementById("resume-link");
    shareablelink.addEventListener("click", () => { });
});
const downloadbutton = document.getElementById("download-pdf");
downloadbutton.addEventListener("click", () => {
    window.print();
});
