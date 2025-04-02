// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in-section');
    observer.observe(section);
});

// Parallax effect for background images
window.addEventListener('scroll', () => {
    const parallaxImages = document.querySelectorAll('.parallax');
    parallaxImages.forEach(img => {
        const speed = img.dataset.speed || 0.5;
        const yPos = -(window.pageYOffset * speed);
        img.style.transform = `translateY(${yPos}px)`;
    });
});

// Add hover effect to skill cards
document.querySelectorAll('.skill-container').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('skill-hover');
    });
    
    card.addEventListener('mouseleave', () => {
        card.classList.remove('skill-hover');
    });
});

// Add mouse move effect to intro section
const introSection = document.querySelector('.intro');
if (introSection) {
    introSection.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = introSection.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        const introImg = introSection.querySelector('.intro-img');
        if (introImg) {
            introImg.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        }
    });
}

// Add hover effect to element icons
document.querySelectorAll('.pyro, .electro, .hydro').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Add hover effect to strong text
document.querySelectorAll('strong').forEach(text => {
    text.addEventListener('mouseenter', () => {
        text.style.color = '#2a3313';
    });
    
    text.addEventListener('mouseleave', () => {
        text.style.color = '#465420';
    });
});

// Add hover effect to section titles
document.querySelectorAll('.skills-h1, .history-h2').forEach(title => {
    title.addEventListener('mouseenter', () => {
        title.style.transform = 'translateX(5px)';
    });
    
    title.addEventListener('mouseleave', () => {
        title.style.transform = 'translateX(0)';
    });
});

// Add hover effect to skills list items
document.querySelectorAll('.skills-ul li').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-2px)';
        item.style.background = 'rgba(70, 84, 32, 0.2)';
        item.style.boxShadow = '0 5px 15px rgba(70, 84, 32, 0.1)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
        item.style.background = 'rgba(70, 84, 32, 0.1)';
        item.style.boxShadow = 'none';
    });
});

// Add hover effect to skill descriptions
document.querySelectorAll('.skill-p').forEach(desc => {
    desc.addEventListener('mouseenter', () => {
        desc.style.transform = 'translateX(5px)';
    });
    
    desc.addEventListener('mouseleave', () => {
        desc.style.transform = 'translateX(0)';
    });
});

// Add hover effect to element spans
document.querySelectorAll('.pyro-span, .electro-span, .hydro-span').forEach(span => {
    span.addEventListener('mouseenter', () => {
        span.style.transform = 'translateX(5px)';
        span.style.color = '#2a3313';
    });
    
    span.addEventListener('mouseleave', () => {
        span.style.transform = 'translateX(0)';
        span.style.color = '#465420';
    });
});

// Add hover effect to profile and history text
document.querySelectorAll('.profile-p, .history-p, .history-p-alt').forEach(text => {
    text.addEventListener('mouseenter', () => {
        text.style.transform = 'translateX(5px)';
    });
    
    text.addEventListener('mouseleave', () => {
        text.style.transform = 'translateX(0)';
    });
});

// Add hover effect to main title and subtitle
const mainTitle = document.querySelector('.main-title');
const mainSubtitle = document.querySelector('.main-subtitle');

if (mainTitle) {
    mainTitle.addEventListener('mouseenter', () => {
        mainTitle.style.transform = 'scale(1.05)';
    });
    
    mainTitle.addEventListener('mouseleave', () => {
        mainTitle.style.transform = 'scale(1)';
    });
}

if (mainSubtitle) {
    mainSubtitle.addEventListener('mouseenter', () => {
        mainSubtitle.style.transform = 'translateX(5px)';
    });
    
    mainSubtitle.addEventListener('mouseleave', () => {
        mainSubtitle.style.transform = 'translateX(0)';
    });
} 