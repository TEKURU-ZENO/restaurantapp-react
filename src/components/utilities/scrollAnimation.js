export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const revealOnScroll = () => {
  const elementsToReveal = document.querySelectorAll('.reveal');
  
  const reveal = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    elementsToReveal.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  };
  
  window.addEventListener('scroll', reveal);
  reveal();
  return () => {
    window.removeEventListener('scroll', reveal);
  };
};