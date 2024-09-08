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
    if (!username || !name || !email || !phone || !education || !workExperience || !skills) {
        alert("Please fill out all fields.");
        return;
    }
    const resumeHTML = `
        <div>
            <h2>Personal Information</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>

            <h2>Education</h2>
            <p>${education}</p>

            <h2>Work Experience</h2>
            <p>${workExperience}</p>

            <h2>Skills</h2>
            <ul>
                ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
            </ul>
        </div>
    `;
    resumeContent.innerHTML = resumeHTML;
    resumeContent.classList.remove('hidden');
    const uniqueUrl = `https://example.com/resume/${username}`;
    resumeLink.innerHTML = `Share your resume: <a href="${uniqueUrl}" target="_blank">${uniqueUrl}</a>`;
    resumeLink.classList.remove('hidden');
    downloadPdfButton.classList.remove('hidden');
});
downloadPdfButton.addEventListener('click', () => {
    if (typeof html2pdf === 'undefined') {
        alert('Error: html2pdf library is not loaded.');
        return;
    }
    const resumeOptions = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(resumeContent).set(resumeOptions).save();
});
