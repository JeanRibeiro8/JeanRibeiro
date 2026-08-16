   // Simple tailwind script already included via CDN
        // Add smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                if (this.getAttribute('href') !== '#') {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });


//FILTER

    const filterSelect = document.getElementById('projectFilter');
    const projectCards = document.querySelectorAll('.project-card');

    filterSelect.addEventListener('change', function () {
        const selected = this.value;

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (selected === 'all' || category === selected) {
                card.style.display = 'block';
            
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transition = 'opacity 0.3s ease';
                }, 50);
            } else {
                card.style.display = 'none';
            }
        });
    });
