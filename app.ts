function generateResume(): void {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const location = (document.getElementById("location") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const workExperience = (document.getElementById("workExperience") as HTMLInputElement).value;
    const projects = (document.getElementById("projects") as HTMLInputElement).value;
    const links = (document.getElementById("links") as HTMLInputElement).value;
    const photoInput = document.getElementById("photo") as HTMLInputElement;

    const photoURL = photoInput.files && photoInput.files[0] 
        ? URL.createObjectURL(photoInput.files[0]) 
        : '';

    (document.getElementById("preview-photo") as HTMLImageElement).src = photoURL;
    (document.getElementById("preview-name") as HTMLSpanElement).innerText = name;
    (document.getElementById("preview-jobTitle") as HTMLSpanElement).innerText = jobTitle;
    (document.getElementById("preview-email") as HTMLSpanElement).innerText = "Email: " + email;
    (document.getElementById("preview-phone") as HTMLSpanElement).innerText = "Phone: " + phone;
    (document.getElementById("preview-location") as HTMLSpanElement).innerText = "Location: " + location;
    (document.getElementById("preview-education") as HTMLSpanElement).innerText = education;
    (document.getElementById("preview-workExperience") as HTMLSpanElement).innerText = workExperience;
    (document.getElementById("preview-projects") as HTMLSpanElement).innerText = projects;
    (document.getElementById("preview-links") as HTMLSpanElement).innerText = links;
}

function downloadResume(): void {
    const resumeContent = (document.getElementById("resume-preview") as HTMLElement).innerHTML;
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.html";
    a.click();
    URL.revokeObjectURL(url);
}
