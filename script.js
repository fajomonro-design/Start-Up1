document.addEventListener('DOMContentLoaded', () => {
    
    
    const yearSpan = document.querySelector('#year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    
    const slidesData = [
        {
            title: "Conception IA",
            desc: "L'intelligence artificielle structure votre projet.",
            image: "assets/slide1.png" 
        },
        {
            title: "Résultat Desktop",
            desc: "Un site web moderne généré instantanément.",
            image: "assets/slide2.png"
        },
        {
            title: "100% Mobile",
            desc: "Une version smartphone parfaitement optimisée.",
            image: "assets/slide3.png"
        }
    ];

    const slideContainer = document.getElementById('carousel-slide');
    const titleEl = document.getElementById('slide-title');
    const descEl = document.getElementById('slide-desc');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showSlide(index) {
        if (!slideContainer) return;
        const slide = slidesData[index];
        slideContainer.style.backgroundImage = `url('${slide.image}')`;
        if(titleEl) titleEl.textContent = slide.title;
        if(descEl) descEl.textContent = slide.desc;
    }

    if (prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slidesData.length;
            showSlide(currentIndex);
        });
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
            showSlide(currentIndex);
        });
        showSlide(currentIndex);
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slidesData.length;
            showSlide(currentIndex);
        }, 5000);
    }

    
    const burger = document.getElementById('burger-menu');
    const nav = document.getElementById('nav-links');
    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    
    const rickBtn = document.getElementById('rickroll-btn');
    const modal = document.getElementById('video-modal');
    const closeBtn = document.getElementById('close-modal');
    const iframe = document.getElementById('rick-video');
    
    
    const videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&showinfo=0";

    if (rickBtn && modal) {
        rickBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            
            iframe.src = videoURL;
            
            
            modal.style.display = 'flex';
        });

        const closeModal = () => {
            modal.style.display = 'none';
            iframe.src = ""; 
        };

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const successDiv = document.getElementById('form-success');
            const nameInput = document.getElementById('name');
            if(successDiv) {
                document.getElementById('user-pseudo-display').textContent = nameInput.value;
                successDiv.style.display = 'block';
                form.reset();
            }
        });
    }
});