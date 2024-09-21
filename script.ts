// Define HTML2pdf library
declare const html2pdf: any;

//GET reference to the html element
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeContent = document.getElementById(
  "resume-content"
) as HTMLDivElement;
const downloadPdfButton = document.getElementById(
  "download-pdf"
) as HTMLButtonElement;
const resumeLink = document.getElementById(
  "resume-link"
) as HTMLAnchorElement;
 
// Event listener for form submission
form.addEventListener("submit", (event: Event) => {
  event.preventDefault();// prevent default submit 

  // Get form data
  const username = (document.getElementById("username") as HTMLInputElement)
    .value;
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;
  const workExperience = (
    document.getElementById("work-experience") as HTMLTextAreaElement
  ).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

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

  const shareablelink = document.getElementById(
    "resume-link"
  ) as HTMLAnchorElement;

  shareablelink.addEventListener("click", () => {});
});

const downloadbutton = document.getElementById("download-pdf") as HTMLButtonElement;
downloadbutton.addEventListener("click", () => {
  window.print();
});


