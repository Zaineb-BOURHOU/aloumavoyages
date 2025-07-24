
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
