function generateResume() {
    const name = document.getElementById("name").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    const education = document.getElementById("education").value;
    const workExperience = document.getElementById("workExperience").value;
    const projects = document.getElementById("projects").value;
    const links = document.getElementById("links").value;
    const photoInput = document.getElementById("photo");
    const photoURL = photoInput.files && photoInput.files[0] ? URL.createObjectURL(photoInput.files[0]) : '';

    document.getElementById("preview-photo").src = photoURL;
    document.getElementById("preview-name").innerText = name;
    document.getElementById("preview-jobTitle").innerText = jobTitle;
    document.getElementById("preview-email").innerText = "Email: " + email;
    document.getElementById("preview-phone").innerText = "Phone: " + phone;
    document.getElementById("preview-location").innerText = "Location: " + location;
    document.getElementById("preview-education").innerText = education;
    document.getElementById("preview-workExperience").innerText = workExperience;
    document.getElementById("preview-projects").innerText = projects;
    document.getElementById("preview-links").innerText = links;
}

function downloadResume() {
    const resumeContent = document.getElementById("resume-preview").innerHTML;
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.html";
    a.click();
    URL.revokeObjectURL(url);
}
