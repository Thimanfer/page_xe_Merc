// Cuộn mượt cho anchor
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Hiệu ứng xuất hiện khi cuộn
const revealEls = document.querySelectorAll('.about, .gallery, .specs, .pricing, .contact');
function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) {
      el.style.opacity = 1;
      el.style.transform = 'none';
      el.style.transition = 'all 1s cubic-bezier(.4,0,.2,1)';
    } else {
      el.style.opacity = 0;
      el.style.transform = 'translateY(60px)';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Highlight menu khi cuộn
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 120;
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
      const id = sec.getAttribute('id');
      const activeLink = document.querySelector('.nav a[href="#' + id + '"]');
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// Hiệu ứng gallery hover (random xoay nhẹ)
document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = `scale(1.07) rotate(${(Math.random()-0.5)*4}deg)`;
    img.style.boxShadow = '0 12px 40px #e7c87377, 0 2px 16px #000a';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = '';
    img.style.boxShadow = '';
  });
});

// Hiệu ứng nút bấm
const btns = document.querySelectorAll('.btn-primary');
btns.forEach(btn => {
  btn.addEventListener('mousedown', () => btn.style.transform = 'scale(0.96)');
  btn.addEventListener('mouseup', () => btn.style.transform = '');
  btn.addEventListener('mouseleave', () => btn.style.transform = '');
});

// Ngăn reload form contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ liên hệ sớm nhất.');
    contactForm.reset();
  });
}

// Nút lên đầu trang
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
    backToTop.style.opacity = 1;
  } else {
    backToTop.style.opacity = 0;
    setTimeout(()=>{backToTop.style.display = 'none';}, 300);
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Reveal animation cho các section
const revealSections = document.querySelectorAll('.about, .why, .gallery, .specs, .pricing, .reviews, .contact');
function revealOnScroll2() {
  const trigger = window.innerHeight * 0.85;
  revealSections.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) {
      el.style.opacity = 1;
      el.style.transform = 'none';
      el.style.transition = 'all 1s cubic-bezier(.4,0,.2,1)';
    } else {
      el.style.opacity = 0;
      el.style.transform = 'translateY(60px)';
    }
  });
}
window.addEventListener('scroll', revealOnScroll2);
window.addEventListener('load', revealOnScroll2);

// Hiệu ứng hover cho why-card và review-card
[...document.querySelectorAll('.why-card, .review-card')].forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px) scale(1.04)';
    card.style.boxShadow = '0 12px 48px #e7c87377, 0 2px 16px #bfa14a33';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});

// Lightbox cho gallery
const galleryImgs = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');
galleryImgs.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    document.body.style.overflow = 'hidden';
  });
});
closeLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
  document.body.style.overflow = '';
});
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }
});

// Hiệu ứng xuất hiện từng card Why/Review
function revealCardsWithDelay(selector) {
  const cards = document.querySelectorAll(selector);
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(60px)';
    setTimeout(() => {
      card.style.transition = 'all 0.8s cubic-bezier(.4,0,.2,1)';
      card.style.opacity = 1;
      card.style.transform = 'none';
    }, 200 + i * 180);
  });
}
window.addEventListener('load', () => {
  revealCardsWithDelay('.why-card');
  revealCardsWithDelay('.review-card');
});

// Hover icon rung nhẹ
[...document.querySelectorAll('.why-icon svg, .section-icon svg')].forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transition = 'transform 0.2s';
    icon.style.transform = 'scale(1.15) rotate(-8deg)';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = '';
  });
});

// Nút lên đầu trang glow khi hover
backToTop.addEventListener('mouseenter', () => {
  backToTop.style.boxShadow = '0 0 24px 8px #e7c873cc, 0 4px 24px #bfa14a55';
});
backToTop.addEventListener('mouseleave', () => {
  backToTop.style.boxShadow = '0 4px 24px #bfa14a55';
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobileNav');
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  mobileNav.classList.toggle('open');
});
document.addEventListener('click', (e) => {
  if (mobileNav.classList.contains('open') && !mobileNav.contains(e.target) && e.target !== menuToggle) {
    mobileNav.classList.remove('open');
  }
});
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
});
