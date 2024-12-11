document.querySelectorAll('.fancy-title').forEach(title => {
    title.addEventListener('click', function () {
        const details = this.nextElementSibling;
        const icon = this.querySelector('.expand-icon');
        
        if (details) {
            details.style.visibility = 
                details.style.visibility === 'visible' ? 'hidden' : 'visible';
            details.style.opacity = details.style.opacity === '1' ? '0' : '1';
            icon.style.transform = 
                details.style.visibility === 'visible' ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    });
});

const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach(bubble => {
  bubble.addEventListener('mouseenter', () => {
    bubble.style.transform = 'scale(1.2) rotate(5deg)';
  });
  bubble.addEventListener('mouseleave', () => {
    bubble.style.transform = 'scale(1) rotate(0)';
  });
});
