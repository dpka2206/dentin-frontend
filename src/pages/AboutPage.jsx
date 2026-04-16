import { Link } from 'react-router-dom';

const certifications = [
  {
    title: 'BDS – Bachelor of Dental Surgery',
    text: 'Recognized dental qualification focused on diagnosing and treating oral health conditions with a strong clinical foundation.',
  },
  {
    title: 'MDS – Conservative Dentistry & Endodontics',
    text: 'Advanced specialization in root canal treatments, tooth restoration, and saving natural teeth using precise techniques.',
  },
  {
    title: 'Certified in Root Canal Procedures',
    text: 'Hands-on experience in modern endodontic treatments with a focus on accuracy, safety, and patient comfort.',
  },
  {
    title: 'Laser Dentistry Training',
    text: 'Trained in using dental lasers for soft tissue procedures, disinfection, and pain-reduced treatments.',
  },
  {
    title: 'Digital Dentistry & 3D Scanning',
    text: 'Experience with intraoral 3D scanning for accurate diagnosis, treatment planning, and better-fitting restorations.',
  },
  {
    title: 'Clinical Experience in Advanced Procedures',
    text: 'Extensive experience in handling complex dental cases including implants, restorative treatments, and cosmetic procedures.',
  },
];

export default function AboutPage() {
  return (
    <main id="about" className="about-page">
      <div className="about-page-hero">
        <div className="container">
          <p className="about-page-breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>About Us</span>
          </p>
          <h1 className="about-page-title">About Dentino Oral Experts</h1>
          <p className="about-page-lead">
            Care that is simple, comfortable, and built on trust — with clear communication at every step.
          </p>
        </div>
      </div>

      <section className="section-padding about-page-section about-page-section--doctor">
        <div className="container">
          <span className="about-page-kicker">DOCTOR DETAILS</span>
          <div className="about-page-doctor-card">
            <div className="about-page-doctor-media">
              <div className="about-page-doctor-ring">
                <img src="/images/doctor.png" alt="Dr. Suryanarayana Sarma" className="about-page-doctor-img" />
              </div>
            </div>
            <div className="about-page-doctor-body">
              <h2 className="about-page-doctor-name">Dr. Suryanarayana Sarma</h2>
              <p className="about-page-doctor-degrees">BDS, MDS (Conservative Dentistry & Endodontics)</p>
              <p className="about-page-doctor-role">Chief Dental Surgeon</p>
              <div className="about-page-prose">
                <p>
                  Dr. Suryanarayana Sarma is an experienced dental surgeon known for his calm approach and patient-focused care.
                  He specializes in root canal treatments, restorative dentistry, and advanced procedures using modern dental technology.
                </p>
                <p>
                  He focuses on making treatments comfortable and easy to understand for patients. From consultation to treatment,
                  he ensures that every step is explained clearly so patients feel confident and relaxed.
                </p>
                <p>
                  With experience in handling complex dental cases, his approach combines precision, modern techniques,
                  and a strong emphasis on long-term oral health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding about-page-section about-page-section--light">
        <div className="container about-page-narrow">
          <h2 className="about-page-h2">About Dentino Oral Experts</h2>
          <div className="about-page-prose">
            <p>
              At Dentino Oral Experts, we focus on providing dental care that is simple, comfortable, and reliable.
              We understand that many patients feel anxious about dental treatments, which is why our approach is centered around
              clear communication, gentle procedures, and modern techniques that reduce discomfort.
            </p>
            <p>
              From the moment you walk in, our goal is to make you feel at ease. We take time to understand your concerns,
              explain your condition in simple terms, and guide you through the treatment options available.
              Every step is discussed openly so that you know exactly what to expect.
            </p>

            <h3 className="about-page-h3">Our Approach to Care</h3>
            <p>
              We believe that good dental care is not just about treatment — it&apos;s about trust and understanding.
            </p>
            <p>
              Instead of rushing into procedures, we focus on proper diagnosis and planning. Treatments are carried out only after
              explaining the problem, the solution, and the expected outcome. This helps patients feel more confident and comfortable
              throughout the process.
            </p>
            <p>
              We also make use of modern dental technologies such as digital scanning and laser-assisted treatments.
              These help improve accuracy, reduce pain, and make procedures quicker and more efficient.
            </p>
            <p>
              Our aim is always to treat the root cause of the issue and not just provide temporary relief.
              This ensures better long-term oral health and fewer repeat problems.
            </p>

            <h3 className="about-page-h3">Comfortable and Patient-Focused Treatments</h3>
            <p>
              One of the biggest concerns patients have is pain. We address this by using techniques and tools that help reduce
              discomfort as much as possible. Procedures like scaling, root canal treatments, and other treatments are done with care
              so that patients feel relaxed during the process.
            </p>
            <p>
              We also focus on maintaining a clean, hygienic, and well-organized clinic environment.
              Every procedure is carried out with proper sterilization and safety protocols to ensure patient safety.
            </p>

            <h3 className="about-page-h3">Technology That Makes a Difference</h3>
            <p>
              Modern dentistry allows us to provide better and more precise treatments. At Dentino Oral Experts, we use advanced tools
              like intraoral 3D scanners to create accurate digital models of your teeth and gums. This replaces traditional impression
              methods and improves both comfort and precision.
            </p>
            <p>
              Laser-assisted treatments are also used where required to reduce pain, improve healing, and enhance treatment outcomes.
            </p>
            <p>
              These technologies not only improve the quality of care but also make the entire experience smoother for patients.
            </p>

            <h3 className="about-page-h3">Personalized Treatment for Every Patient</h3>
            <p>
              No two patients are the same, and neither are their dental needs. That&apos;s why we create personalized treatment plans
              based on your condition, medical history, and comfort level.
            </p>
            <p>
              Whether it&apos;s a simple cleaning, a root canal, or a complete smile restoration, we ensure that the treatment is suited to you.
              We also guide you on maintaining oral hygiene and preventing future dental problems.
            </p>

            <h3 className="about-page-h3">Our Commitment</h3>
            <p>At Dentino Oral Experts, we are committed to providing care that patients can trust. Our focus is on:</p>
            <ul className="about-page-list">
              <li>Clear communication at every step</li>
              <li>Comfortable and pain-managed procedures</li>
              <li>Use of modern dental technology</li>
              <li>Long-term oral health solutions</li>
              <li>A friendly and supportive environment</li>
            </ul>
            <p>We aim to build long-term relationships with our patients by delivering consistent and reliable dental care.</p>

            <h3 className="about-page-h3">Looking Ahead</h3>
            <p>
              Our vision is to make quality dental care accessible, understandable, and stress-free for everyone.
              We continue to adopt better techniques and technologies to improve patient experience and treatment outcomes.
            </p>
            <p>
              At the end of the day, our goal is simple — to help you maintain a healthy smile with care that feels comfortable and trustworthy.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding about-page-section about-page-section--certs">
        <div className="container">
          <span className="about-page-kicker">CERTIFICATIONS</span>
          <h2 className="about-page-h2 about-page-h2--center">Qualifications &amp; expertise</h2>
          <div className="cert-cards-grid">
            {certifications.map((card) => (
              <article key={card.title} className="cert-card">
                <div className="cert-card-accent" aria-hidden="true" />
                <h3 className="cert-card-title">{card.title}</h3>
                <p className="cert-card-text">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page-cta">
        <div className="container about-page-cta-inner">
          <p className="about-page-cta-text">Ready to book a visit?</p>
          <Link to="/#contact" className="btn btn-primary">
            Book Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
