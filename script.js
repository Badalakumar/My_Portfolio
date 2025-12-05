function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display === "block" ? "none" : "block";
}

// Contact form alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});



function send() {
    let contactForm = document.getElementById("contactForm");
    contactForm.reset();
    alert("Message sent successfully!");

}