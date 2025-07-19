import { useEffect, useState } from 'react';

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const isMobile = window.innerWidth <= 767; 

    const observerOptions = {
      threshold: isMobile ? 0.2 : 0.6,
    };

    const sections = document.querySelectorAll('[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return activeSection;
};

export default useActiveSection;
