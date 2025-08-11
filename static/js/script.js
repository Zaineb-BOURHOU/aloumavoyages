// animation et menu hamburger
const menuToggle = document.getElementById("menu-toggle");
const navBar = document.getElementById("nav-bar");

menuToggle.addEventListener("click", () => {
    navBar.classList.toggle("show");
});

document.querySelectorAll(".nav_bar a").forEach(link => {
    link.addEventListener("click", () => {
        navBar.classList.remove("show");
    });
});


// animation sections
AOS.init({
    duration: 1000, // durée de l’animation (en ms)
    once: true      // anime une seule fois
});

        
// envoie de message
function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email_address").value;
    const message = document.getElementById("message").value;            
    const subject = encodeURIComponent("Contact form : " + name);
    const body = encodeURIComponent("Name : " + name + "\nEmail : " + email + "\n\nMessage :\n" + message);
    window.location.href = `mailto:Aloumavoyages1@gmail.com?subject=${subject}&body=${body}`;
}

// envoie : booking
function envoieEmail(event) {
    event.preventDefault(); //empéche l'envoie normal

    const email = document.getElementById("email").value;
    const location = document.getElementById("location").value;
    const activity = document.getElementById("activity").value;
    const tour = document.getElementById("tours").value;
    const date = document.getElementById("date").value;

    const subject = encodeURIComponent("Nouvelle demande de réservation");
    const body = encodeURIComponent(
        `Email : ${email}\nDestination : ${location}\nActivité : ${activity}\nTour : ${tour}\nDate : ${date}`
    );

    const to = "Aloumavoyages1@gmail.com";

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}