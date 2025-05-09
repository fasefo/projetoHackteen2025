function sendEmail() {
    const subject = encodeURIComponent(document.getElementById('subject').value);
    const body = encodeURIComponent(document.getElementById('body').value);
    const mailtoLink = `mailto:example@gmail.com?subject=${subject}&body=${body}`
    
    window.location.href = mailtoLink;
}