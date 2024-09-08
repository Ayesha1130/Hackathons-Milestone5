"use strict";
const form = document.getElementById('resume-form');
const resumeContent = document.getElementById('resume-content');
const downloadPdfButton = document.getElementById('download-pdf');
const resumeLink = document.getElementById('resume-link');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const workExperience = document.getElementById('work-experience').value;
    const skills = document.getElementById('skills').value;
    if (!name || !email || !phone || !education || !workExperience || !skills) {
        alert("Please fill out all fields.");
        return;
    }
    const resumeHTML = `
        <h3 contenteditable="true">Personal Information</h3>
        <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>
        <p><strong>Email:</strong> <a href="mailto:${email}" contenteditable="true">${email}</a></p>
        <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>

        <h3 contenteditable="true">Education</h3>
        <p contenteditable="true">${education}</p>

        <h3 contenteditable="true">Work Experience</h3>
        <p contenteditable="true">${workExperience}</p>

        <h3 contenteditable="true">Skills</h3>
        <ul>
            ${skills.split(',').map(skill => `<li contenteditable="true">${skill.trim()}</li>`).join('')}
        </ul>
    `;
    resumeContent.innerHTML = resumeHTML;
    const uniqueUrl = `https://${username}.vercel.app/resume`;
    resumeLink.innerHTML = `Share your resume: <a href="${uniqueUrl}" target="_blank">${uniqueUrl}</a>`;
});
downloadPdfButton.addEventListener('click', () => {
    if (typeof html2pdf === 'undefined') {
        alert('Error: html2pdf library is not loaded.');
        return;
    }
    const resumeOptions = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(resumeContent).set(resumeOptions).save();
});
