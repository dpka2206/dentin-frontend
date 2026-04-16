import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    const { pathname, hash } = location;
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // Trigger on every location change, including hash
  return null;
};

const servicesData = [
  {
    title: "Dental Scaling & Polishing",
    summary: "Simple, painless, non-surgical procedure for teeth cleaning.",
    description: "It is a simple, painless, non-surgical procedure simply called teeth cleaning in which we remove the (yellow brown deposits) calculus and stains that are present on the tooth surface using an ultrasonic scaler followed by polishing using polishing paste. This treatment process helps in restoring gum health and thus better oral hygiene.",
    image: "/images/service-1.jpg"
  },
  {
    title: "Root Canal Treatment",
    summary: "Treatment to remove inflamed/infected pulp and seal the tooth.",
    description: "It is a treatment recommended to remove the inflamed /infected pulp using local anesthesia, clean and disinfect the root canal, followed by filling & sealing to prevent reinfection of the tooth. RCT treated tooth should be covered with a cap (crown) to protect it from oral environment.",
    image: "/images/service-2.jpg"
  },
  {
    title: "Dental Implants",
    summary: "Best treatment option for replacing missing teeth.",
    description: "It is the best treatment option for replacing the missing teeth. It is a surgical procedure in which a titanium implant is placed in the bone of the missing teeth or damaged tooth that cannot be preserved with RCT. Dental implants acts as an artificial root upon which the dental crown (cap) is placed.",
    image: "/images/service-3.jpg"
  },
  {
    title: "Dental Extractions",
    summary: "Painless removal of severely damaged or infected teeth.",
    description: "Extraction of severely damaged / broken/ decayed /infected tooth is done under local anesthesia which is completely painless. It also includes removal of root pieces, retained milk teeth and extra teeth. Missing permanent teeth (except wisdom teeth) should be replaced to avoid further complications.",
    image: "/images/service-4.webp"
  },
  {
    title: "Wisdom Teeth Complaints",
    summary: "Treatment for impacted wisdom teeth causing pain or damage.",
    description: "Wisdom teeth (last teeth in oral cavity) are most commonly impacted because of lack of space, which results in pain, swelling, infection & food lodgement at that area and also causes damage to adjacent teeth. In such cases removal of wisdom tooth is recommended.",
    image: "/images/service-5.jpg"
  },
  {
    title: "Dental Braces",
    summary: "Orthodontic treatment for irregular or crowded teeth.",
    description: "This treatment is done to correct irregularly placed /crowded /spaced teeth and also to correct bite issues. We provide metal, ceramic & self-ligating braces. Patient has to visit clinic once every month for adjustments.",
    image: "/images/service-6.webp"
  },
  {
    title: "Invisible Aligners",
    summary: "Clear trays to move teeth into alignment without braces.",
    description: "These are clear trays which use gentle pressure to move your teeth into alignment without using braces. Helpful for both teenagers and adults depending on condition of teeth and bone. Proper clinical examination followed by OPG or digital scans are needed to plan treatment.",
    image: "/images/service-7.webp"
  },
  {
    title: "Dental OPG X-Ray",
    summary: "Full mouth digital X-ray for diagnosis and treatment planning.",
    description: "OPG (orthopantomogram) is a full mouth digital X-ray which shows a wide view of all the upper and lower teeth and surrounding structures of bone. Commonly used for diagnosis and treatment planning of orthodontic, implant and extraction cases.",
    image: "/images/service-8.webp"
  },
  {
    title: "Teeth Whitening",
    summary: "Improving the color of teeth using chemical agents.",
    description: "It is a process of improving the color of teeth using chemical agents. It removes both internal and external stains and thus results in brighter and cleaner teeth.",
    image: "/images/service-9.webp"
  },
  {
    title: "Cavity Fillings",
    summary: "Process of removing decay and filling the tooth with materials.",
    description: "It is a process in which a decayed part of the teeth is removed, then fills the teeth with filling materials. Cavities not involving pulp (painless) of the tooth can be treated by fillings. It is better to do a filling in case of small cavities to prevent food lodgment and further damage to teeth.",
    image: "/images/service-10.jpg"
  },
  {
    title: "Lost Tooth Replacement Bridges",
    summary: "Replacing missing teeth using support from adjacent teeth.",
    description: "In case of a missing tooth, it is better to replace as early as possible to avoid drifting of lateral and opposing arch teeth. If a or multiple teeth are missing, with the support of adjacent teeth, missing teeth can be replaced, this is called dental bridge. Recommended if implants are not indicated.",
    image: "/images/service-11.webp"
  },
  {
    title: "Gum Surgeries",
    summary: "Addressing periodontal issues like gum recession and disease.",
    description: "Gum surgeries address various periodontal issues, such as gum recession, gum disease, and tissue regeneration. Procedures range from gum grafts to flap surgery, aiming to restore oral health and aesthetics.",
    image: "/images/service-12.jpg"
  },
  {
    title: "Broken Teeth Management",
    summary: "Managing broken teeth with fillings, veneers, or crowns.",
    description: "Depending on the amount of loss of tooth structure, broken teeth can be managed with composite filling (less than 3mm fracture) veneers or crowns in case of more loss. Broken piece can also be fixed if the lost part is intact.",
    image: "/images/service-13.webp"
  },
  {
    title: "Pediatric Dentistry",
    summary: "Dental treatments specifically for children.",
    description: "It includes all the treatments done in children like dental fillings, pulp therapy if the cavity is too big, extraction, cleft lip and cleft palate surgeries, extraction of teeth present at the time of birth (natal neonatal teeth).",
    image: "/images/service-14.webp"
  },
  {
    title: "Dental Laser Treatment",
    summary: "Using lasers for surgeries, RCT, whitening, and disinfection.",
    description: "Dental lasers are used for soft tissue surgeries, RCT, hypersensitivity, teeth whitening, disinfection and stimulation of soft tissues after surgical procedures.",
    image: "/images/service-15.jpg"
  }
];

/** Hero collage — uses existing service imagery (teeth / smile focused) */
const heroTeethCollage = [
  { src: '/images/service-9.webp', alt: 'Teeth whitening results' },
  { src: '/images/service-1.jpg', alt: 'Dental cleaning and healthy teeth' },
  { src: '/images/service-10.jpg', alt: 'Cavity treatment and fillings' },
  { src: '/images/service-6.webp', alt: 'Orthodontic braces smile' },
  { src: '/images/service-3.jpg', alt: 'Dental implant care' },
  { src: '/images/service-12.jpg', alt: 'Gum health and periodontal care' },
];

const reviewsData = [
  {
    name: 'Amsal Khan',
    stars: 5,
    text: 'Dr. Surya is one of the best doctors I’ve met so far. He was very calm and reassuring, which made me feel comfortable throughout the entire process. I recently had a deep cavity filling, and since it was close to the nerve, I was quite hesitant. But he handled it very smoothly and explained everything step by step.',
    source: 'Google Review',
  },
  {
    name: 'Vihari Gv',
    stars: 4,
    text: 'Dr. Surya is a very reassuring person and helped me feel at ease throughout the process. He performed the procedure smoothly and explained everything clearly. I recently had a wisdom tooth extraction. I wouldn’t say it was completely painless, but it was manageable.',
    source: 'Google Review',
  },
  {
    name: 'Aditya Sayam',
    stars: 5,
    text: 'I visited with a broken tooth due to an injury. Dr. Suryanarayana Sarma advised a root canal and an implant, both of which turned out very well and looked natural. The procedure was smooth and painless. The doctor is very friendly and informative.',
    source: 'Google Review',
  },
  {
    name: 'Ravi Justice',
    stars: 5,
    text: 'I had a great experience at Dentin clinic. The clinic is clean, modern, and very well maintained. The dentists take time to explain the issue clearly and don’t rush into treatment, which builds trust. Highly recommend this place.',
    source: 'Google Review',
  },
  {
    name: 'Rajin',
    stars: 5,
    text: 'I recently visited Dr. Surya for a re-root canal treatment, and I’m very happy with the experience. From the first consultation, everything was explained clearly and they made sure I was comfortable. The procedure was smooth and surprisingly painless.',
    source: 'Google Review',
  },
];

const ReviewsMarquee = () => {
  const totalReviews = [...reviewsData, ...reviewsData];

  return (
    <div className="reviews-marquee-container">
      <div className="reviews-track">
        {totalReviews.map((review, index) => (
          <div key={`${review.name}-${index}`} className="review-card">
            <div>
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`${i < review.stars ? 'fas' : 'far'} fa-star`}></i>
                ))}
              </div>
              <p className="review-text">&ldquo;{review.text}&rdquo;</p>
            </div>
            <div>
              <div className="review-author">
                <div className="author-info">
                  <h4>{review.name}</h4>
                  <span>Patient</span>
                </div>
              </div>
              <div className="google-badge">
                <i className="fab fa-google" style={{ color: '#4285F4' }}></i>
                <span>Verified {review.source}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-contact">
          <span className="top-bar-phone"><i className="fas fa-phone-alt"></i> <strong>+91 95150 84487</strong></span>
          <span className="top-bar-meta"><i className="fas fa-envelope"></i> info@dentinoralexperts.com | Gowlidoddy, Hyderabad</span>
        </div>
        <div className="top-bar-socials">
          <a href="#" className="social-link" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-link" aria-label="Google"><i className="fab fa-google"></i></a>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 992) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-bar-inner">
        <div className="logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <div className="logo-mark">
              <i className="fas fa-tooth"></i>
            </div>
            <span className="logo-text">Dentino <span className="logo-accent">Oral Experts</span></span>
          </Link>
        </div>
        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <div className="nav-cluster" id="primary-navigation">
          <ul className="nav-links">
            <li><Link to="/#home" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/#about" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/#doctors" onClick={closeMenu}>Doctors</Link></li>
            <li><Link to="/#testimonials" onClick={closeMenu}>Testimonials</Link></li>
            <li><Link to="/#contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
          <Link to="/#contact" className="btn btn-primary navbar-book-btn" onClick={closeMenu}>Book Appointment</Link>
        </div>
      </div>
      {menuOpen ? (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      ) : null}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-content">
            <span className="tag">Top Notch Dental Care, Just for You</span>
            <h1 className="hero-title">
              Your Best <span className="text-blue font-bold hero-title-accent">Dental Experience</span> Awaits
            </h1>
            <p className="hero-lead">
              Advanced pain-free treatments with cutting-edge technology. We make dental visits comfortable and completely anxiety-free.
            </p>
            <div className="hero-cta-row">
              <Link to="/#services" className="btn btn-primary hero-cta-btn">Explore Our Services</Link>
              <button type="button" className="btn btn-outline hero-cta-btn"><i className="fas fa-play-circle"></i> Watch Video</button>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-image-blob" aria-hidden="true"></div>
            <div
              className="hero-teeth-collage"
              role="img"
              aria-label="Collage of healthy smiles and dental treatments"
            >
              {heroTeethCollage.map((item, index) => (
                <div key={item.src} className={`hero-collage-cell hero-collage-cell--${index + 1}`}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-booking-strip">
          <div className="hero-form-field">
            <label htmlFor="hero-name">Name</label>
            <input id="hero-name" type="text" placeholder="Your Name" />
          </div>
          <div className="hero-form-field">
            <label htmlFor="hero-phone">Phone Number</label>
            <input id="hero-phone" type="text" placeholder="Your Phone" />
          </div>
          <div className="hero-form-field">
            <label htmlFor="hero-date">Preferred Date</label>
            <input id="hero-date" type="date" />
          </div>
          <div className="hero-form-field">
            <label htmlFor="hero-time">Preferred Time</label>
            <input id="hero-time" type="time" />
          </div>
          <button type="button" className="btn btn-primary hero-booking-submit">Book Appointment</button>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section id="about" className="section-padding about-us-section">
      <div className="container">
        <div className="about-layout">
          <div className="about-media">
            <div className="about-photo-ring">
              <img src="/images/doctor.png" alt="Doctor" className="about-photo" />
            </div>
            <div className="about-badge" aria-hidden="true">
              <i className="fas fa-award"></i>
            </div>
          </div>
          <div className="about-text">
            <span className="about-kicker">ABOUT US</span>
            <h2 className="about-heading">15 Years of Expertise in Dental Care</h2>
            <p className="about-lead">
              Dentino Oral Experts is a trusted dental clinic known for pain-free, advanced treatments. Our team of experienced doctors uses the latest technology to give you the best dental care — all in a calm and comfortable setting.
            </p>
            <ul className="about-check-list">
              <li>
                <i className="fas fa-check-circle about-check-icon"></i>
                Advanced Dental Services You Can Trust
              </li>
              <li>
                <i className="fas fa-check-circle about-check-icon"></i>
                Experienced Doctors Dedicated to You
              </li>
              <li>
                <i className="fas fa-check-circle about-check-icon"></i>
                Modern Equipment, Gentle Treatment
              </li>
            </ul>
            <button type="button" className="btn btn-primary about-cta">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Ticker = () => {
  const items = ['General Dentistry', 'Teeth Whitening', 'Dental Implant', 'Dental Sealant', 'Root Canal', 'Dental Braces'];
  return (
    <div className="ticker-wrapper" style={{ margin: '40px 0' }}>
      <div className="ticker-content">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={index} className="ticker-item">
            <i className="fas fa-tooth" style={{ fontSize: '1.2rem' }}></i> {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  const featuredServices = servicesData.slice(0, 3);
  return (
    <section id="services" className="section-padding" style={{ backgroundColor: 'var(--light-bg)' }}>
      <div className="container">
        <div className="section-header-row">
          <div className="section-header-text">
            <span className="section-kicker">OUR SERVICES</span>
            <h2 className="section-heading">A Wide Range of Services for Your Best Smile</h2>
          </div>
          <Link to="/services" className="btn btn-primary section-header-cta">Explore All Services</Link>
        </div>
        <div className="services-grid-home">
          {featuredServices.map((service, index) => (
            <div key={index} className="rounded-card" style={{ background: 'white', padding: '25px' }}>
              <img src={service.image} alt={service.title} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '16px', marginBottom: '25px' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '20px' }}>
                <div style={{ background: 'var(--primary-blue)', color: 'white', width: '55px', height: '55px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="fas fa-stethoscope" style={{ fontSize: '1.4rem' }}></i>
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--dark-navy)' }}>{service.title}</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '25px', fontSize: '1rem' }}>{service.summary}</p>
              <Link to="/services" style={{ color: 'var(--primary-blue)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.05rem' }}>Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ color: 'var(--primary-blue)', fontWeight: 700, letterSpacing: '2px', display: 'block', marginBottom: '15px', fontSize: '0.9rem' }}>WHY CHOOSE US</span>
          <h2 style={{ fontSize: '3rem', color: 'var(--dark-navy)', lineHeight: 1.2 }}>Benefits of Our Dental Services: Your Path to a Healthier Smile</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '750px', margin: '25px auto 0', fontSize: '1.1rem' }}>
            Here's why thousands of patients trust Dentino Oral Experts for all their dental needs.
          </p>
        </div>

        <div className="why-choose-us-stats">
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '3.8rem', color: 'var(--primary-blue)', fontWeight: 700 }}>10+</h3>
            <p style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--text-muted)' }}>Years in Practice</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '3.8rem', color: 'var(--primary-blue)', fontWeight: 700 }}>99%</h3>
            <p style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--text-muted)' }}>Patient Satisfaction</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '3.8rem', color: 'var(--primary-blue)', fontWeight: 700 }}>20K+</h3>
            <p style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--text-muted)' }}>Smiles Restored</p>
          </div>
        </div>

        <div className="why-split">
          <div className="why-split-media">
            <img src="/images/patient.png" alt="Happy Patient" className="why-split-img" />
          </div>
          <div className="why-split-text">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '25px', color: 'var(--dark-navy)', lineHeight: 1.2 }}>Personalized Care for Your Unique Smile</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '35px', fontSize: '1.1rem' }}>
              We believe every patient deserves a personalized approach. From the moment you walk in, our team is dedicated to making your experience as comfortable and effective as possible.
            </p>
            <button className="btn btn-primary" style={{ padding: '16px 45px' }}>Book Your Visit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStories = () => {
  return (
    <section id="testimonials" className="section-padding case-stories case-stories-reviews">
      <div className="container case-stories-intro">
        <span className="section-kicker">OUR CASE STORIES</span>
        <h2 className="section-heading case-stories-title">
          Patient Journeys to <span className="text-highlight">Healthier, Happier Smiles</span>
        </h2>
      </div>
      <ReviewsMarquee />
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: 'fa-calendar-alt',
      title: 'Book Your Appointment',
      text: 'Pick a date and time that works for you. We have flexible slots for mornings and evenings.'
    },
    {
      icon: 'fa-user-md',
      title: 'Consultation & Examination',
      text: 'Our doctor will do a full check of your teeth and gums and understand your concern.'
    },
    {
      icon: 'fa-file-invoice',
      title: 'Personalized Treatment Plan',
      text: 'We create a treatment plan just for you — clear steps, honest costs, no surprises.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Ongoing Care & Follow-Up',
      text: 'We stay with you after treatment. Regular follow-ups to make sure you stay healthy.'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ color: 'var(--primary-blue)', fontWeight: 700, letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>HOW IT WORKS</span>
          <h2 style={{ fontSize: '3rem', color: 'var(--dark-navy)' }}>
            The Path to <span style={{ color: 'var(--primary-blue)' }}>Your Perfect Smile</span>
          </h2>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-icon">
                <i className={`fas ${step.icon}`}></i>
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'var(--dark-navy)' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingSection = () => {
  return (
    <section id="contact" className="section-padding booking-section">
      <div className="container">
        <div className="booking-layout">
          <div className="booking-form-column">
            <span style={{ color: 'var(--primary-blue)', fontWeight: 700, letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>BOOK AN APPOINTMENT</span>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--dark-navy)', marginBottom: '20px', lineHeight: 1.2 }}>Effortless Online Booking for Your Dental Visit</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.1rem' }}>
              Booking is quick and easy. Pick your doctor, choose a slot, and we'll confirm your visit right away. No waiting, no confusion.
            </p>

            <form className="booking-form-grid">
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>Your Name *</label>
                <input type="text" placeholder="Dr. John Doe" style={{ width: '100%', padding: '14px', border: '1px solid #eef2f6', borderRadius: '12px', background: '#fcfdfe' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>Phone Number *</label>
                <input type="text" placeholder="+91 95150 84487" style={{ width: '100%', padding: '14px', border: '1px solid #eef2f6', borderRadius: '12px', background: '#fcfdfe' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>Doctor</label>
                <select style={{ width: '100%', padding: '14px', border: '1px solid #eef2f6', borderRadius: '12px', background: '#fcfdfe' }}>
                  <option>Dr. Suryanarayan Sharma</option>
                  <option>Dr. Ananya Roy</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>Preferred Date *</label>
                <input type="date" style={{ width: '100%', padding: '14px', border: '1px solid #eef2f6', borderRadius: '12px', background: '#fcfdfe' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>Day of Appointment</label>
                <select style={{ width: '100%', padding: '14px', border: '1px solid #eef2f6', borderRadius: '12px', background: '#fcfdfe' }}>
                  <option>Select Day</option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '10px' }}>Preferred Time *</label>
                <input type="time" style={{ width: '100%', padding: '14px', border: '1px solid #eef2f6', borderRadius: '12px', background: '#fcfdfe' }} />
              </div>
              <div className="booking-form-full">
                <button type="submit" className="btn btn-primary booking-form-submit">Book Appointment</button>
              </div>
            </form>
          </div>

          <div className="booking-info-card">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Dentino Oral Experts</h3>
            <p style={{ opacity: 0.8, marginBottom: '30px', fontSize: '0.95rem' }}>Opp. Jayabheri The Nirvana & Art Boutique Hotel, Gowlidoddy, Hyderabad, Telangana – 500075</p>

            <h4 style={{ fontSize: '1.3rem', marginBottom: '20px' }}>Clinic Timings</h4>
            <div style={{ marginBottom: '40px' }}>
              <div className="timing-row">
                <span>Monday – Sunday</span>
                <span>09:00 AM – 09:00 PM</span>
              </div>
            </div>

            <div className="emergency-bar">
              <div style={{ background: 'white', color: 'var(--primary-blue)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '3px' }}>24/7 Emergency</p>
                <h4 style={{ fontSize: '1.4rem' }}>+91 95150 84487</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MeetTheTeam = () => {
  const doctors = [
    {
      name: 'Dr. Suryanarayan Sharma',
      title: 'MDS – Chief Dental Surgeon',
      image: '/images/doctor.png',
      featured: true
    },
    {
      name: 'Dr. Ananya Roy',
      title: 'General Dentist',
      image: '/images/doctor-ananya.png',
      featured: false
    },
    {
      name: 'Dr. Sidharth Kapoor',
      title: 'Orthodontist',
      image: '/images/doctor-sidharth.png',
      featured: false
    }
  ];

  return (
    <section id="doctors" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ color: 'var(--primary-blue)', fontWeight: 700, letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>OUR TEAM</span>
          <h2 style={{ fontSize: '3rem', color: 'var(--primary-blue)', fontWeight: 700 }}>Meet Our Expert Dental Specialists</h2>
        </div>

        <div className="doctors-grid">
          {doctors.map((doc, index) => (
            <div key={index} className={`doctor-card ${doc.featured ? 'featured' : ''}`}>
              <img src={doc.image} alt={doc.name} />
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--dark-navy)', marginBottom: '5px' }}>{doc.name}</h3>
                <p style={{ color: 'var(--primary-blue)', fontWeight: 600, fontSize: '0.9rem' }}>{doc.title}</p>
                <div className="doctor-socials">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default item 2 expanded

  const faqs = [
    {
      q: "Is dental treatment painful?",
      a: "Most treatments are done with modern tools like laser and sonic technology, which helps reduce pain and discomfort."
    },
    {
      q: "How do I know if I need gum treatment?",
      a: "If you have bleeding gums, swelling, or bad breath, it’s better to get it checked early. These are signs of gum issues."
    },
    {
      q: "What is 3D dental scanning?",
      a: "It is a digital scan of your teeth and gums. It replaces messy molds and gives more accurate results for treatments."
    },
    {
      q: "Can I get treatment if implants are not possible?",
      a: "Yes. There are other safe options for tooth replacement based on your condition."
    },
    {
      q: "How long does a dental appointment take?",
      a: "Most basic treatments take 30–60 minutes. Complex procedures may take longer."
    },
    {
      q: "Is teeth cleaning safe?",
      a: "Yes, it is a simple and safe procedure. It helps maintain healthy gums and teeth."
    },
    {
      q: "Do I need regular dental checkups?",
      a: "Yes. Visiting once every 6 months helps prevent major dental problems."
    },
    {
      q: "How do I book an appointment?",
      a: "You can call us or book directly through the website form."
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--dark-navy)', color: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ color: 'var(--primary-blue)', fontWeight: 700, letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>FAQS</span>
          <h2 style={{ fontSize: '3rem', color: 'white' }}>Dental Care FAQ: Your Questions Answered</h2>
        </div>

        <div className="faq-layout">
          <div className="faq-list-column">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div
                  className={`faq-header ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                >
                  {faq.q}
                  <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                </div>
                {activeIndex === index && (
                  <div className="faq-content">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="faq-sidebar">
            <div style={{ background: 'var(--primary-blue)', padding: '40px', borderRadius: '20px', textAlign: 'center' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '1.5rem' }}>
                <i className="fas fa-comments"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>You have different questions?</h3>
              <p style={{ opacity: 0.8, marginBottom: '25px', fontSize: '0.95rem' }}>Our team will answer all your questions. We ensure a quick response.</p>
              <button className="btn" style={{ background: 'white', color: 'var(--primary-blue)', fontWeight: 700 }}>Contact Us</button>
            </div>

            <div style={{ background: 'white', padding: '30px', borderRadius: '20px', border: '2px solid var(--primary-blue)', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ color: 'var(--primary-blue)', fontSize: '2rem' }}>
                <i className="fas fa-phone-volume"></i>
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '2px' }}>Your Smile, Our Priority</p>
                <h4 style={{ color: 'var(--dark-navy)', fontSize: '1.1rem' }}>24/7 Emergency</h4>
                <h4 style={{ color: 'var(--primary-blue)', fontSize: '1.3rem' }}>+91 95150 84487</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: 700, marginBottom: '25px' }}>
              <i className="fas fa-tooth" style={{ color: 'var(--primary-blue)' }}></i>
              <span>Dentino Oral Experts</span>
            </div>
            <p style={{ opacity: 0.7, marginBottom: '30px', fontSize: '0.95rem' }}>
              Your trusted dental clinic for pain-free, advanced dental care. We care for your smile like our own.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '30px', position: 'relative' }}>
              Company
              <span style={{ display: 'block', width: '40px', height: '2px', background: 'var(--primary-blue)', marginTop: '8px' }}></span>
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', opacity: 0.8 }}>
              <li><a href="#">Home</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '30px', position: 'relative' }}>
              Contact Info
              <span style={{ display: 'block', width: '40px', height: '2px', background: 'var(--primary-blue)', marginTop: '8px' }}></span>
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', opacity: 0.8 }}>
              <li style={{ display: 'flex', gap: '12px' }}><i className="fas fa-phone-alt" style={{ color: 'var(--primary-blue)' }}></i> +91 95150 84487</li>
              <li style={{ display: 'flex', gap: '12px' }}><i className="fas fa-envelope" style={{ color: 'var(--primary-blue)' }}></i> info@dentinoralexperts.com</li>
              <li style={{ display: 'flex', gap: '12px' }}><i className="fas fa-map-marker-alt" style={{ color: 'var(--primary-blue)' }}></i> Gowlidoddy, Hyderabad, Telangana – 500075</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '30px', position: 'relative' }}>
              Clinic Hours
              <span style={{ display: 'block', width: '40px', height: '2px', background: 'var(--primary-blue)', marginTop: '8px' }}></span>
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', opacity: 0.8 }}>
              <li>Monday to Sunday</li>
              <li>09:00 AM – 09:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2024 Dentino Oral Experts. All Rights Reserved.</p>
          <p>Designed & Developed by <a href="https://editcomedia.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>editcomedia.com</a></p>
        </div>
      </div>
    </footer>
  );
};

const AllServicesPage = () => {
  return (
    <div>
      <div className="services-page-hero">
        <div className="container">
          <h1 className="services-page-title">All Dental Services</h1>
          <p className="services-page-lead">From routine checkups to advanced restorations, we provide comprehensive dental care for your entire family.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="services-grid all-services-grid">
            {servicesData.map((service, index) => (
              <div key={index} className="rounded-card" style={{ background: 'white', padding: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <img src={service.image} alt={service.title} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '16px', marginBottom: '25px' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ width: '45px', height: '45px', background: 'rgba(30, 95, 216, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)' }}>
                    <i className="fas fa-stethoscope"></i>
                  </div>
                  <h3 style={{ fontSize: '1.4rem' }}>{service.title}</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />
      <Ticker />
      <Footer />
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Ticker />
      <WhyChooseUs />
      <CaseStories />
      <Ticker />
      <HowItWorks />
      <BookingSection />
      <Ticker />
      <MeetTheTeam />
      <Ticker />
      <FAQ />
      <AboutUs />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<AllServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
