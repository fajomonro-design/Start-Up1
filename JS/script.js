// J'attends que la page soit bien chargée avant de lancer le code
document.addEventListener('DOMContentLoaded', function() {
    
    // --- JE RÉCUPÈRE MES ÉLÉMENTS HTML ---
    var yearSpan = document.querySelector('#year');
    var burger = document.getElementById('burger-menu');
    var nav = document.getElementById('nav-links');
    var form = document.getElementById('contact-form');
    
    // Les éléments pour le carrousel
    var slideContainer = document.getElementById('carousel-slide');
    var titleEl = document.getElementById('slide-title');
    var descEl = document.getElementById('slide-desc');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    
    var currentIndex = 0; // Je commence à la première image (0)
    
    // --- MES DONNÉES ---
    // Un tableau avec toutes les infos de mes slides
    var slidesData = [
        {
            title: "Conception IA",
            desc: "L'intelligence artificielle structure votre projet.",
            image: "https://cdn.prod.website-files.com/62233c592d2a1e009d42f46c/67d7ea8233dc0e785948b52c_iStock%202114984318.webp" 
        },
        {
            title: "Résultat Desktop",
            desc: "Un site web moderne généré instantanément.",
            image: "https://www.monbusiness.fr/wp-content/uploads/2025/12/ChatGPT-Image-3-nov.-2025-15_41_56.webp"
        },
        {
            title: "100% Mobile",
            desc: "Une version smartphone parfaitement optimisée.",
            image: "https://f.hellowork.com/blogdumoderateur/2019/11/e-commerce-mobile_opt-1200x799.jpg"
        }
    ];

    // Je mets l'année automatiquement dans le footer
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- FONCTION POUR CHANGER L'IMAGE ---
    function afficherSlide(index) {
        if (!slideContainer) return; // Si y'a pas de carrousel, on arrête
        
        var slide = slidesData[index];
        // Je change l'image de fond et le texte
        slideContainer.style.backgroundImage = 'url(' + slide.image + ')';
        
        if (titleEl) titleEl.textContent = slide.title;
        if (descEl) descEl.textContent = slide.desc;
    }

    // Fonction bouton "Suivant"
    function slideSuivante() {
        // Le modulo % permet de revenir à 0 quand on arrive à la fin du tableau
        currentIndex = (currentIndex + 1) % slidesData.length; 
        afficherSlide(currentIndex);
    }

    // Fonction bouton "Précédent"
    function slidePrecedente() {
        // Petit calcul pour éviter les nombres négatifs et boucler à la fin
        currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length; 
        afficherSlide(currentIndex);
    }

    // --- LANCE LE CARROUSEL ---
    // Je vérifie si les boutons existent (donc si on est sur l'accueil)
    if (prevBtn && nextBtn) {
        afficherSlide(currentIndex); // Affiche la première image
        
        // Quand on clique sur les boutons
        nextBtn.addEventListener('click', function() {
            slideSuivante();
        });

        prevBtn.addEventListener('click', function() {
            slidePrecedente();
        });
        
        // Change d'image tout seul toutes les 5 secondes
        setInterval(function() {
            slideSuivante();
        }, 5000);
    }

    // --- MENU BURGER SUR MOBILE ---
    if (burger) {
        burger.addEventListener('click', function() {
            // J'ajoute ou j'enlève la classe 'active' pour montrer le menu
            nav.classList.toggle('active'); 
        });
    }

    // --- FORMULAIRE DE CONTACT ---
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Ça empêche la page de se recharger
            
            var successDiv = document.getElementById('form-success');
            var nameInput = document.getElementById('name');
            var pseudoDisplay = document.getElementById('user-pseudo-display');
            
            // Je fais semblant que le message est envoyé
            if (successDiv && nameInput) {
                pseudoDisplay.textContent = nameInput.value;
                successDiv.style.display = 'block'; // J'affiche le message de succès
                form.reset(); // Je vide les champs
            }
        });
    }
});
