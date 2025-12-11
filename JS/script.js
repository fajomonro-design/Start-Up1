// On attend que toute la page HTML soit chargée avant de lancer le script
document.addEventListener('DOMContentLoaded', function() {
    
    // --- SÉLECTION DES ÉLÉMENTS HTML ---
    var yearSpan = document.querySelector('#year');
    var burger = document.getElementById('burger-menu');
    var nav = document.getElementById('nav-links');
    var form = document.getElementById('contact-form');
    
    // Éléments du Carrousel
    var slideContainer = document.getElementById('carousel-slide');
    var titleEl = document.getElementById('slide-title');
    var descEl = document.getElementById('slide-desc');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    
    var currentIndex = 0; // Index de la diapositive actuelle
    
    // --- DONNÉES DU CARROUSEL ---
    // Tableau contenant les infos de chaque slide (Titre, Description, Image)
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

    // Mise à jour automatique de l'année dans le footer
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- FONCTION : AFFICHER UNE SLIDE ---
    function afficherSlide(index) {
        if (!slideContainer) return; // Sécurité si le carrousel n'existe pas sur la page
        
        var slide = slidesData[index];
        // Change l'image de fond et le texte
        slideContainer.style.backgroundImage = 'url(' + slide.image + ')';
        
        if (titleEl) titleEl.textContent = slide.title;
        if (descEl) descEl.textContent = slide.desc;
    }

    // --- NAVIGATION CARROUSEL ---
    function slideSuivante() {
        currentIndex = (currentIndex + 1) % slidesData.length; // Boucle au début à la fin
        afficherSlide(currentIndex);
    }

    function slidePrecedente() {
        currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length; // Boucle à la fin si on recule au début
        afficherSlide(currentIndex);
    }

    // Active le carrousel uniquement si les boutons existent (Page Accueil)
    if (prevBtn && nextBtn) {
        afficherSlide(currentIndex); // Affiche la première image au chargement
        
        nextBtn.addEventListener('click', function() {
            slideSuivante();
        });

        prevBtn.addEventListener('click', function() {
            slidePrecedente();
        });
        
        // Change d'image automatiquement toutes les 5 secondes
        setInterval(function() {
            slideSuivante();
        }, 5000);
    }

    // --- MENU BURGER (Mobile) ---
    if (burger) {
        burger.addEventListener('click', function() {
            nav.classList.toggle('active'); // Ajoute ou enlève la classe CSS pour afficher le menu
        });
    }

    // --- GESTION DU FORMULAIRE DE CONTACT ---
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Empêche le rechargement de la page
            
            var successDiv = document.getElementById('form-success');
            var nameInput = document.getElementById('name');
            var pseudoDisplay = document.getElementById('user-pseudo-display');
            
            // Simulation d'envoi réussi
            if (successDiv && nameInput) {
                pseudoDisplay.textContent = nameInput.value;
                successDiv.style.display = 'block'; // Affiche le message vert
                form.reset(); // Vide les champs
            }
        });
    }
});
