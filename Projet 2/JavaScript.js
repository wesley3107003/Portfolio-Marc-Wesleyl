document.addEventListener('DOMContentLoaded', () => {
    // 1. Défilement fluide (Smooth Scrolling)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Empêche le comportement de saut par défaut
            e.preventDefault();

            // Cible la section par son ID
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Exemple de validation de formulaire (très simple)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Dans une application réelle, vous enverriez les données à un serveur ici (e.g., via fetch)
            
            // Si la validation côté client est réussie (les champs required font déjà une partie du travail)
            alert('Message envoyé ! Merci de votre contact.');
            
            // Réinitialiser le formulaire
            contactForm.reset();
        });
    }

    // Ajoutez ici tout autre JavaScript nécessaire (ex: menu mobile, animations)
});