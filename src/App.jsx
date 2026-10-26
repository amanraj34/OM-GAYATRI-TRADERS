
import { useEffect, useState } from 'react'
import './App.css'

const slides = [
  {
    type: 'video',
    src: '/assets/videos/Dalmia1.mp4',
    eyebrow: 'A STRONGER FOUNDATION',
    title: 'Build your dream home.',
    description: 'Building materials for every stage of your home.',
    button: 'Explore Cement',
    target: '#collections',
  },
  {
    type: 'image',
    src: '/assets/images/hero-home.png',
    eyebrow: 'DESIGNED FOR BETTER LIVING',
    title: 'A home worth coming home to.',
    description: 'Thoughtfully selected materials for beautiful spaces.',
    button: 'Discover More',
    target: '#collections',
  },
  {
    type: 'video',
    src: '/assets/videos/Dalmia11.mp4',
    eyebrow: 'MADE FOR YOUR BUILDING JOURNEY',
    title: 'Every home starts somewhere.',
    description: 'Find the essentials for your next construction project.',
    button: 'Explore Materials',
    target: '#collections',
  },
  {
    type: 'video',
    src: '/assets/videos/Hardware2.mp4',
    eyebrow: 'DETAILS THAT MAKE A DIFFERENCE',
    title: 'Bring your spaces to life.',
    description: 'Explore fittings and finishing touches for your home.',
    button: 'Explore Fittings',
    target: '#collections',
  },
  {
    type: 'video',
    src: '/assets/videos/Hardware3.mp4',
    eyebrow: 'CRAFTED FOR EVERYDAY COMFORT',
    title: 'A better kind of everyday.',
    description: 'Discover products that bring comfort and style together.',
    button: 'Explore Products',
    target: '#collections',
  },
  {
    type: 'video',
    src: '/assets/videos/Hardware4.mp4',
    eyebrow: 'YOUR HOME, YOUR STYLE',
    title: 'Make room for beautiful.',
    description: 'From essential materials to the finishing details.',
    button: 'View Collections',
    target: '#collections',
  },
  {
    type: 'video',
    src: '/assets/videos/Hardware5.mp4',
    eyebrow: 'THE FINISHING TOUCH',
    title: 'Details define your home.',
    description: 'Find inspiration for your next home improvement.',
    button: 'Get Inspired',
    target: '#inspiration',
  },
  {
    type: 'image',
    src: '/assets/images/Dalmia111.png',
    eyebrow: 'OM GAYATRI TRADERS',
    title: 'Everything for your dream home.',
    description: 'Building materials, sanitaryware and fittings for your project.',
    button: 'Explore Our Range',
    target: '#collections',
  },
]

const categories = [
  {
    title: 'Cement',
    detail: 'Materials for foundations, slabs and walls.',
    icon: '▤',
    media: '/assets/videos/Dalmia1.mp4',
    type: 'video',
  },
  {
    title: 'Rod & Steel',
    detail: 'Explore structural building essentials.',
    icon: '▥',
    media: '/assets/images/hero-home.png',
    type: 'image',
  },
  {
    title: 'Gitti & Stone',
    detail: 'Essential materials for construction.',
    icon: '◇',
    media: '/assets/images/Dalmia111.png',
    type: 'image',
  },
  {
    title: 'Pipes',
    detail: 'Plumbing and water-flow essentials.',
    icon: '◎',
    media: '/assets/videos/Hardware2.mp4',
    type: 'video',
  },
  {
    title: 'Motors',
    detail: 'Equipment for everyday requirements.',
    icon: '⚙',
    media: '/assets/videos/Hardware3.mp4',
    type: 'video',
  },
  {
    title: 'Taps',
    detail: 'Finishing touches for modern bathrooms.',
    icon: '♧',
    media: '/assets/videos/Hardware4.mp4',
    type: 'video',
  },
  {
    title: 'Showers',
    detail: 'Comfort for your daily routine.',
    icon: '♨',
    media: '/assets/videos/Hardware5.mp4',
    type: 'video',
  },
  {
    title: 'Commode',
    detail: 'Sanitaryware for modern bathrooms.',
    icon: '◇',
    media: '/assets/images/hero-home.png',
    type: 'image',
  },
  {
    title: 'Paints',
    detail: 'Colour and character for your home.',
    icon: '▧',
    media: '/assets/images/hero-home.png',
    type: 'image',
  },
  {
    title: 'Machines & Others',
    detail: 'Discover more building essentials.',
    icon: '✳',
    media: '/assets/images/Dalmia111.png',
    type: 'image',
  },
]

const productNames = [
  'Premium Selection',
  'Classic Collection',
  'Modern Design',
  'Essential Range',
  'Signature Series',
  'Everyday Choice',
  'Professional Range',
  'Designer Collection',
  'Value Selection',
  'Premium Finish',
  'Traditional Range',
  'Contemporary Style',
  'Project Essentials',
  'Special Collection',
  'Explore All Options',
]

function App() {
  const [active, setActive] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const current = slides[active]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((previous) => (previous + 1) % slides.length)
    }, 7000)

    return () => window.clearInterval(timer)
  }, [])

  function openCategory(category) {
    setSelectedCategory(category)
    window.setTimeout(() => {
      document.getElementById('product-page')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 50)
  }

  function closeCategory() {
    setSelectedCategory(null)
    document.getElementById('collections')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <main>
      <div className="announcement">
        <span>BUILDING MATERIALS · SANITARYWARE · HOME FINISHES</span>
        <a href="#contact">Have a project? Talk to us ↗</a>
      </div>

      <header className="navbar">
        <a className="brand" href="#home" aria-label="OM Gayatri Traders home">
          <span className="brand-mark">OG</span>
          <span className="brand-name">
            OM GAYATRI
            <small>TRADERS · BUILD YOUR DREAM</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a>
          <a href="#inspiration" onClick={() => setMenuOpen(false)}>Inspiration</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Enquire Now ↗
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-media" key={current.src}>
          {current.type === 'video' ? (
            <video
              className="hero-asset"
              src={current.src}
              autoPlay
              muted
              playsInline
              loop
              preload="metadata"
              poster="/assets/images/hero-home.png"
            />
          ) : (
            <img
              className="hero-asset"
              src={current.src}
              alt="Home and construction design inspiration"
              fetchPriority="high"
            />
          )}
        </div>

        <div className="hero-shade" />

        <div className="hero-content" key={`copy-${active}`}>
          <p className="hero-eyebrow">
            <span /> {current.eyebrow}
          </p>
          <h1>{current.title}</h1>
          <p className="hero-description">{current.description}</p>

          <div className="hero-actions">
            <a className="primary-btn" href={current.target}>
              {current.button} <span>↗</span>
            </a>
            <a className="secondary-btn" href="#contact">
              Speak to our team
            </a>
          </div>
        </div>

        <div className="hero-footer">
          <span className="slide-count">
            {String(active + 1).padStart(2, '0')}
            {' '}
            <i>/ {String(slides.length).padStart(2, '0')}</i>
          </span>

          <div className="slide-dots" aria-label="Choose featured slide">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                className={index === active ? 'slide-dot active' : 'slide-dot'}
                onClick={() => setActive(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === active ? 'true' : undefined}
              />
            ))}
          </div>

          <button
            className="pause-btn"
            onClick={() => setActive((previous) => (previous + 1) % slides.length)}
            aria-label="Go to next slide"
          >
            NEXT ↗
          </button>
        </div>
      </section>

      <section className="trust-strip" aria-label="Our product range">
        <a href="#collections"><span>✳</span> Building Essentials</a>
        <a href="#collections"><span>✳</span> Bathroom & Plumbing</a>
        <a href="#collections"><span>✳</span> Home Finishes</a>
        <a href="#contact"><span>✳</span> Personalised Enquiries</a>
      </section>

      <section className="collections section-wrap" id="collections">
        <div className="section-heading">
          <div>
            <p className="eyebrow-dark">EXPLORE OUR COLLECTIONS</p>
            <h2>Everything your home <em>needs.</em></h2>
          </div>
          <p>
            From the first stage of construction to the final finishing
            touches, explore materials for your home-building journey.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <button
              className="category-card"
              key={category.title}
              onClick={() => openCategory(category)}
              aria-label={`Explore ${category.title}`}
            >
              {category.type === 'video' ? (
                <video
                  className="category-media"
                  src={category.media}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-hidden="true"
                />
              ) : (
                <img
                  className="category-media"
                  src={category.media}
                  alt=""
                  loading="lazy"
                />
              )}

              <span className="category-overlay" />
              <span className="category-top">
                <span className="category-number">{category.icon}</span>
                <span className="category-arrow">↗</span>
              </span>
              <span className="category-title">{category.title}</span>
              <span className="category-description">{category.detail}</span>
              <span className="category-explore">Explore Collection ↗</span>
            </button>
          ))}
        </div>
      </section>

      {selectedCategory && (
        <section className="product-page" id="product-page">
          <button className="back-button" onClick={closeCategory}>
            ← Back to collections
          </button>

          <p className="eyebrow-dark">OM GAYATRI TRADERS · COLLECTION</p>
          <h2>{selectedCategory.title}</h2>
          <p>{selectedCategory.detail}</p>

          <div className="product-grid">
            {productNames.map((name, index) => (
              <article className="product-card" key={name}>
                <div className="product-placeholder">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{selectedCategory.icon}</span>
                </div>
                <h3>{name}</h3>
                <p>
                  {selectedCategory.title} · Product variety {index + 1}
                </p>
                <a href="#contact">Enquire about this item ↗</a>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="inspiration" id="inspiration">
        <div className="inspiration-copy">
          <p className="eyebrow">A LITTLE INSPIRATION</p>
          <h2>Imagine it.<br /><em>Build it.</em></h2>
          <p>
            The right materials help turn an idea into a place you love.
            Let’s make your next project a little more special.
          </p>
          <a className="primary-btn" href="#contact">Plan Your Project ↗</a>
        </div>
        <div className="inspiration-image">
          <img
            src="/assets/images/hero-home.png"
            alt="Modern home exterior with warm architectural lighting"
            loading="lazy"
          />
        </div>
      </section>

      <section className="about section-wrap" id="about">
        <p className="eyebrow-dark">YOUR HOME-BUILDING PARTNER</p>
        <h2>Good spaces start with<br /><em>the right choices.</em></h2>
        <p>
          Tell us what you are building. We’ll help you explore the materials
          and product categories that suit your project.
        </p>
        <a className="primary-btn" href="#contact">Let’s Talk ↗</a>
      </section>

      <footer id="contact">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">OG</span>
          <span className="brand-name">
            OM GAYATRI
            <small>TRADERS · BUILD YOUR DREAM</small>
          </span>
        </a>

        <div className="footer-copy">
          <strong>Building your vision, one detail at a time.</strong>
          <span>For product enquiries, contact our team.</span>
        </div>

        <a className="footer-link" href="mailto:info@example.com">
          Send an enquiry ↗
        </a>

        <small className="copyright">
          © {new Date().getFullYear()} OM GAYATRI TRADERS. All rights reserved.
        </small>
      </footer>
    </main>
  )
}

export default App
