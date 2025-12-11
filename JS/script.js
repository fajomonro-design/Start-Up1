document.addEventListener('DOMContentLoaded', function() {
    
    var yearSpan = document.querySelector('#year');
    var burger = document.getElementById('burger-menu');
    var nav = document.getElementById('nav-links');
    var form = document.getElementById('contact-form');
    
    var slideContainer = document.getElementById('carousel-slide');
    var titleEl = document.getElementById('slide-title');
    var descEl = document.getElementById('slide-desc');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    
    var currentIndex = 0;
    
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

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    function afficherSlide(index) {
        if (!slideContainer) return;
        
        var slide = slidesData[index];
        slideContainer.style.backgroundImage = 'url(' + slide.image + ')';
        
        if (titleEl) titleEl.textContent = slide.title;
        if (descEl) descEl.textContent = slide.desc;
    }

    function slideSuivante() {
        currentIndex = (currentIndex + 1) % slidesData.length;
        afficherSlide(currentIndex);
    }

    function slidePrecedente() {
        currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
        afficherSlide(currentIndex);
    }

    if (prevBtn && nextBtn) {
        afficherSlide(currentIndex);
        
        nextBtn.addEventListener('click', function() {
            slideSuivante();
        });

        prevBtn.addEventListener('click', function() {
            slidePrecedente();
        });
        
        setInterval(function() {
            slideSuivante();
        }, 5000);
    }

    if (burger) {
        burger.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var successDiv = document.getElementById('form-success');
            var nameInput = document.getElementById('name');
            var pseudoDisplay = document.getElementById('user-pseudo-display');
            
            if (successDiv && nameInput) {
                pseudoDisplay.textContent = nameInput.value;
                successDiv.style.display = 'block';
                form.reset();
            }
        });
    }
});