document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // DYNAMIC LOGO TRANSPARENCY (CANVAS KEYING)
  // ==========================================
  const makeLogoTransparent = (imgElement) => {
    if (imgElement.src.startsWith('data:')) return;
    
    const tempImg = new Image();
    tempImg.crossOrigin = "anonymous";
    tempImg.src = imgElement.src;
    tempImg.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = tempImg.naturalWidth;
        canvas.height = tempImg.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(tempImg, 0, 0);
        
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        
        // Key out close-to-white pixels (RGB > 230)
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          if (r > 230 && g > 230 && b > 230) {
            data[i + 3] = 0; // Transparent alpha
          }
        }
        
        ctx.putImageData(imgData, 0, 0);
        imgElement.src = canvas.toDataURL('image/png');
        imgElement.style.mixBlendMode = 'normal'; // Reset blend mode once PNG data-url is set
      } catch (err) {
        console.warn("Canvas logo transparency keying skipped (handled by CSS mix-blend-mode):", err);
      }
    };
  };

  const logoImages = document.querySelectorAll('.brand-logo-img, .footer-logo-img');
  logoImages.forEach(img => {
    if (img.complete) {
      makeLogoTransparent(img);
    } else {
      img.addEventListener('load', () => makeLogoTransparent(img));
    }
  });

  // ==========================================
  // STICKY NAVBAR SHRINK
  // ==========================================
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Update active state in nav links during scroll
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // ==========================================
  // MOBILE NAV MENU TOGGLE
  // ==========================================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
      spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
      spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -7px)' : 'none';
    });

    // Close menu when clicking links
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans.forEach(span => span.style.transform = 'none');
        spans[1].style.opacity = '1';
      });
    });
  }

  // ==========================================
  // VIEWPORT REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal-up');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve once shown to keep performance clean
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null, // viewport
    threshold: 0.15, // trigger when 15% visible
    rootMargin: '0px 0px -50px 0px' // offset trigger point slightly
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });



  // ==========================================
  // HERO 3D MOUSE PARALLAX & SCROLL ZOOM EFFECT
  // ==========================================
  const heroSection = document.getElementById('hero');
  const heroBgImg = document.querySelector('.hero-bg-image-wrapper img');
  const floatCards = document.querySelectorAll('.hero-floating-card');

  if (heroSection) {
    // 1. Mouse Move Parallax Shifts
    heroSection.addEventListener('mousemove', (e) => {
      const { width, height } = heroSection.getBoundingClientRect();
      const offX = (e.clientX / width) - 0.5;
      const offY = (e.clientY / height) - 0.5;

      if (heroBgImg) {
        // Translate opposite to mouse direction
        heroBgImg.style.transform = `scale(1.05) translate(${offX * -20}px, ${offY * -20}px)`;
      }

      floatCards.forEach((card, idx) => {
        // Multi-layered depth speeds (Card 1 moves faster, Card 2 moves slower)
        const speed = (idx + 1) * 30;
        card.style.transform = `translate(${offX * speed}px, ${offY * speed}px)`;
      });
    });

    // Reset offsets when cursor leaves the hero area
    heroSection.addEventListener('mouseleave', () => {
      if (heroBgImg) {
        heroBgImg.style.transform = 'scale(1.05) translate(0px, 0px)';
      }
      floatCards.forEach(card => {
        card.style.transform = 'translate(0px, 0px)';
      });
    });

    // 2. Scroll Zoom Layering
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight && heroBgImg) {
        // Zoom background image slowly on scroll
        heroBgImg.style.transform = `scale(${1.05 + scrollY * 0.00015}) translateY(${scrollY * 0.08}px)`;
      }
    }, { passive: true });
  }

  // ==========================================
  // MAGNETIC BUTTON PHYSICS
  // ==========================================
  const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const bounding = btn.getBoundingClientRect();
      const x = e.clientX - bounding.left - bounding.width / 2;
      const y = e.clientY - bounding.top - bounding.height / 2;
      
      // Magnetic pull (25% translation offsets)
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.03)`;
      if (btn.classList.contains('btn-primary')) {
        btn.style.boxShadow = `0 10px 25px rgba(216, 155, 13, 0.4)`;
      }
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'none';
      if (btn.classList.contains('btn-primary')) {
        btn.style.boxShadow = '';
      }
    });
  });

  // ==========================================
  // INTERACTIVE ASSAM LOCATIONS MAP
  // ==========================================
  const mapMarkers = document.querySelectorAll('.map-marker');
  const locationItems = document.querySelectorAll('.location-item');
  const mapTooltip = document.getElementById('mapTooltip');
  const tooltipTitle = document.getElementById('tooltipTitle');
  const tooltipDetails = document.getElementById('tooltipDetails');

  const updateActiveLocation = (locationId) => {
    // Deactivate all
    mapMarkers.forEach(m => m.classList.remove('active'));
    locationItems.forEach(item => item.classList.remove('active'));

    // Find and activate map marker
    const activeMarker = document.querySelector(`.map-marker[data-loc="${locationId}"]`);
    if (activeMarker) activeMarker.classList.add('active');

    // Find and activate list item
    const activeListItem = document.querySelector(`.location-item[data-loc="${locationId}"]`);
    if (activeListItem) activeListItem.classList.add('active');

    // Update Tooltip Box
    if (activeMarker && mapTooltip) {
      const title = activeMarker.getAttribute('data-title');
      const details = activeMarker.getAttribute('data-details');
      
      tooltipTitle.textContent = title;
      tooltipDetails.textContent = details;
      mapTooltip.classList.add('active');
    }
  };

  locationItems.forEach(item => {
    item.addEventListener('click', () => {
      const locId = item.getAttribute('data-loc');
      updateActiveLocation(locId);
    });
  });

  mapMarkers.forEach(marker => {
    marker.addEventListener('click', () => {
      const locId = marker.getAttribute('data-loc');
      updateActiveLocation(locId);
    });
    marker.addEventListener('mouseenter', () => {
      const locId = marker.getAttribute('data-loc');
      updateActiveLocation(locId);
    });
  });

  // Default active location: Dibrugarh
  updateActiveLocation('dibrugarh');

  // ==========================================
  // TIMELINE ACTIVE STEP ON SCROLL
  // ==========================================
  const timelineNodes = document.querySelectorAll('.timeline-node');
  const lineActive = document.querySelector('.timeline-line-active');
  const processSection = document.getElementById('process');

  if (processSection && timelineNodes.length && lineActive) {
    const handleTimelineScroll = () => {
      const rect = processSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the process section we are
      if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
        const totalHeight = rect.height;
        const currentProgress = (windowHeight / 2 - rect.top) / totalHeight;
        
        // Map progress range to timeline percentage
        const progressPercentage = Math.min(Math.max(currentProgress * 150, 0), 100);
        lineActive.style.width = `${progressPercentage}%`;

        // Activate timeline steps based on width percentage
        const nodesToActivate = Math.ceil((progressPercentage / 100) * timelineNodes.length);
        
        timelineNodes.forEach((node, idx) => {
          if (idx < nodesToActivate) {
            node.classList.add('active');
            if (idx === nodesToActivate - 1) {
              node.classList.add('active-lime');
            } else {
              node.classList.remove('active-lime');
            }
          } else {
            node.classList.remove('active', 'active-lime');
          }
        });
      } else if (rect.top > windowHeight / 2) {
        lineActive.style.width = '0%';
        timelineNodes.forEach(node => node.classList.remove('active', 'active-lime'));
      } else if (rect.bottom < windowHeight / 2) {
        lineActive.style.width = '100%';
        timelineNodes.forEach((node, idx) => {
          node.classList.add('active');
          node.classList.remove('active-lime');
        });
      }
    };
    
    window.addEventListener('scroll', handleTimelineScroll, { passive: true });
  }

  // ==========================================
  // LUXURY TESTIMONIALS SLIDER
  // ==========================================
  const testimonialTrack = document.getElementById('testimonialTrack');
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dot');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  
  let currentSlide = 0;
  const totalSlides = slides.length;

  const updateSlider = (index) => {
    currentSlide = index;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    if (currentSlide >= totalSlides) currentSlide = 0;

    // Shift Track
    if (testimonialTrack) {
      testimonialTrack.style.transform = `translateX(-${currentSlide * 33.333}%)`;
    }

    // Update Dots
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });
  };

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      updateSlider(currentSlide - 1);
    });

    nextBtn.addEventListener('click', () => {
      updateSlider(currentSlide + 1);
    });

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        updateSlider(idx);
      });
    });

    // Auto rotate every 8 seconds
    let sliderInterval = setInterval(() => {
      updateSlider(currentSlide + 1);
    }, 8000);

    // Pause on hover
    const sliderContainer = document.querySelector('.testimonials-slider');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', () => clearInterval(sliderInterval));
      sliderContainer.addEventListener('mouseleave', () => {
        sliderInterval = setInterval(() => {
          updateSlider(currentSlide + 1);
        }, 8000);
      });
    }
  }

  // ==========================================
  // INQUIRY FORM SUCCESS STATE
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Simulate network request
      setTimeout(() => {
        // Create success popup
        const formParent = contactForm.parentElement;
        contactForm.style.display = 'none';
        
        const successMsg = document.createElement('div');
        successMsg.className = 'reveal-up active';
        successMsg.style.textAlign = 'center';
        successMsg.style.padding = '40px 0';
        successMsg.innerHTML = `
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-lime)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:24px;">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <h3 style="font-size:24px; margin-bottom:16px;">Inquiry Received Successfully</h3>
          <p style="color:var(--text-secondary); max-width:400px; margin: 0 auto 32px auto;">
            Thank you for reaching out to Tora Constructions. Ashok Neog or our premium client team will contact you within 24 business hours at +91 96781 17192.
          </p>
          <button class="btn btn-secondary" id="resetFormBtn">Send Another Message</button>
        `;
        formParent.appendChild(successMsg);

        document.getElementById('resetFormBtn').addEventListener('click', () => {
          successMsg.remove();
          contactForm.reset();
          contactForm.style.display = 'block';
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });

      }, 1500);
    });
  }

});
